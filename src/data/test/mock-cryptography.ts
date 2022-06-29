import { Hasher } from '@/data/protocols/cryptography/hasher'
import { HashComparer } from '@/data/protocols/cryptography/hash-comparer'
import { Encrypter } from '@/data/protocols/cryptography/encrypter'
import { Decrypter } from '@/data/protocols/cryptography/decrypter'

export const mockHasher = (): Hasher => {
  class HasherStub implements Hasher {
    async hash (_value: string): Promise<string> {
      return Promise.resolve('hashed_password')
    }
  }
  return new HasherStub()
}

export const mockHashComparer = (): HashComparer => {
  class HashComparerStub implements HashComparer {
    async compare (_value: string, _hash: string): Promise<boolean> {
      return Promise.resolve(true)
    }
  }
  return new HashComparerStub()
}

export const mockEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt (_value: string): Promise<string> {
      return Promise.resolve('any_token')
    }
  }
  return new EncrypterStub()
}

export const mockDecrypter = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    async decrypt (_value: string): Promise<string> {
      return Promise.resolve('any_value')
    }
  }
  return new DecrypterStub()
}
