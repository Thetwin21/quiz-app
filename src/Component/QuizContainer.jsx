import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';

const questionsData = [
  {
    id: 1,
    question: 'Question 1?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },
  // Add more questions here
];

const QuizContainer = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div>
      <h2>Quiz App</h2>
      <QuizQuestions
        questionData={questionsData[currentQuestionIndex]}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default QuizContainer;
