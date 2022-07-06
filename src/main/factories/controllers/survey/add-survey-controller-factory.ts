import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeAddSurveyValidation } from './survey-validation-factory'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(
    makeAddSurveyValidation(),
    makeDbAddSurvey()
  )
  return makeLogControllerDecorator(controller)
}
