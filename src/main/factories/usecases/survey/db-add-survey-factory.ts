import { AddSurvey } from '@/domain/usecases/survey/add-survey'
import { DbAddSurvey } from '@/data/usecases/survey/db-add-survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/repositories/survey-mongo-repository'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(
    surveyMongoRepository
  )
}
