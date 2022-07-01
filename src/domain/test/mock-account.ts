import { AccountModel } from '@/domain/models/account'
import { AddAccountDto } from '@/domain/usecases/account/add-account'
import { AuthenticationDto } from '@/domain/usecases/account/authentication'
import { faker } from '@faker-js/faker'

export const mockAccountModel = (): AccountModel => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAddAccountDto = (): AddAccountDto => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthentication = (): AuthenticationDto => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
