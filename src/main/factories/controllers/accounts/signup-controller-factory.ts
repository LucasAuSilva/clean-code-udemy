import { Controller } from '@/presentation/protocols'
import { SignUpController } from '@/presentation/controllers/account/signup-controller'
import { makeDbAuthentication } from '@/main/factories/usecases/account/db-authentication-factory'
import { makeDbAddAccount } from '@/main/factories/usecases/account/db-add-account-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  return makeLogControllerDecorator(new SignUpController(
    makeDbAddAccount(),
    makeSignUpValidation(),
    makeDbAuthentication()
  ))
}