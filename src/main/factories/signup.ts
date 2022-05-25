import { SignUpController } from '../../presentation/controllers/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { LogControllerDecorator } from '../decorators/log'
import { Controller } from '../../presentation/protocols'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const dbAddAccount = new DbAddAccount(new BcryptAdapter(salt), new AccountMongoRepository())
  const signUpController = new SignUpController(
    new EmailValidatorAdapter(),
    dbAddAccount
  )
  return new LogControllerDecorator(signUpController)
}