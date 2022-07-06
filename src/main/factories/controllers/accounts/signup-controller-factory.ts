import { Controller } from '@/presentation/protocols'
import { SignUpController } from '@/presentation/controllers/account'
import { makeDbAuthentication, makeDbAddAccount } from '@/main/factories/usecases/account'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  return makeLogControllerDecorator(new SignUpController(
    makeDbAddAccount(),
    makeSignUpValidation(),
    makeDbAuthentication()
  ))
}
