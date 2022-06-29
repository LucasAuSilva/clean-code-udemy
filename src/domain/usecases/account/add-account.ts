import { AccountModel } from '@/domain/models/account'

export type AddAccountDto = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (account: AddAccountDto) => Promise<AccountModel>
}
