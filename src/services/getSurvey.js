import mainApi from './apis/mainApi';

function getSurvey(surveyId) {
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;
