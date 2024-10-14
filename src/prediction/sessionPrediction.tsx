

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { runTest } from './sessionUtils';

interface Prediction {
  input: string;
  output: string;
  ucbScore: number;
}

/**
 * Session Optimizer Component
 */
const SessionOptimizerComponent = () => {
  const [result, setResult] = useState<{ prediction?: Prediction; error?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunTest = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      console.log('Starting runTest...');
      const testResult = await runTest();
      console.log('Test completed. Result:', testResult);
      setResult(testResult);
    } catch (error: any) {
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
