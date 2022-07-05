import { Controller } from '@/presentation/protocols'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result'
import { makeDbLoadAnswersBySurveyId } from '@/main/factories/usecases/survey'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'

export const makeSaveSurveyResultController = (): Controller => {
  const controller = new SaveSurveyResultController(
    makeDbLoadAnswersBySurveyId(),
    makeDbSaveSurveyResult()
  )
  return makeLogControllerDecorator(controller)
}
