import {
  accountSchema,
  loginParamSchema,
  errorSchema,
  surveysSchema,
  surveySchema,
  surveyAnswerSchema,
  signupParamSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema,
  surveyResultAnswerSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamSchema,
  signupParams: signupParamSchema,
  error: errorSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  addSurveyParams: addSurveyParamsSchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
