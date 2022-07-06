import { adaptResolver } from '@/main/adapter/express'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey'

export default {
  Query: {
    surveys: async (_parent: any, _args: any, context: any) => adaptResolver(makeLoadSurveysController(), _args, context)
  }
}
