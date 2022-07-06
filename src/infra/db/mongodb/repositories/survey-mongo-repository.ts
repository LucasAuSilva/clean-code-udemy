import { AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository, CheckSurveyByIdRepository } from '@/data/protocols/db/survey'
import { MongoHelper, QueryBuilder } from '../helpers'
import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyDto } from '@/domain/usecases/survey'
import { ObjectId } from 'mongodb'

export class SurveyMongoRepository implements AddSurveyRepository,
  LoadSurveysRepository, LoadSurveyByIdRepository, CheckSurveyByIdRepository {
  async add (data: AddSurveyDto): Promise<void> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(data)
  }

  async loadAll (accountId: string): Promise<SurveyModel[]> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const query = new QueryBuilder()
      .lookup({
        from: 'surveyResults',
        foreignField: 'surveyId',
        localField: '_id',
        as: 'result'
      })
      .project({
        _id: 1,
        question: 1,
        answers: 1,
        date: 1,
        didAnswer: {
          $gte: [{
            $size: {
              $filter: {
                input: '$result',
                as: 'item',
                cond: {
                  $eq: ['$$item.accountId', new ObjectId(accountId)]
                }
              }
            }
          }, 1]
        }
      })
      .build()
    const surveys = await surveyCollection.aggregate(query).toArray()
    return MongoHelper.mapCollection<SurveyModel>(surveys)
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = MongoHelper.getCollection('surveys')
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

  async checkById (id: string): Promise<boolean> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({
      _id: new ObjectId(id)
    }, {
      projection: {
        _id: 1
      }
    })
    return survey != null
  }
}
