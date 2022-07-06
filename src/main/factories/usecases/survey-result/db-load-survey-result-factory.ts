import { LoadSurveyResult } from '@/domain/usecases/survey-result'
import { DbLoadSurveyResult } from '@/data/usecases/survey-result'
import { SurveyMongoRepository, SurveyResultMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeDbLoadSurveyResult = (): LoadSurveyResult => {
  const surveyResultMongoRepository = new SurveyResultMongoRepository()
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyResult(
    surveyResultMongoRepository,
    surveyMongoRepository
  )
}
