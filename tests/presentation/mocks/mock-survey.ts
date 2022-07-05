import { AddSurveyDto, AddSurvey } from '@/domain/usecases/survey/add-survey'
import { LoadSurveyById, LoadSurveys, CheckSurveyById } from '@/domain/usecases/survey'
import { SurveyModel } from '@/domain/models/survey'
import { mockSurveyModels, mockSurveyModel } from '@/tests/domain/mocks'

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

export class LoadSurveyByIdSpy implements LoadSurveyById {
  surveyModel = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<SurveyModel> {
    this.id = id
    return this.surveyModel
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
