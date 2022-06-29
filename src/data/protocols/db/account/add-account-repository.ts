import { AccountModel } from '@/domain/models/account'
import { AddAccountDto } from '@/domain/usecases/account/add-account'

export interface AddAccountRepository {
  add: (account: AddAccountDto) => Promise<AccountModel>
}
