import { mockAddSurveyDto, throwError } from '@/tests/domain/mocks'
import { AddSurveyRepositorySpy } from '@/tests/data/mocks'
import { DbAddSurvey } from '@/data/usecases/survey'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DbAddSurvey
  addSurveyRepositorySpy: AddSurveyRepositorySpy
}

const makeSut = (): SutTypes => {
  const addSurveyRepositorySpy = new AddSurveyRepositorySpy()
  const sut = new DbAddSurvey(addSurveyRepositorySpy)
  return {
    sut,
    addSurveyRepositorySpy
  }
}

describe('DbAddSurvey Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call AddSurveyRepository with correct values', async () => {
    const { sut, addSurveyRepositorySpy } = makeSut()
    const surveyDto = mockAddSurveyDto()
    await sut.add(surveyDto)
    expect(addSurveyRepositorySpy.addSurveyDto).toEqual(surveyDto)
  })

  test('Should throw if AddSurveyRepository throws', async () => {
    const { sut, addSurveyRepositorySpy } = makeSut()
    jest.spyOn(addSurveyRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddSurveyDto())
    await expect(promise).rejects.toThrow()
  })
})
