import { AddAccountRepository, LoadAccountByEmailRepository } from '../../../../data/protocols'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(account)
    const newAccount = await accountCollection.findOne({
      _id: result.insertedId
    }, {
      projection: {
        _id: 1,
        name: 1,
        email: 1,
        password: 1
      }
    })
    return MongoHelper.map<AccountModel>(newAccount)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    }, {
      projection: {
        _id: 1,
        name: 1,
        email: 1,
        password: 1
      }
    })
    return account && MongoHelper.map<AccountModel>(account)
  }
}
