import { LoadAccountByToken } from '@/domain/usecases/account'
import { DbLoadAccountByToken } from '@/data/usecases/account'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/repositories'
import env from '@/main/config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const decrypter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(decrypter, accountMongoRepository)
}
