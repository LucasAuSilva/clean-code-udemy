import { DbSaveSurveyResult } from '@/data/usecases/survey-result'
import { SaveSurveyResult } from '@/domain/usecases/survey-result'
import { SurveyResultMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeDbSaveSurveyResult = (): SaveSurveyResult => {
  const surveyResultMongoRepository = new SurveyResultMongoRepository()
  return new DbSaveSurveyResult(
    surveyResultMongoRepository,
    surveyResultMongoRepository
  )
}
