import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badRequest
} from './add-survey-controller-protocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const validate = this.validation.validate(httpRequest.body)
    if (validate) {
      return badRequest(validate)
    }
    return Promise.resolve(null)
  }
}
