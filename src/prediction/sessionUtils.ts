import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => console.log("✅ DB connected (RL Engine)"),
  error => console.error("DB connection failed", error)
);

// ACTION SPACE
const actions = ['repeat', 'give_hint', 'increase_difficulty', 'decrease_difficulty', 'switch_topic'];

// BUILD STATE: topic|accLevel|speed|emotion
export function buildState({ topic, accuracy, timeTaken, emotion }: {
  topic: string,
  accuracy: number,
  timeTaken: number,
  emotion: string
}): string {
  const acc = accuracy < 50 ? 'low' : accuracy < 80 ? 'med' : 'high';
  const speed = timeTaken < 5 ? 'fast' : timeTaken < 10 ? 'med' : 'slow';
  return `${topic}|${acc}|${speed}|${emotion}`;
}

// GET REWARD
export function getReward({ isCorrect, emotion, timeTaken, hintsUsed }: {
  isCorrect: boolean,
  emotion: string,
  timeTaken: number,
  hintsUsed: number
}): number {
  if (isCorrect && emotion === 'Confident') return 10;
  if (isCorrect) return 5;
  if (!isCorrect && emotion === 'Frustrated') return -10;
  if (!isCorrect) return -5;
  if (hintsUsed > 0) return -2;
  return 0;
}

// UPDATE Q VALUE
export async function updateQ({
  studentId,
  state,
  action,
  reward,
  nextState,
  alpha = 0.1,
  gamma = 0.95
}: {
  studentId: number,
  state: string,
  action: string,
  reward: number,
  nextState: string,
  alpha?: number,
  gamma?: number
}): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT q_value FROM Combos WHERE student_id = ? AND state = ? AND action = ?`,
          [studentId, state, action],
          (_, result) => {
            const oldQ = result.rows.length ? result.rows.item(0).q_value : 0;

            tx.executeSql(
              `SELECT MAX(q_value) as max_q FROM Combos WHERE student_id = ? AND state = ?`,
              [studentId, nextState],
              (_, result2) => {
                const maxNextQ = result2.rows.item(0).max_q ?? 0;
                const newQ = oldQ + alpha * (reward + gamma * maxNextQ - oldQ);

                tx.executeSql(
                  `INSERT OR REPLACE INTO Combos (student_id, state, action, q_value)
                   VALUES (?, ?, ?, ?)`,
                  [studentId, state, action, newQ],
                  () => resolve(),
                  (_, err) => {
                    console.error("INSERT Q failed:", err);
                    reject(err);
                    return true;
                  }
                );
              },
              (_, err) => {
                console.error("SELECT MAX Q failed:", err);
                reject(err);
                return true;
              }
            );
          },
          (_, err) => {
            console.error("SELECT Q failed:", err);
            reject(err);
            return true;
          }
        );
      });
    } catch (e) {
      console.error("Q-Update outer error:", e);
      reject(e);
    }
  });
}

// PICK NEXT ACTION (ε-greedy)
export async function getNextAction(
  studentId: number,
  state: string,
  epsilon = 0.2
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (Math.random() < epsilon) {
      return resolve(actions[Math.floor(Math.random() * actions.length)]);
    }

    db.transaction(tx => {
      tx.executeSql(
        `SELECT action FROM Combos WHERE student_id = ? AND state = ? ORDER BY q_value DESC LIMIT 1`,
        [studentId, state],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0).action);
          } else {
            resolve(actions[Math.floor(Math.random() * actions.length)]);
          }
        },
        (_, err) => reject(err)
      );
    });
  });
}

// MAIN RL FUNCTION
export async function runRLStep({
  studentId,
  topic,
  accuracy,
  timeTaken,
  emotion,
  isCorrect,
  hintsUsed,
  lastAction
}: {
  studentId: number,
  topic: string,
  accuracy: number,
  timeTaken: number,
  emotion: string,
  isCorrect: boolean,
  hintsUsed: number,
  lastAction: string
}): Promise<{ nextAction: string, nextState: string }> {
  try {
    const state = buildState({ topic, accuracy, timeTaken, emotion });
    const reward = getReward({ isCorrect, emotion, timeTaken, hintsUsed });

    await updateQ({
      studentId,
      state,
      action: lastAction,
      reward,
      nextState: state
    });

    const nextAction = await getNextAction(studentId, state);

    // Log interaction safely
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO InteractionLogs (student_id, state, action, reward, is_correct, time_taken, emotion, hints_used)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [studentId, state, lastAction, reward, isCorrect ? 1 : 0, timeTaken, emotion, hintsUsed],
        () => console.log("✅ Interaction logged"),
        (_, err) => {
          console.error("Failed to log interaction:", err);
          return true; // prevent crashing
        }
      );
    });

    return { nextAction, nextState: state };

  } catch (err: any) {
    const msg = err?.message || JSON.stringify(err) || 'Unknown Error';
    console.error("🔥 runRLStep() CRASHED:", msg);
    return { nextAction: "repeat", nextState: "error_fallback" };
  }
  
}
