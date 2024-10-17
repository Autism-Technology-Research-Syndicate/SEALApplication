import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createCombosTable, insertComboData } from '../../Database/dbInitialization';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => { console.log('Database opened successfully'); },
  error => { console.error('Error opening database', error); }
);

const inputs = ['Talking', 'Eye contact', 'Emotion', 'Typing', 'Option selection', 'Slider', 'Pinging host'];
const outputs = ['Video lessons', 'Reading', 'Teacher instruction', 'Pictures/diagrams', 'Animations', 'Conversational AI', 'Virtual avatar', 'In-person instruction'];

/**
 * Loads data from the Combos table in the database
 * @returns {Promise<Object>} A promise that resolves to an object containing the processed data
 */

const loadData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Combos',
        [],
        (_, { rows }) => {
          const data = rows.raw().reduce((acc, row) => {
            if (!acc[row.input]) acc[row.input] = {};
            if (!acc[row.input][row.output]) acc[row.input][row.output] = { totalScore: 0, count: 0 };
            acc[row.input][row.output].totalScore += parseFloat(row.score);
            acc[row.input][row.output].count += 1;
            return acc;
          }, {});
          console.log('Data loaded successfully:', data);
          resolve(data);
        },
        (_, error) => {
          console.error('Error loading data:', error);
          reject(error);
        }
      );
    });
  });
};

/**
 * Calculates the Upper Confidence Bound (UCB) score
 * @param {number} totalScore - The total score for a given input-output combination
 * @param {number} count - The number of times this combination has been tried
 * @param {number} totalTrials - The total number of trials across all combinations
 * @param {number} explorationFactor - A factor to balance exploration vs. exploitation (default: 1)
 * @returns {number} The calculated UCB score
 */

const calculateUCB = (totalScore, count, totalTrials, explorationFactor = 1) => {
  const averageScore = count > 0 ? totalScore / count : 0;
  return averageScore + explorationFactor * Math.sqrt(Math.log(totalTrials) / (count || 1));
};


/**
 * Predicts the next best input-output combination based on UCB scores
 * @param {Object} data - The processed data from the database
 * @returns {Object|null} The best input-output pair and its UCB score, or null if no data is available
 */

const predictNext = (data) => {
  if (Object.keys(data).length === 0) {
    console.log('No data available for prediction');
    return null;
  }

    // Calculate total trials across all combinations


  const totalTrials = Object.values(data).reduce(
    (sum, outputs) => sum + Object.values(outputs).reduce((s, { count }) => s + count, 0),
    0
  );

  let bestScore = -Infinity;
  let bestPair = null;

  for (const [input, outputs] of Object.entries(data)) {
    for (const [output, { totalScore, count }] of Object.entries(outputs)) {
      const ucbScore = calculateUCB(totalScore, count, totalTrials);
      if (ucbScore > bestScore) {
        bestScore = ucbScore;
        bestPair = { input, output, ucbScore };
      }
    }
  }

  console.log('Prediction result:', bestPair);
  return bestPair;
};

//  Below function is for testing purposes

/**
 * Generates and inserts sample data into the database
 * @param {number} numRows - The number of sample rows to generate (default: 100)
 * @returns {Promise<void>}
 */

const generateAndInsertSampleData = async (numRows = 100) => {
  const errors = [];
  for (let i = 0; i < numRows; i++) {
    try {
      const input = inputs[Math.floor(Math.random() * inputs.length)];
      const output = outputs[Math.floor(Math.random() * outputs.length)];
      const score = Math.random().toFixed(2); // Random score between 0 and 1
      await insertComboData(score, input, output);
    } catch (error) {
      errors.push(`Error inserting row ${i + 1}: ${error.message}`);
    }
  }
  if (errors.length > 0) {
    console.error('Errors during sample data insertion:', errors);
    throw new Error(`Failed to insert ${errors.length} rows`);
  }
  console.log(`${numRows} sample rows inserted successfully`);
};

const runTest = async () => {
  try {
    console.log('Starting runTest...');

    console.log('Creating Combos table...');
    await createCombosTable();
    console.log('Combos table created successfully');

    console.log('Generating and inserting sample data...');
    await generateAndInsertSampleData();

    console.log('Loading data for prediction...');
    const data = await loadData();

    console.log('Data loaded successfully. Data:', data);

    console.log('Making prediction...');
    const prediction = predictNext(data);

    if (prediction) {
      console.log(`Next best combination: Input - ${prediction.input}, Output - ${prediction.output}`);
    } else {
      console.log('Unable to make a prediction. Insufficient data.');
    }

    console.log('Test completed.');
    return { prediction };
  } catch (error) {
    console.error('Error in runTest:', error.message);
    console.error('Error stack:', error.stack);
    return { error: error.message };
  }
};

const SessionOptimizerComponent = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunTest = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      console.log('Starting runTest...');
      const testResult = await runTest();
      console.log('Test completed. Result:', testResult);
      setResult(testResult);
    } catch (error) {
      console.error('Test failed:', error.message);
      setResult({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button 
        title={isLoading ? "Running..." : "Run Session Optimizer Test"} 
        onPress={handleRunTest}
        disabled={isLoading}
      />
      {result && (
        <View style={{ marginTop: 20 }}>
          {result.prediction ? (
            <>
              <Text>Best Input: {result.prediction.input}</Text>
              <Text>Best Output: {result.prediction.output}</Text>
              <Text>UCB Score: {result.prediction.ucbScore.toFixed(4)}</Text>
            </>
          ) : (
            <Text>No prediction available</Text>
          )}
          {result.error && <Text>Error: {result.error}</Text>}
        </View>
      )}
    </View>
  );
};

export default SessionOptimizerComponent;