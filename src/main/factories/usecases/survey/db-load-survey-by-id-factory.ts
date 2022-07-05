import { LoadAnswersBySurveyId } from '@/domain/usecases/survey'
import { DbLoadAnswersBySurveyId } from '@/data/usecases/survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeDbLoadAnswersBySurveyId = (): LoadAnswersBySurveyId => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurveyId(
    surveyMongoRepository
  )
}
