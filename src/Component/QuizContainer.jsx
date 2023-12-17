import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';

const questionsData = [
  {
    id: 1,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option E',
    id: 2,
    question: 'Question 2?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 3,
    question: 'Question 3?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 4,
    question: 'Question 4?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 5,
    question: 'Question 5?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    id: 6,
    question: 'Question 6?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },
];

const QuizContainer = ({ onFinish }) => {
    
  const [currentQuestonId, setCurrentQuestionId] = useState(0);

 

  return (
    <div className='w-full'>
      <h2>Quiz App</h2>
      <QuizQuestions
        questionData={questionsData}
        onFinish={onFinish}
        
      />
    </div>
  );
};

export default QuizContainer;
