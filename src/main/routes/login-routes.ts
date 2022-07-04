import { Router } from 'express'
import { adaptRoute } from '@/main/adapter/express/express-route-adapter'
import { makeSignUpController, makeLoginController } from '@/main/factories/controllers/accounts'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
