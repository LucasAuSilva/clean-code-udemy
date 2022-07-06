import { SaveSurveyResultController, SaveSurveyResultControllerDto } from '@/presentation/controllers/survey-result'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { InvalidParamError } from '@/presentation/errors'
import { throwError } from '@/tests/domain/mocks'
import { LoadAnswersBySurveyIdSpy, SaveSurveyResultSpy } from '@/tests/presentation/mocks'
import MockDate from 'mockdate'
import { faker } from '@faker-js/faker'

const mockRequest = (answer: string = null): SaveSurveyResultControllerDto => ({
  surveyId: faker.datatype.uuid(),
  answer,
  accountId: faker.datatype.uuid()
})

type SutTypes = {
  sut: SaveSurveyResultController
  loadAnswersBySurveyIdSpy: LoadAnswersBySurveyIdSpy
  saveSurveyResultSpy: SaveSurveyResultSpy
}

const makeSut = (): SutTypes => {
  const saveSurveyResultSpy = new SaveSurveyResultSpy()
  const loadAnswersBySurveyIdSpy = new LoadAnswersBySurveyIdSpy()
  const sut = new SaveSurveyResultController(loadAnswersBySurveyIdSpy, saveSurveyResultSpy)
  return {
    sut,
    loadAnswersBySurveyIdSpy,
    saveSurveyResultSpy
  }
}

describe('SaveSurveyResult Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call LoadAnswersBySurveyId with correct values', async () => {
    const { sut, loadAnswersBySurveyIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(loadAnswersBySurveyIdSpy.surveyId).toBe(request.surveyId)
  })

  test('Should return 403 if LoadAnswersBySurveyId returns empty array', async () => {
    const { sut, loadAnswersBySurveyIdSpy } = makeSut()
    loadAnswersBySurveyIdSpy.answers = []
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('surveyId')))
  })

  test('Should return 500 if LoadSurveyById throws', async () => {
    const { sut, loadAnswersBySurveyIdSpy } = makeSut()
    jest.spyOn(loadAnswersBySurveyIdSpy, 'loadAnswers').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 403 if an invalid answer is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('answer')))
  })

  test('Should call SaveSurveyResult with correct values', async () => {
    const { sut, saveSurveyResultSpy, loadAnswersBySurveyIdSpy } = makeSut()
    const request = mockRequest(loadAnswersBySurveyIdSpy.answers[0])
    await sut.handle(request)
    expect(saveSurveyResultSpy.saveSurveyResultDto).toEqual({
      ...request,
      date: new Date()
    })
  })

  test('Should return 500 if SaveSurveyResult throws', async () => {
    const { sut, saveSurveyResultSpy, loadAnswersBySurveyIdSpy } = makeSut()
    jest.spyOn(saveSurveyResultSpy, 'save').mockImplementationOnce(throwError)
    const request = mockRequest(loadAnswersBySurveyIdSpy.answers[0])
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut, saveSurveyResultSpy, loadAnswersBySurveyIdSpy } = makeSut()
    const request = mockRequest(loadAnswersBySurveyIdSpy.answers[0])
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(ok(saveSurveyResultSpy.surveyResultModel))
  })
})
