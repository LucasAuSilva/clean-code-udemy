import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../../../infra/cryptography/brycpt-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'

export const makeDbAddAccount = (): DbAddAccount => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(
    new BcryptAdapter(salt),
    accountMongoRepository,
    accountMongoRepository
  )
}
