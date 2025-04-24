import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Appbar, Card, Title, Paragraph, RadioButton, Button, ActivityIndicator } from 'react-native-paper';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import SQLite from 'react-native-sqlite-storage';
import { runRLStep } from '../../prediction/sessionUtils';
import styles from './styles';
import { setupRLTables } from '../../../Database/dbInitialization';

const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => console.log("✅ DB connected"),
  error => console.error("DB connect error", error)
);

const CurriculumTodo = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [rlDecision, setRlDecision] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    loadInitialQuestion();
  }, []);
  useEffect(() => {
    setupRLTables(db)
      .then(() => {
        console.log("✅ RL Tables Ready");
  
        db.transaction(tx => {
          const questions = [
            {
              content: "What is 2 + 2?",
              input_output: "math",
              sequence: 1,
              difficulty: "easy",
              correct_answer: "4",
              choices: JSON.stringify(["2", "3", "4", "5"])
            },
            {
              content: "What is the square root of 144?",
              input_output: "math",
              sequence: 2,
              difficulty: "medium",
              correct_answer: "12",
              choices: JSON.stringify(["10", "11", "12", "13"])
            },
            {
              content: "Integrate x dx",
              input_output: "math",
              sequence: 3,
              difficulty: "hard",
              correct_answer: "0.5x^2 + C",
              choices: JSON.stringify(["x^2", "x", "0.5x^2 + C", "C"])
            },
            {
              content: "What is the capital of France?",
              input_output: "geo",
              sequence: 4,
              difficulty: "easy",
              correct_answer: "Paris",
              choices: JSON.stringify(["Rome", "Berlin", "Madrid", "Paris"])
            },
            {
              content: "Which country has the city Timbuktu?",
              input_output: "geo",
              sequence: 5,
              difficulty: "medium",
              correct_answer: "Mali",
              choices: JSON.stringify(["Niger", "Ghana", "Mali", "Chad"])
            },
            {
              content: "Name the ocean east of Madagascar.",
              input_output: "geo",
              sequence: 6,
              difficulty: "hard",
              correct_answer: "Indian Ocean",
              choices: JSON.stringify(["Pacific", "Atlantic", "Arctic", "Indian Ocean"])
            }
          ];
          
  
          questions.forEach(q => {
            tx.executeSql(
              `INSERT INTO curriculum (content, input_output, sequence, difficulty, correct_answer, completed, score, choices)
               SELECT ?, ?, ?, ?, ?, 0, 0, ?
               WHERE NOT EXISTS (
                 SELECT 1 FROM curriculum WHERE content = ? AND difficulty = ?
               )`,
              [q.content, q.input_output, q.sequence, q.difficulty, q.correct_answer, q.choices, q.content, q.difficulty],
              () => console.log(`✅ Ensured: ${q.content}`),
              (_, err) => {
                console.error(`Insert failed for: ${q.content}`, err);
                return true;
              }
            );            
          });
        });
  
        loadInitialQuestion();
      })
      .catch(err => {
        console.error("setupRLTables failed:", err);
      });
  }, []);
  


  const loadInitialQuestion = () => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM curriculum WHERE completed = 0 ORDER BY sequence LIMIT 1`,
        [],
        (_, { rows }) => {
          if (rows.length > 0) {
            setCurrentQuestion(rows.item(0));
          }
          setIsLoading(false);
        },
        (_, err) => {
          console.error("Failed to load question", err);
          setIsLoading(false);
        }
      );
    });
  };

  const checkAnswer = (): boolean => {
    try {
      if (
        !currentQuestion?.correct_answer ||
        typeof selectedAnswer !== 'string'
      ) return false;
  
      return selectedAnswer.trim().toLowerCase() === currentQuestion.correct_answer.trim().toLowerCase();
    } catch (err) {
      console.error("checkAnswer error:", err);
      return false;
    }
  };
  

  const getNextQuestion = async (topic: string, difficulty: 'easy' | 'medium' | 'hard'): Promise<any> => {
    const difficulties = {
      easy: ["medium", "hard"],
      medium: ["easy", "hard"],
      hard: ["medium", "easy"]
    };
  
    const queryQuestion = (diff: string): Promise<any> => {
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `SELECT * FROM curriculum WHERE completed = 0 AND input_output = ? AND difficulty = ? ORDER BY RANDOM() LIMIT 1`,
            [topic, diff],
            (_, { rows }) => {
              if (rows.length > 0) {
                resolve(rows.item(0));
              } else {
                resolve(null);
              }
            },
            (_, err) => reject(err)
          );
        });
      });
    };
  
    // Try current difficulty first
    let next = await queryQuestion(difficulty);
    if (next) return next;
  
    // Try alternates
    for (const diff of difficulties[difficulty] || []) {
      next = await queryQuestion(diff);
      if (next) return next;
    }
  
    // Nothing left
    return null;
  };
  
  

  const handleSubmit = async () => {
    try {
      if (!currentQuestion) {
        Alert.alert("Error", "No current question loaded.");
        return;
      }
  
      if (selectedAnswer === null || selectedAnswer === "") {
        Alert.alert("Error", "Please select an answer.");
        return;
      }
  
      const isCorrect = checkAnswer();
      const topic = currentQuestion.input_output;
      const difficulty = currentQuestion.difficulty ?? "medium";
      if (isCorrect) {
        db.transaction(tx => {
          tx.executeSql(
            `UPDATE curriculum SET completed = 1 WHERE id = ?`,
            [currentQuestion.id],
            () => console.log(`✅ Marked question ${currentQuestion.id} as completed`),
            (_, err) => console.error("Failed to update completion:", err)
          );
        });
      }
      
  
      const result = await runRLStep({
        studentId: 1,
        topic,
        accuracy: isCorrect ? 80 : 40,
        timeTaken: 7.5,
        emotion: isCorrect ? "Confident" : "Frustrated",
        isCorrect,
        hintsUsed: 0,
        lastAction: rlDecision || "repeat",
      });
      
  
      setRlDecision(result.nextAction);
  
      let nextDiff = difficulty;
      if (result.nextAction === "increase_difficulty") nextDiff = "hard";
      else if (result.nextAction === "decrease_difficulty") nextDiff = "easy";
      else if (result.nextAction === "repeat") nextDiff = difficulty;
      else nextDiff = "medium";
  
      const nextQ = await getNextQuestion(topic, nextDiff).catch(err => {
        console.error("Error getting next question:", err?.message || err);
        return null;
      });
      
  
      if (nextQ) {
        setCurrentQuestion(nextQ);
        setSelectedAnswer(null);
      } else {
        Alert.alert("You're done!", "No more questions in this track.");
      }
  
    } catch (err: any) {
      console.error("Uncaught crash in handleSubmit():", err);
      Alert.alert("Crash", "Something went wrong while processing your answer.");
    }
  };
  
  if (isLoading || !currentQuestion) {
    return (
      <BackgroundWrapper>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Paragraph>Loading your curriculum...</Paragraph>
        </View>
      </BackgroundWrapper>
    );
  }

  const options = currentQuestion?.choices
  ? JSON.parse(currentQuestion.choices)
  : [currentQuestion.correct_answer]; // fallback

  return (
    <BackgroundWrapper>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Adaptive Curriculum" />
      </Appbar.Header>

      <ScrollView style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Question</Title>
            <Paragraph>{currentQuestion.content}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Select Answer</Title>
            <RadioButton.Group
              onValueChange={setSelectedAnswer}
              value={selectedAnswer || ''}
            >
              {options.map((option, index) => (
                <RadioButton.Item key={index} label={option} value={option} />
              ))}
            </RadioButton.Group>

            <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 10 }}>
              Submit Answer
            </Button>
          </Card.Content>
        </Card>

        {rlDecision && (
          <Card style={styles.card}>
            <Card.Content>
              <Title>AI Decision</Title>
              <Paragraph>Next Action: {rlDecision}</Paragraph>
            </Card.Content>
          </Card>
        )}
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default CurriculumTodo;
