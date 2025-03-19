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
        <Route path="/survey/:surveyId/:step" element={<SurveyPage />} />
      </Routes>
    </div>
  );
}

/*

"/survey" 에 추가로 필요한 것 : 질문 데이터를 받아오기 위한 설문ID, 설문조사 화면 전환을 위한 값

<전통적인 방식의 웹서비스 - queryString 이용>
http://www.surveypie.com/survey?id=adc123

<path에 포함되어서 데이터를 받아오는 방법>
http://www.surveypie.com/survey/adc123
문제 ) abc123 이 말 그대로 path인건지, 데이터를 담아둔 영역인건지 판단하기 쉽지 않음
  -> path="/survey/:abc123" 콜론으로 구별 

*/

export default App;
