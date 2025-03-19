import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';
import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문3 입니다.',
      desc: '설명3 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      {/* <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      /> */}
      <div>Hello World</div>
      <Routes>
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </div>
  );
}

export default App;
