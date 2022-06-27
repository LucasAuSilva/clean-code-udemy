import { InvalidParamError } from '@/presentation/errors'
import { CompareFieldsValidations } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidations => {
  return new CompareFieldsValidations('field', 'fieldToBeCompare')
}

describe('CompareFields Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToBeCompare: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToBeCompare'))
  })

  test('Should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToBeCompare: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
