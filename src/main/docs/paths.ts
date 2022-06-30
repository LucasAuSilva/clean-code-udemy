import {
  loginPath,
  signupPath,
  surveyResultPath,
  surveysPath
} from './paths/'

export default {
  '/login': loginPath,
  '/signup': signupPath,
  '/surveys': surveysPath,
  '/surveys/{surveyId}/results': surveyResultPath
}
