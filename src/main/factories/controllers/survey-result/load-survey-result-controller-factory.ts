import { Controller } from '@/presentation/protocols'
import { makeDbCheckSurveyById } from '@/main/factories/usecases/survey'
import { makeDbLoadSurveyResult } from '@/main/factories/usecases/survey-result'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { LoadSurveyResultController } from '@/presentation/controllers/survey-result'

export const makeLoadSurveyResultController = (): Controller => {
  const controller = new LoadSurveyResultController(
    makeDbCheckSurveyById(),
    makeDbLoadSurveyResult()
  )
  return makeLogControllerDecorator(controller)
}
