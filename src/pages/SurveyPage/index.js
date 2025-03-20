import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  const params = useParams();
  console.log(params);

  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'select',
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
      type: 'textarea',
      required: false,
      options: {},
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
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
      />
    </div>
  );
}

export default SurveyPage;
