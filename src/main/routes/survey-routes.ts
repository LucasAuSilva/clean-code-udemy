import { Router } from 'express'
import { adminAuth } from '@/main/middlewares/admin-auth'
import { auth } from '@/main/middlewares/auth'
import { adaptRoute } from '@/main/adapter/express/express-route-adapter'
import { makeAddSurveyController, makeLoadSurveysController } from '@/main/factories/controllers/survey'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
