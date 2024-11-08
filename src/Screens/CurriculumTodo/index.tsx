// CurriculumTodo.tsx

import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, List, ActivityIndicator, Checkbox, Button } from 'react-native-paper'; // Import Checkbox
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import styles from './styles';
import SQLite from 'react-native-sqlite-storage';
import { loadData, predictNext } from '../../prediction/sessionUtils'; // Ensure the path is correct

const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => console.log('Database opened successfully'),
  error => console.error('Error opening database', error)
);

interface Session {
  content: string;
  input_output: string;
}

interface Prediction {
  input: string;
  output: string;
  ucbScore: number;
}

interface TodoItem {
  title: string;
  description: string;
  checked: boolean;
}

const CurriculumTodo = ({ navigation }) => {
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [nextPrediction, setNextPrediction] = useState<Prediction | null>(null);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndPredict = async () => {
      try {
        const currentSessionData = await getCurrentSession();
        setCurrentSession(currentSessionData);

        const data = await loadData();
        const prediction = predictNext(data);
        setNextPrediction(prediction);

        if (currentSessionData && prediction) {
          const todos = generateTodoItems(currentSessionData, prediction);
          setTodoItems(todos);
        } else {
          // Handle cases where prediction might be null
          setTodoItems([]);
        }

        setIsLoading(false);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchDataAndPredict();
  }, []);

  const getCurrentSession = (): Promise<Session> => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM curriculum WHERE completed = 0 ORDER BY sequence LIMIT 1',
          [],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows.item(0) as Session);
            } else {
              reject(new Error('No incomplete curriculum items found'));
            }
          },
          (_, error) => reject(error)
        );
      });
    });
  };

  const generateTodoItems = (currentSession: Session, prediction: Prediction): TodoItem[] => {
    return [
      { title: `Complete ${currentSession.content}`, description: `Focus on the current curriculum item`, checked: false },
      { title: `Practice ${currentSession.input_output}`, description: `Reinforce your current learning`, checked: false },
      { title: `Prepare for ${prediction.input}`, description: `Get ready for the next predicted input: ${prediction.input}, output: ${prediction.output}`, checked: false },
    ];
  };

  const toggleCheckbox = (index: number) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodoItems(updatedTodos);
  };

  if (isLoading) {
    return (
      <BackgroundWrapper>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text>Loading your curriculum...</Text>
        </View>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Curriculum To Do" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        {/* uncomment this to add a button to navigate to ImageOutTest */}
      {/* <Button
        mode="contained"
        onPress={() => navigation.navigate('ImageOutTest')}
      >
        Image Out Test
      </Button> */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Current Task</Title>
            {currentSession && (
              <>
                <Paragraph>Content: {currentSession.content}</Paragraph>
                <Paragraph>Focus: {currentSession.input_output}</Paragraph>
              </>
            )}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Next Recommended Focus</Title>
            {nextPrediction ? (
              <>
                <Paragraph>Input: {nextPrediction.input}</Paragraph>
                <Paragraph>Output: {nextPrediction.output}</Paragraph>
                <Paragraph>Confidence: {nextPrediction.ucbScore.toFixed(4)}</Paragraph>
              </>
            ) : (
              <Paragraph>No prediction available</Paragraph>
            )}
          </Card.Content>
        </Card>

        <Text style={styles.listTitle}>Tasks</Text>
        {todoItems.length > 0 ? (
          todoItems.map((item, index) => (
            <List.Item
              key={index}
              title={item.title}
              description={item.description}
              onPress={() => toggleCheckbox(index)} // Make the entire row clickable
              left={props => (
                <Checkbox
                  status={item.checked ? 'checked' : 'unchecked'}
                  onPress={() => toggleCheckbox(index)}
                />
              )}
            />
          ))
        ) : (
          <Paragraph>No tasks available</Paragraph>
        )}
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default CurriculumTodo;
