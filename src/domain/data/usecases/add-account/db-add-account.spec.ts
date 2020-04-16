import { DbAddAccount } from './db-add-account'
import { Encrypter } from '../../protocols/encryptor'

interface SutTypes {
  sut: DbAddAccount
  encryptStub: Encrypter
}

const makeStub = (): SutTypes => {
  class EncrypterStub {
    async encrypt (password: string): Promise<string> {
      return await new Promise(resolve => resolve('hashed_password'))
    }
  }
  const encryptStub = new EncrypterStub()
  const sut = new DbAddAccount(encryptStub)
  return {
    sut,
    encryptStub
  }
}

describe('DbAddAccount Usecase', () => {
  test('should call Encrypter with correct password ', async () => {
    const { sut, encryptStub } = makeStub()
    const encryptSpy = jest.spyOn(encryptStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@email.com',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
