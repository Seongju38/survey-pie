import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  useEffect(() => {
    axios.get('http://localhost:3001/surveys/1').then((res) => {
      console.log(res);
      setSurvey(res.data);
    });
  }, [setSurvey]);

  return questions[step];
}

export default useCurrentQuestion;
