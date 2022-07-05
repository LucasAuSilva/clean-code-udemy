import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/db-add-survey-factory'
import { makeAddSurveyValidation } from './survey-validation-factory'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(
    makeAddSurveyValidation(),
    makeDbAddSurvey()
  )
  return makeLogControllerDecorator(controller)
}