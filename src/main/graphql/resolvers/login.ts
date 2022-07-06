import { adaptResolver } from '@/main/adapter/express'
import { makeLoginController } from '@/main/factories/controllers/accounts'

export default {
  Query: {
    login: async (_parent: any, args: any) => adaptResolver(makeLoginController(), args)
  }
}
