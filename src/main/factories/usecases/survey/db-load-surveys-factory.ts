import { LoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { DbLoadSurveys } from '@/data/usecases/survey/db-load-surveys'
import { SurveyMongoRepository } from '@/infra/db/mongodb/repositories/survey-mongo-repository'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(
    surveyMongoRepository
  )
}