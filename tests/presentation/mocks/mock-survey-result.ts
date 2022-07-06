import { SaveSurveyResult, SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/tests/domain/mocks'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export class SaveSurveyResultSpy implements SaveSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  saveSurveyResultDto: SaveSurveyResultDto

  async save (data: SaveSurveyResultDto): Promise<SurveyResultModel> {
    this.saveSurveyResultDto = data
    return this.surveyResultModel
  }
}

export class LoadSurveyResultSpy implements LoadSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  surveyId: string
  accountId: string

  async load (surveyId: string, accountId: string): Promise<SurveyResultModel> {
    this.surveyId = surveyId
    this.accountId = accountId
    return this.surveyResultModel
  }
}
