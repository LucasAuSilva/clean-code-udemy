import { AddAccountDto } from '@/domain/usecases/account/add-account'

export interface AddAccountRepository {
  add: (data: AddAccountDto) => Promise<boolean>
}
