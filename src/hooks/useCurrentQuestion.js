import { useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const questions = useRecoilValue(surveyState).questions;

  return questions[step];
}

export default useCurrentQuestion;
