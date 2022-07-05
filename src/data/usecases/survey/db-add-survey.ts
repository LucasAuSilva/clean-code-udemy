import { AddSurvey, AddSurveyDto } from '@/domain/usecases/survey'
import { AddSurveyRepository } from '@/data/protocols/db/survey'

export class DbAddSurvey implements AddSurvey {
  constructor (
    private readonly addSurveyRepository: AddSurveyRepository
  ) {}

  async add (data: AddSurveyDto): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}
