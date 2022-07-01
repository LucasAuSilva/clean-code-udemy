import { DbSaveSurveyResult } from './db-save-survey-result'
import { mockSurveyResultDto, throwError } from '@/domain/test'
import { LoadSurveyResultRepositorySpy, SaveSurveyResultRepositorySpy } from '@/data/test'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DbSaveSurveyResult
  saveSurveyResultRepositorySpy: SaveSurveyResultRepositorySpy
  loadSurveyResultRepositorySpy: LoadSurveyResultRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSurveyResultRepositorySpy = new LoadSurveyResultRepositorySpy()
  const saveSurveyResultRepositorySpy = new SaveSurveyResultRepositorySpy()
  const sut = new DbSaveSurveyResult(saveSurveyResultRepositorySpy, loadSurveyResultRepositorySpy)
  return {
    sut,
    saveSurveyResultRepositorySpy,
    loadSurveyResultRepositorySpy
  }
}

describe('DbSaveSurveyResult Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call SaveSurveyResultRepository with correct values', async () => {
    const { sut, saveSurveyResultRepositorySpy } = makeSut()
    const surveyResultDto = mockSurveyResultDto()
    await sut.save(surveyResultDto)
    expect(saveSurveyResultRepositorySpy.saveSurveyResultDto).toEqual(surveyResultDto)
  })

  test('Should throw if SaveSurveyRepository throws', async () => {
    const { sut, saveSurveyResultRepositorySpy } = makeSut()
    jest.spyOn(saveSurveyResultRepositorySpy, 'save').mockImplementationOnce(throwError)
    const promise = sut.save(mockSurveyResultDto())
    await expect(promise).rejects.toThrow()
  })

  test('Should call LoadSurveyResultRepository with correct surveyId', async () => {
    const { sut, loadSurveyResultRepositorySpy } = makeSut()
    const surveyResultDto = mockSurveyResultDto()
    await sut.save(surveyResultDto)
    expect(loadSurveyResultRepositorySpy.surveyId).toBe(surveyResultDto.surveyId)
  })

  test('Should throw if LoadSurveyRepository throws', async () => {
    const { sut, loadSurveyResultRepositorySpy } = makeSut()
    jest.spyOn(loadSurveyResultRepositorySpy, 'loadBySurveyId').mockImplementationOnce(throwError)
    const promise = sut.save(mockSurveyResultDto())
    await expect(promise).rejects.toThrow()
  })

  test('Should return SurveyResult success', async () => {
    const { sut, loadSurveyResultRepositorySpy } = makeSut()
    const surveyResult = await sut.save(mockSurveyResultDto())
    expect(surveyResult).toEqual(loadSurveyResultRepositorySpy.surveyResultModel)
  })
})
