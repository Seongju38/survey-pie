import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  useEffect(() => {
    axios.get('http://localhost:3001/surveys/1').then((res) => {
      console.log(res);
    });
  }, []);

  return questions[step];
}

export default useCurrentQuestion;
