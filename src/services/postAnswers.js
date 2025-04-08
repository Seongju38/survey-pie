import mainApi from './apis/mainApi';

function postAnswers(surveyId, data) {
  return mainApi.post('/answers', { surveyId, data });
}

export default postAnswers;
