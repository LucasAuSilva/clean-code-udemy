import env from '../../../../config/env'
import { DbLoadAccountByToken } from '../../../../../data/usecases/load-account-by-token/db-load-account-by-token'
import { LoadAccountByToken } from '../../../../../domain/usecases/load-account-by-token'
import { JwtAdapter } from '../../../../../infra/cryptography/jwt-adapter/jwt-adapter'
import { AccountMongoRepository } from '../../../../../infra/db/mongodb/account/account-mongo-repository'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const decrypter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(decrypter, accountMongoRepository)
}
