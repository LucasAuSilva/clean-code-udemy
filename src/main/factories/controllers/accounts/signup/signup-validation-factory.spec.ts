import {
  EmailValidation,
  RequiredFieldValidation,
  ValidationComposite,
  CompareFieldsValidations
} from '@/validation/validators'
import { EmailValidator } from '@/validation/protocols/email-validator'
import { Validation } from '@/presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'

jest.mock('@/validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (_email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidations('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
