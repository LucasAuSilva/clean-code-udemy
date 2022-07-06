import { adaptResolver } from '@/main/adapter/express'
import { makeLoginController, makeSignUpController } from '@/main/factories/controllers/accounts'

export default {
  Query: {
    login: async (_parent: any, args: any) => adaptResolver(makeLoginController(), args)
  },
  Mutation: {
    signUp: async (_parent: any, args: any) => adaptResolver(makeSignUpController(), args)
  }
}
