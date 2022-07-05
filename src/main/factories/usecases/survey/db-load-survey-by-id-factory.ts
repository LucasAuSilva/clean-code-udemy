import { LoadSurveyById } from '@/domain/usecases/survey'
import { DbLoadSurveyById } from '@/data/usecases/survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(
    surveyMongoRepository
  )
}
