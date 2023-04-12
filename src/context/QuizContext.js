import React, { useState, useContext, useEffect } from 'react';

const QuizContext = React.createContext();

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswer] = useState([]);
  const [results, setResults] = useState();
  const [scores, setScores] = useState();
  useEffect(() => {
    const tempResults = questions?.map((question) => {
      const userAnswer = answers.find(
        (answer) => answer.questionNumber === question.questionNumber
      );

      if (question.questionNumber === userAnswer?.questionNumber) {
        const isCorrect = userAnswer.answer === question.correctAnswer;
        return {
          questionNumber: question.questionNumber,
          question: question.question,
          userAnswer: userAnswer.answer,
          result: isCorrect ? 'Correct' : 'Incorrect',
        };
      } else {
        return {
          questionNumber: question.questionNumber,
          question: question.question,
          userAnswer: 'Not answered',
        };
      }
    });

    const tempScore = questions?.reduce((accumulator, question) => {
      const userAnswer = answers.find(
        (answer) => answer.questionNumber === question.questionNumber
      );

      if (userAnswer != undefined) {
        if (userAnswer.answer === question.correctAnswer) {
          return accumulator + 1;
        }
      }

      return accumulator;
    }, 0);
    setResults(() => tempResults);
    setScores(tempScore);
  }, [answers]);
  return (
    <QuizContext.Provider
      value={{
        answers,
        setAnswer,
        questions,
        setQuestions,
        results,
        setResults,
        scores,
        setScores,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
