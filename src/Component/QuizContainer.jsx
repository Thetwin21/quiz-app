import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';

const questionsData = [
  {
    id: 1,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 2,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 3,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 4,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 5,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 6,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },
];

const QuizContainer = ({ onFinish }) => {
    
  const [currentQuestonId, setCurrentQuestionId] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestonId < questionsData.length - 1) {
      setCurrentQuestionId(currentQuestonId++);
    } else {
      onFinish();
    }
  };

  return (
    <div>
      <h2>Quiz App</h2>
      <QuizQuestions
        questionData={questionsData[currentQuestonId]}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default QuizContainer;
