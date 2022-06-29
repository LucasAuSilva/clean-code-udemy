import { SurveyModel } from '@/domain/models/survey'

export type AddSurveyDto = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyDto) => Promise<void>
}
