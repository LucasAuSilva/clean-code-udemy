import { LoginController } from '../../../../../presentation/controllers/account/login/login-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(new LoginController(
    makeDbAuthentication(),
    makeLoginValidation()
  ))
}
