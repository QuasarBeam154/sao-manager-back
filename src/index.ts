import express from 'express'
import characterRoutes from './routes/charRoutes'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', characterRoutes)

app.get('/', (req, res) => {
  res.send('Hello, Sword Art Online!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
