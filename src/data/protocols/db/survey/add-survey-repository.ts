import { AddSurveyDto } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add: (surveyData: AddSurveyDto) => Promise<void>
}
