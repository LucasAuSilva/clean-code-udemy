import { AddAccount, AddAccountDto } from '@/domain/usecases/account/add-account'
import { Hasher } from '@/data/protocols/cryptography/hasher'
import { AddAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols/db/account'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) {}

  async add (accountData: AddAccountDto): Promise<boolean> {
    const isUsed = await this.checkAccountByEmailRepository.checkByEmail(accountData.email)
    if (!isUsed) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      return this.addAccountRepository.add({ ...accountData, password: hashedPassword })
    }
    return false
  }
}
