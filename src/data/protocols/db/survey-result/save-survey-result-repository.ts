import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultDto) => Promise<SurveyResultModel>
}
