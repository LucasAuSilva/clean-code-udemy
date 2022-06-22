import { Router } from 'express'
import { adaptRoute } from '../adapter/express/express-route-adapter'
import { makeSignUpController } from '../factories/controllers/accounts/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/accounts/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
