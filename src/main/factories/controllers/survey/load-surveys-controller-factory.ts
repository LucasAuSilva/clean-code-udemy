import { Controller } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/db-load-surveys-factory'

export const makeLoadSurveysController = (): Controller => {
  return makeLogControllerDecorator(
    new LoadSurveysController(makeDbLoadSurveys())
  )
}
