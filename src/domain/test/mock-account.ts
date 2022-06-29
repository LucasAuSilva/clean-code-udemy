import { AccountModel } from '@/domain/models/account'
import { AddAccountDto } from '@/domain/usecases/account/add-account'
import { AuthenticationDto } from '@/domain/usecases/account/authentication'

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountDto(), {
  id: 'any_id'
})

export const mockAddAccountDto = (): AddAccountDto => ({
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password'
})

export const mockAuthentication = (): AuthenticationDto => ({
  email: 'any_email@email.com',
  password: 'any_password'
})
