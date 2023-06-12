import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorlogger, logger } from './shared/logger'

async function dbConnect() {
  try {
    await mongoose.connect(config.dbUri as string)
    logger.info('DB is connected successfully')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('DB connection failed-', error)
  }
}

dbConnect()
