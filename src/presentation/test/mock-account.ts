import { AddAccount, AddAccountDto } from '@/domain/usecases/account/add-account'
import { Authentication, AuthenticationDto } from '@/domain/usecases/account/authentication'
import { LoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'
import { AccountModel } from '@/domain/models/account'
import { mockAccountModel } from '@/domain/test'
import { faker } from '@faker-js/faker'

export class AddAccountSpy implements AddAccount {
  accountModel = mockAccountModel()
  addAccountDto: AddAccountDto

  async add (account: AddAccountDto): Promise<AccountModel> {
    this.addAccountDto = account
    return Promise.resolve(this.accountModel)
  }
}

export class AuthenticationSpy implements Authentication {
  authenticationDto: AuthenticationDto
  token = faker.datatype.uuid()

  async auth (authentication: AuthenticationDto): Promise<string> {
    this.authenticationDto = authentication
    return Promise.resolve(this.token)
  }
}

export class LoadAccountByTokenSpy implements LoadAccountByToken {
  accountModel = mockAccountModel()
  accessToken: string
  role: string

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    this.accessToken = accessToken
    this.role = role
    return Promise.resolve(this.accountModel)
  }
}
