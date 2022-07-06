import { LoadAnswersBySurveyId } from '@/domain/usecases/survey'
import { SaveSurveyResult } from '@/domain/usecases/survey-result'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { InvalidParamError } from '@/presentation/errors'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadAnswersBySurveyId: LoadAnswersBySurveyId,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (request: SaveSurveyResultControllerDto): Promise<HttpResponse> {
    try {
      const { surveyId, accountId, answer } = request
      const answers = await this.loadAnswersBySurveyId.loadAnswers(surveyId)
      if (!answers.length) {
        return forbidden(new InvalidParamError('surveyId'))
      } else if (!answers.includes(answer)) {
        return forbidden(new InvalidParamError('answer'))
      }
      const surveyResult = await this.saveSurveyResult.save({
        surveyId,
        accountId,
        answer,
        date: new Date()
      })
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}

export type SaveSurveyResultControllerDto = {
  surveyId: string
  accountId: string
  answer: string
}
