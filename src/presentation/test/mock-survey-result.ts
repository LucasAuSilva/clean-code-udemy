import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResult, SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'
import { mockSurveyResultModel } from '@/domain/test'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (_data: SaveSurveyResultDto): Promise<SurveyResultModel> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}
