import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

// cross origin resources sharing
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

export default app
