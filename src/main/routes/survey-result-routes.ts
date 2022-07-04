import { Router } from 'express'
import { auth } from '@/main/middlewares/auth'
import { adaptRoute } from '@/main/adapter/express/express-route-adapter'
import { makeSaveSurveyResultController, makeLoadSurveyResultController } from '@/main/factories/controllers/survey-result'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
  router.get('/surveys/:surveyId/results', auth, adaptRoute(makeLoadSurveyResultController()))
}
