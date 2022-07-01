import { AddSurveyDto } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add: (data: AddSurveyDto) => Promise<void>
}
