import React, { useState } from 'react';

const QuizQuestions = ({ questionData, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const correct = option === questionData.correctAnswer;
    setIsCorrect(correct);
  };

  const handleNext = () => {
    setSelectedOption('');
    setIsCorrect(null);
    onNextQuestion();
  };

  return (
    <div>
      <h3>{questionData.question}</h3>
      <ul>
        {questionData.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{
              backgroundColor:
                selectedOption === option
                  ? isCorrect
                    ? 'green'
                    : 'red'
                  : '',
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuizQuestions;
