import { Router } from 'express'
import { auth, adminAuth } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapter/express/express-route-adapter'
import { makeAddSurveyController, makeLoadSurveysController } from '@/main/factories/controllers/survey'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
