import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'
import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { mockSurveyResultModel } from '@/domain/test'

export class SaveSurveyResultRepositorySpy implements SaveSurveyResultRepository {
  saveSurveyResultDto: SaveSurveyResultDto

  async save (data: SaveSurveyResultDto): Promise<void> {
    this.saveSurveyResultDto = data
    return Promise.resolve()
  }
}

export class LoadSurveyResultRepositorySpy implements LoadSurveyResultRepository {
  surveyResultModel = mockSurveyResultModel()
  surveyId: string

  async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
    this.surveyId = surveyId
    return Promise.resolve(this.surveyResultModel)
  }
}
