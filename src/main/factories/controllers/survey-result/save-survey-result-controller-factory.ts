import { Controller } from '@/presentation/protocols'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result/save-survey-result-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result/db-save-survey-result-factory'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/db-load-survey-by-id-factory'

export const makeSaveSurveyResultController = (): Controller => {
  const controller = new SaveSurveyResultController(
    makeDbLoadSurveyById(),
    makeDbSaveSurveyResult()
  )
  return makeLogControllerDecorator(controller)
}
