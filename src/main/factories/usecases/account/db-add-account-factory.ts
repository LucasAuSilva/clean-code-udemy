import { AddAccount } from '@/domain/usecases/account'
import { DbAddAccount } from '@/data/usecases/account'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(
    new BcryptAdapter(salt),
    accountMongoRepository,
    accountMongoRepository
  )
}
