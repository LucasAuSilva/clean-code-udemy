import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers/account'
import { makeDbAuthentication } from '@/main/factories/usecases/account'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(new LoginController(
    makeDbAuthentication(),
    makeLoginValidation()
  ))
}
