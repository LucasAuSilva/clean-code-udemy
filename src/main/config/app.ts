import express, { Express } from 'express'
import setupApolloServer from './apollo-server'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupSwagger from './swagger'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  await setupApolloServer(app)
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
