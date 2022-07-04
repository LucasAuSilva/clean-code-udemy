import { SurveyModel } from '@/domain/models/survey'
import { LoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-survey-repository'

export class DbLoadSurveys implements LoadSurveys {
  constructor (
    private readonly loadSurveysRepository: LoadSurveysRepository
  ) {}

  async load (accountId: string): Promise<SurveyModel[]> {
    return this.loadSurveysRepository.loadAll(accountId)
  }
}
