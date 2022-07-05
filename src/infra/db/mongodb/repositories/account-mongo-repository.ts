import {
  AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository,
  LoadAccountByTokenRepository, CheckAccountByEmailRepository
} from '@/data/protocols/db/account'
import { AccountModel } from '@/domain/models/account'
import { AddAccountDto } from '@/domain/usecases/account'
import { MongoHelper } from '../helpers/mongo-helper'
import { ObjectId } from 'mongodb'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository,
UpdateAccessTokenRepository, LoadAccountByTokenRepository, CheckAccountByEmailRepository {
  async add (data: AddAccountDto): Promise<boolean> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    return await accountCollection.findOne({
      _id: result.insertedId
    }, {
      projection: {
        _id: 1,
        name: 1,
        email: 1
      }
    }) != null
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

  async checkByEmail (email: string): Promise<boolean> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    }, {
      projection: {
        _id: 1
      }
    })
    return account != null
  }

  async loadByToken (accessToken: string, role?: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    }, {
      projection: {
        _id: 1,
        name: 1,
        email: 1
      }
    })
    return account && MongoHelper.map<AccountModel>(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        accessToken: token
      }
    })
  }
}
