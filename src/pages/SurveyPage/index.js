import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'text',
      required: false,
      options: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문3 입니다.',
      desc: '설명3 입니다.',
      type: 'textarea',
      required: false,
      options: {
        placeholder: 'placeholder 입니다.',
      },
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
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
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
