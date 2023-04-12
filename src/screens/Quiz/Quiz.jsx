import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  Button,
  ScrollView,
} from 'react-native';

import styles from './Quiz.style.js';
import { getRegularQuestions, getTrueFalseQuestions } from '../../api/quiz.js';
import { useQuizContext } from '../../context/QuizContext.js';

const Quiz = () => {
  const navigation = useNavigation();

  const { answers, setAnswer, questions, setQuestions } = useQuizContext();

  useEffect(() => {
    fetchQuestions();
  }, []);
  console.log('====================================');
  // console.log({ questions });
  const fetchQuestions = async () => {
    const fetchedQuestions = await getRegularQuestions();
    setQuestions(fetchedQuestions);
  };
  //Warning: Each child in a list should have a unique "key" prop.%s%s
  //See https://reactjs.org/link/warning-keys for more information.%s,

  console.log({ answers });
  if (!questions) return <ActivityIndicator />;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.gameContainer}>
        <ScrollView>
          {questions.map((question) => (
            <View key={question.questionNumber}>
              <Text>{question.question}</Text>
              {question.answers.map((answer) => (
                <View key={`${question.questionNumber}-${answer}`}>
                  <Button
                    onPress={() => {
                      //if questionNumber exists in the array
                      const found = answers.find(
                        (answer) =>
                          answer.questionNumber === question.questionNumber
                      );

                      //then update the answer of the existing object with the question number

                      if (found) {
                        setAnswer(
                          answers.map((tempAnswer) => {
                            if (
                              found.questionNumber === tempAnswer.questionNumber
                            ) {
                              return {
                                questionNumber: tempAnswer.questionNumber,
                                answer: answer,
                              };
                            } else {
                              return {
                                questionNumber: tempAnswer.questionNumber,
                                answer: tempAnswer.answer,
                              };
                            }
                          })
                        );
                      } else {
                        // if the question number doesnt exist add the answer and the question number object to the array.
                        setAnswer([
                          ...answers,
                          {
                            questionNumber: question.questionNumber,
                            answer: answer,
                          },
                        ]);
                      }
                    }}
                    title={answer}
                    color="#841584"
                  />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>

        <View style={styles.answerHolder}></View>
        <Button
          title="End quiz"
          onPress={() => navigation.navigate('Finish')}
        />
        <Button
          title="See score"
          onPress={() => navigation.navigate('Results')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
