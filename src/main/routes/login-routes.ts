import { Router } from 'express'
import { adaptRoute } from '@/main/adapter/express/express-route-adapter'
import { makeSignUpController } from '@/main/factories/controllers/accounts/signup/signup-controller-factory'
import { makeLoginController } from '@/main/factories/controllers/accounts/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
