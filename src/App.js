
import { useState } from 'react';
import './App.css';
import QuizContainer from './Component/QuizContainer';

const App = () => {
  const [showResult, setShowResult] = useState(false);

  const handleQuizFinish = () => {
    setShowResult(true);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Finished! Display Result Here</h2>
        </div>
      ) : (
        <QuizContainer onFinish={handleQuizFinish} />
      )}
    </div>
  );
};

export default App;