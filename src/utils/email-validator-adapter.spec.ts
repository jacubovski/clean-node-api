import { EmailValidatorAdapter } from './email-validator'

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    const isValid = sut.isValid('invalid_email@mai')
    expect(isValid).toBe(false)
  })
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(sut, 'isValid')
    sut.isValid('valid@email.com')
    expect(isEmailSpy).toHaveBeenCalledWith('valid@email.com')
  })
})
