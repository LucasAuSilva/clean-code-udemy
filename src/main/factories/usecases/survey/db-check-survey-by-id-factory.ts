import { CheckSurveyById } from '@/domain/usecases/survey'
import { DbCheckSurveyById } from '@/data/usecases/survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/repositories/survey-mongo-repository'

export const makeDbCheckSurveyById = (): CheckSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbCheckSurveyById(
    surveyMongoRepository
  )
}
