import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey'
import { LoadAnswersBySurveyId } from '@/domain/usecases/survey'

export class DbLoadAnswersBySurveyId implements LoadAnswersBySurveyId {
  constructor (
    private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository
  ) {}

  async loadAnswers (surveyId: string): Promise<string[]> {
    const survey = await this.loadSurveyByIdRepository.loadById(surveyId)
    return survey?.answers.map(a => a.answer) || []
  }
}
