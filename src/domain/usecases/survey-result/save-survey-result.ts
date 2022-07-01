import { SurveyResultModel } from '../../models/survey-result'

export type SaveSurveyResultDto = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultDto) => Promise<SurveyResultModel>
}
