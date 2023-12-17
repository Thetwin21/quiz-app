import React, { useState } from "react";

const QuizQuestions = ({ questionData, onFinish }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const correct = option === questionData.correctAnswer;
    setIsCorrect(correct);
  };

  const [currentQuestonId, setCurrentQuestionId] = useState(1);

  const handleNextQuestion = () => {
    if (currentQuestonId < questionData.length - 1) {
      setCurrentQuestionId(currentQuestonId + 1);
    } else {
      onFinish();
    }
  };

  return (
    <>
      {questionData &&
        questionData.map((questions) => (
          
          <div className="">
            <h3>{questions.question}</h3>
            <ul>
              {questions.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    backgroundColor:
                      selectedOption === option
                         ? "green"
                        : "" }}
                >
                  {option}
                </li>
              ))}
            </ul>
            
            <button onClick={ handleNextQuestion}>Next</button>
          </div>
        ))}
    </>
  );
};

export default QuizQuestions;
