import { SurveyModel } from '@/data/usecases/survey/load-surveys/db-load-surveys-protocols'

export interface LoadSurveysRepository {
  loadAll: (accountId: string) => Promise<SurveyModel[]>
}
