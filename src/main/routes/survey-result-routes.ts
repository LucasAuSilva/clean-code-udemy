import { Router } from 'express'
import { adminAuth } from '@/main/middlewares/admin-auth'
import { adaptRoute } from '@/main/adapter/express/express-route-adapter'
import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', adminAuth, adaptRoute(makeSaveSurveyResultController()))
}
