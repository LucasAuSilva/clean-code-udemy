import { LoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'
import { DbLoadAccountByToken } from '@/data/usecases/account/db-load-account-by-token'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/repositories/account-mongo-repository'
import env from '@/main/config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const decrypter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(decrypter, accountMongoRepository)
}
