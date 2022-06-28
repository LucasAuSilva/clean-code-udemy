import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-survey-repository'
import { LoadSurveyById } from '@/domain/usecases/load-survey-by-id'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyModel } from '@/domain/usecases/add-survey'
import { ObjectId } from 'mongodb'

export class SurveyMongoRepository implements
AddSurveyRepository,
LoadSurveysRepository,
LoadSurveyById {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find().toArray()
    return MongoHelper.mapCollection<SurveyModel>(surveys)
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({
      _id: new ObjectId(id)
    }, {
      projection: {
        _id: 1,
        question: 1,
        answers: 1,
        date: 1
      }
    })
    return survey && MongoHelper.map<SurveyModel>(survey)
  }
}
