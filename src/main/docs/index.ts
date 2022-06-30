import { loginPath, signupPath, surveyResultPath, surveysPath } from './paths'
import { accountSchema, loginParamSchema, errorSchema, surveysSchema, surveySchema, surveyAnswerSchema, apiKeyAuthSchema, signupParamSchema, addSurveyParamsSchema, saveSurveyParamsSchema, surveyResultSchema } from './schemas'
import { badRequest, unauthorized, notFound, forbidden, serverError } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Code Udemy',
    description: 'Project develop in Node.JS for explain advanced concepts in programming like TDD, Clean Architecture, Design Patterns and SOLID',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Account'
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signupPath,
    '/surveys': surveysPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamSchema,
    signupParams: signupParamSchema,
    error: errorSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    addSurveyParams: addSurveyParamsSchema,
    surveyAnswer: surveyAnswerSchema,
    surveyResult: surveyResultSchema,
    saveSurveyParams: saveSurveyParamsSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    notFound,
    forbidden,
    serverError
  }
}
