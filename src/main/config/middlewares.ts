import { Express } from 'express'
import { cors, contentType, bodyParser } from '@/main/middlewares'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
