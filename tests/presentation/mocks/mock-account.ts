import { AddAccount, AddAccountDto } from '@/domain/usecases/account/add-account'
import { Authentication, AuthenticationDto } from '@/domain/usecases/account/authentication'
import { LoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'
import { AccountModel } from '@/domain/models/account'
import { AuthenticationModel } from '@/domain/models/authentication'
import { mockAccountModel } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

export class AddAccountSpy implements AddAccount {
  isValid = true
  addAccountDto: AddAccountDto

  async add (account: AddAccountDto): Promise<boolean> {
    this.addAccountDto = account
    return this.isValid
  }
}

export class AuthenticationSpy implements Authentication {
  authenticationDto: AuthenticationDto
  authenticationModel = {
    accessToken: faker.datatype.uuid(),
    name: faker.name.findName()
  }

  async auth (authentication: AuthenticationDto): Promise<AuthenticationModel> {
    this.authenticationDto = authentication
    return this.authenticationModel
  }
}

export class LoadAccountByTokenSpy implements LoadAccountByToken {
  accountModel = mockAccountModel()
  accessToken: string
  role: string

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    this.accessToken = accessToken
    this.role = role
    return this.accountModel
  }
}
