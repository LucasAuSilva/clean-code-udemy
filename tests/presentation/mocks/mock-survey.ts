import { AddSurveyDto, AddSurvey } from '@/domain/usecases/survey/add-survey'
import { LoadSurveys, CheckSurveyById, LoadAnswersBySurveyId } from '@/domain/usecases/survey'
import { SurveyModel } from '@/domain/models/survey'
import { mockSurveyModels } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

export class AddSurveySpy implements AddSurvey {
  addSurveyDto: AddSurveyDto

  async add (data: AddSurveyDto): Promise<void> {
    this.addSurveyDto = data
  }
}

export class LoadSurveysSpy implements LoadSurveys {
  surveyModels = mockSurveyModels()
  accountId: string

  async load (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return this.surveyModels
  }
}

export class LoadAnswersBySurveyIdSpy implements LoadAnswersBySurveyId {
  answers = faker.random.words().split(' ')
  surveyId: string

  async loadAnswers (surveyId: string): Promise<string[]> {
    this.surveyId = surveyId
    return this.answers
  }
}

export class CheckSurveyByIdSpy implements CheckSurveyById {
  result = true
  id: string

  async checkById (id: string): Promise<boolean> {
    this.id = id
    return this.result
  }
}
