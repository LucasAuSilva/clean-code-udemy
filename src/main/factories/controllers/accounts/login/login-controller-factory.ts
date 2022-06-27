import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers/account/login/login-controller'
import { makeDbAuthentication } from '@/main/factories/usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(new LoginController(
    makeDbAuthentication(),
    makeLoginValidation()
  ))
}
