import { adaptResolver } from '@/main/adapter/express'
import { makeLoadSurveyResultController, makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result'

export default {
  Query: {
    surveyResult: async (_parent: any, args: any, context: any) => adaptResolver(makeLoadSurveyResultController(), args, context)
  },
  Mutation: {
    saveSurveyResult: async (_parent: any, args: any, context: any) => adaptResolver(makeSaveSurveyResultController(), args, context)
  }
}
