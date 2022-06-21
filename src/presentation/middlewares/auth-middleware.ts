import {
  HttpRequest,
  HttpResponse,
  Middleware,
  forbidden,
  AccessDeniedError
} from './auth-middleware-protocols'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return Promise.resolve(forbidden(new AccessDeniedError()))
  }
}
