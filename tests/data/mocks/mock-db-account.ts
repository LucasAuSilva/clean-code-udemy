import { AccountModel } from '@/domain/models/account'
import { AddAccountDto } from '@/domain/usecases/account/add-account'
import {
  AddAccountRepository, LoadAccountByEmailRepository, LoadAccountByTokenRepository,
  UpdateAccessTokenRepository, CheckAccountByEmailRepository
} from '@/data/protocols/db/account'
import { mockAccountModel } from '@/tests/domain/mocks'

export class AddAccountRepositorySpy implements AddAccountRepository {
  isValid = true
  addAccountDto: AddAccountDto

  async add (data: AddAccountDto): Promise<boolean> {
    this.addAccountDto = data
    return this.isValid
  }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  accountModel = mockAccountModel()
  email: string

  async loadByEmail (email: string): Promise<AccountModel> {
    this.email = email
    return Promise.resolve(this.accountModel)
  }
}

export class CheckAccountByEmailRepositorySpy implements CheckAccountByEmailRepository {
  result = false
  email: string

  async checkByEmail (email: string): Promise<boolean> {
    this.email = email
    return this.result
  }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
  accountModel = mockAccountModel()
  token: string
  role: string

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    this.token = token
    this.role = role
    return Promise.resolve(this.accountModel)
  }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
  id: string
  token: string

  async updateAccessToken (id: string, token: string): Promise<void> {
    this.token = token
    this.id = id
    return Promise.resolve()
  }
}
