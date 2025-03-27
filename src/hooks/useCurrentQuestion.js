import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';
import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurvey(res.data);
  //   });
  // }, [setSurvey, surveyId]);

  return questions[step];
}

export default useCurrentQuestion;
