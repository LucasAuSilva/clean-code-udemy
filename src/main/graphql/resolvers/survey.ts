import { adaptResolver } from '@/main/adapter/express'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey'

export default {
  Query: {
    surveys: async () => adaptResolver(makeLoadSurveysController())
  }
}
