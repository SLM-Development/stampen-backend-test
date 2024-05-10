import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT: string | number = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
