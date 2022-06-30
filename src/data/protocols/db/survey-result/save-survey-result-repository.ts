import { SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultDto) => Promise<void>
}
