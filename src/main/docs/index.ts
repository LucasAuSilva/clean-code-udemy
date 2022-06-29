import { loginPath } from './paths/login-path'
import { accountSchema } from './schemas/account-schema'
import { loginParamSchema } from './schemas/login-param-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Code Udemy',
    description: 'Project develop in Node.JS for explain advanced concepts in programming like TDD, Clean Architecture, Design Patterns and SOLID',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Account'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamSchema
  }
}
