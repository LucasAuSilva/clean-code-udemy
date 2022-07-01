import { SaveSurveyResult, SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export class SaveSurveyResultSpy implements SaveSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  saveSurveyResultDto: SaveSurveyResultDto

  async save (data: SaveSurveyResultDto): Promise<SurveyResultModel> {
    this.saveSurveyResultDto = data
    return Promise.resolve(this.surveyResultModel)
  }
}

export class LoadSurveyResultSpy implements LoadSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  surveyId: string

  async load (surveyId: string): Promise<SurveyResultModel> {
    this.surveyId = surveyId
    return Promise.resolve(this.surveyResultModel)
  }
}
