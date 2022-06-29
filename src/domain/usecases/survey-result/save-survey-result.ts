import { SurveyResultModel } from '../../models/survey-result'

export type SaveSurveyResultDto = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultDto) => Promise<SurveyResultModel>
}
