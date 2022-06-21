import {
  AccountModel,
  LoadAccountByToken,
  AccessDeniedError,
  forbidden
} from './auth-middleware-protocols'
import { AuthMiddleware } from './auth-middleware'

describe('Auth Middleware', () => {
  test('Should return 403 if no x-access-token exists in headers', async () => {
    class LoadAccountByTokenStub implements LoadAccountByToken {
      async load (_accessToken: string): Promise<AccountModel> {
        return {
          id: 'any_id',
          name: 'any_name',
          email: 'any_email@email.com',
          password: 'any_password'
        }
      }
    }
    const loadAccountByTokenStub = new LoadAccountByTokenStub()
    const sut = new AuthMiddleware(loadAccountByTokenStub)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  test('Should call LoadAccountByToken with correct accessToken', async () => {
    class LoadAccountByTokenStub implements LoadAccountByToken {
      async load (_accessToken: string): Promise<AccountModel> {
        return {
          id: 'any_id',
          name: 'any_name',
          email: 'any_email@email.com',
          password: 'any_password'
        }
      }
    }
    const loadAccountByTokenStub = new LoadAccountByTokenStub()
    const sut = new AuthMiddleware(loadAccountByTokenStub)
    const loadSpy = jest.spyOn(loadAccountByTokenStub, 'load')
    await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(loadSpy).toHaveBeenCalledWith('any_token')
  })
})
