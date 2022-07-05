import {
  HasherSpy,
  AddAccountRepositorySpy,
  LoadAccountByEmailRepositorySpy
} from '@/tests/data/mocks'
import { mockAccountModel, mockAddAccountDto, throwError } from '@/tests/domain/mocks'
import { DbAddAccount } from '@/data/usecases/account'

type SutTypes = {
  sut: DbAddAccount
  hasherSpy: HasherSpy
  addAccountRepositorySpy: AddAccountRepositorySpy
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy()
  loadAccountByEmailRepositorySpy.accountModel = null
  const hasherSpy = new HasherSpy()
  const addAccountRepositorySpy = new AddAccountRepositorySpy()
  const sut = new DbAddAccount(hasherSpy, addAccountRepositorySpy, loadAccountByEmailRepositorySpy)
  return {
    sut,
    hasherSpy,
    addAccountRepositorySpy,
    loadAccountByEmailRepositorySpy
  }
}

describe('DbAddAccount Usecase', () => {
  test('Should call Hasher with correct plaintext', async () => {
    const { sut, hasherSpy } = makeSut()
    const addAccountDto = mockAddAccountDto()
    await sut.add(addAccountDto)
    expect(hasherSpy.plaintext).toBe(addAccountDto.password)
  })

  test('Should throw if Hasher throws', async () => {
    const { sut, hasherSpy } = makeSut()
    jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddAccountDto())
    await expect(promise).rejects.toThrow()
  })

  test('Should call AddAccountRepository with correct values', async () => {
    const { sut, addAccountRepositorySpy, hasherSpy } = makeSut()
    const addAccountDto = mockAddAccountDto()
    await sut.add(addAccountDto)
    expect(addAccountRepositorySpy.addAccountDto).toEqual({
      name: addAccountDto.name,
      email: addAccountDto.email,
      password: hasherSpy.digest
    })
  })

  test('Should throw if AddAccountRepository throws', async () => {
    const { sut, addAccountRepositorySpy } = makeSut()
    jest.spyOn(addAccountRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddAccountDto())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an true on success if LoadAccountByEmailRepository returns null', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddAccountDto())
    expect(isValid).toBeTruthy()
  })

  test('Should return false if LoadAccountByEmailRepository not returns null', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut()
    loadAccountByEmailRepositorySpy.accountModel = mockAccountModel()
    const isValid = await sut.add(mockAddAccountDto())
    expect(isValid).toBeFalsy()
  })

  test('Should call LoadAccountByEmailRepository with correct email', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut()
    const addAccountDto = mockAddAccountDto()
    await sut.add(addAccountDto)
    expect(loadAccountByEmailRepositorySpy.email).toBe(addAccountDto.email)
  })
})
