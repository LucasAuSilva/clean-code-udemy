import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultDto } from '@/domain/usecases/survey-result/save-survey-result'

export const mockSurveyResultDto = (): SaveSurveyResultDto => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): SurveyResultModel => ({
  surveyId: 'any_survey_id',
  question: 'any_question',
  answers: [
    {
      answer: 'any_answer',
      image: 'any_image',
      count: 1,
      percent: 50
    },
    {
      answer: 'other_answer',
      count: 13,
      percent: 30
    }
  ],
  date: new Date()
})
