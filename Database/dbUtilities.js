import { insertCurriculumData } from './dbInitialization.js';
import SQLite from 'react-native-sqlite-storage';

export async function parseStrToCurriculumData(inputStr) {
    try {
        const inputType = parseInt(inputStr.slice(0, 2), 10);
        const sequence = parseInt(inputStr.slice(2, 4), 10);
        const content = inputStr.slice(4);

        await insertCurriculumData(inputType, sequence, content);
    } catch (error) {
        console.error('Error when save data to curriculum table:', error);
    }
}

function calculateSlopes(data) {
    if (data.length < 2) {
        return []; // Not enough data to calculate any slopes
    }
    const slopes = [];
    for (let i = 0; i < data.length - 1; i++) {
        const firstScore = data[i].score;
        const lastScore = data[i + 1].score;
        const firstId = data[i].id;
        const lastId = data[i + 1].id;

        const deltaY = lastScore - firstScore;
        const deltaX = lastId - firstId;

        if (deltaX === 0) {
            slopes.push(null); // Avoid division by zero
        } else {
            const slope = deltaY / deltaX;
            slopes.push(slope);
        }
    }
    return slopes;
}

// Function to fetch data and calculate the slope
function fetchSlopeData(db) {
    db.transaction(tx => {
        tx.executeSql(
            `SELECT id, score FROM curriculum WHERE score IS NOT NULL ORDER BY id`,
            [],
            (tx, results) => {
                const rows = results.rows;
                let data = [];
                for (let i = 0; i < rows.length; i++) {
                    data.push(rows.item(i));
                }

                console.log('Id and Score Data:', data);

                // Calculate the slope based on the query results
                const slope = calculateSlopes(data);
                if (slope !== null) {
                    console.log(`The slope of the score trend is`, slope);
                } else {
                    console.log('Not enough data to calculate the slope.');
                }
            },
            (tx, error) => {
                console.error('Error executing SQL:', error.message);
            }
        );
    }, error => {
        console.error('Transaction error:', error.message);
    },
    () => {
        console.log('Transaction completed successfully');
    });
}


export function getSlopeDataFromDB() {
    // Open the database with correct callback structure
    const db = SQLite.openDatabase(
        { name: 'mydatabase.db', location: 'default' },
        () => {
            console.log('Database opened successfully');
            // Now that the database is open, run the query
            fetchSlopeData(db);
        },
        error => {
            console.error('Error opening database:', error);
        }
    );
}

const pageMapping = {
    11: "talkingPage",
    12: "eyeContactPage",
    13: "emotionPage",
    14: "typingPage",
    15: "multipleChoicePage",
    16: "sliderPage",
    17: "validateActivityPage",
    21: "videoLessonsPage",
    22: "readingPage",
    23: "teacherInstructionPage",
    24: "picturesDiagramsPage",
    25: "animationsTasksPage",
    26: "conversationalAIPage",
    27: "virtualAvatarPage",
    // more?
};

export function openPageWithContent(curriculumNum, content) {
    const pageId = pageMapping[curriculumNum];
    
    if (!pageId) {
        console.log("Invalid curriculum number.");
        return;
    }

    if (pageId === "placeholder") {
        console.log("This page is under development. Stay tuned!");
        return;
    }

    console.log(`Redirecting to ${pageId}...`);
    console.log(`Displaying content: ${content}`);

    navigation.navigate(pageId, { content });

    console.log(`Simulated navigation to ${pageId} with content: ${content}`);
}
