import mainApi from './apis/mainApi';

function postAnswers(surveyId, data) {
  mainApi.post('/answers', { surveyId, data });
}

export default postAnswers;
