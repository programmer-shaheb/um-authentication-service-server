import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function dbConnect() {
  try {
    await mongoose.connect(config.dbUri as string)
    console.log('DB is connected successfully')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('DB connection failed-', error)
  }
}

dbConnect()
