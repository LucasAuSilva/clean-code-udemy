import { LoadSurveys } from '@/domain/usecases/survey'
import { DbLoadSurveys } from '@/data/usecases/survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(
    surveyMongoRepository
  )
}
