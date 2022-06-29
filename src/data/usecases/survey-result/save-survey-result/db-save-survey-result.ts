import {
  SaveSurveyResult,
  SaveSurveyResultDto,
  SurveyResultModel,
  SaveSurveyResultRepository
} from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResultRepository: SaveSurveyResultRepository
  ) {}

  async save (data: SaveSurveyResultDto): Promise<SurveyResultModel> {
    return this.saveSurveyResultRepository.save(data)
  }
}
