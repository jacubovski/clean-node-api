import * as bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encryptor'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hasehd = await bcrypt.hash(value, this.salt)
    return hasehd
  }
}
