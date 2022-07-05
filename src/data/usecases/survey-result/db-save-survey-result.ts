import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResult, SaveSurveyResultDto } from '@/domain/usecases/survey-result'
import { LoadSurveyResultRepository, SaveSurveyResultRepository } from '@/data/protocols/db/survey-result'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResultRepository: SaveSurveyResultRepository,
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository
  ) {}

  async save (data: SaveSurveyResultDto): Promise<SurveyResultModel> {
    await this.saveSurveyResultRepository.save(data)
    return this.loadSurveyResultRepository.loadBySurveyId(data.surveyId, data.accountId)
  }
}
