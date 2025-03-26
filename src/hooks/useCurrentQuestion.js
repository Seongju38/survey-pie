import { useRecoilValue } from 'recoil';

import questionsState from '../stores/questions/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const questions = useRecoilValue(questionsState);

  return questions[step];
}

export default useCurrentQuestion;
