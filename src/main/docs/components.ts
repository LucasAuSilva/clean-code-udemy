import {
  badRequest,
  unauthorized,
  notFound,
  forbidden,
  serverError
} from './components/'
import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  notFound,
  forbidden,
  serverError
}
