import React from 'react';
import { Text, SafeAreaView, Button, View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { useQuizContext } from '../../context/QuizContext.js';
import { useNavigation } from '@react-navigation/native';

const Results = () => {
  const navigation = useNavigation();

  const { results, scores, setScores, setAnswer } = useQuizContext();

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: 200,
      backgroundColor: 'red',
    },
    totalScore: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    result: {
      backgroundColor: 'grey',
      padding: 10,
      marginBottom: 10,
    },
    questionNumber: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    question: {
      marginTop: 5,
    },
    answer: {
      marginTop: 5,
    },
  });

  // console.log('scores');
  // console.log(scores);
  // console.log('results');
  // console.log(results);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.totalScore}>TOTAL SCORE: {scores}</Text>
          <Button
            title="Play again"
            onPress={() => {
              setScores(0);
              setAnswer([]);
              navigation.navigate('Starter');
            }}
          />

          {/* Content for top half of screen */}
        </View>
        <View style={{ flex: 1 }}>
          {/* Content for bottom half of screen */}
          <ScrollView>
            <ScrollView>
              {results &&
                results.map((result) => (
                  <View key={result.questionNumber} style={styles.result}>
                    <Text style={styles.questionNumber}>
                      Question Number: {result.questionNumber}
                    </Text>
                    <Text style={styles.question}>
                      Question: {result.question}
                    </Text>
                    <Text style={styles.answer}>
                      User Answer: {result.userAnswer}
                    </Text>
                    <Text style={styles.answer}>Result: {result.result}</Text>
                  </View>
                ))}
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Results;
