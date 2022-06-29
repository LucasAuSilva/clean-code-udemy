import {
  Controller,
  forbidden,
  HttpRequest,
  HttpResponse,
  InvalidParamError,
  LoadSurveyById
} from './save-survey-result-protocols'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return survey ? null : forbidden(new InvalidParamError('surveyId'))
  }
}
