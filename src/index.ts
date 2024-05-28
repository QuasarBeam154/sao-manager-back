import express from 'express'
import characterRoutes from './routes/charRoutes'
import guildRoutes from './routes/guildRoutes'
import friendRoutes from './routes/friendRoutes'
import eventRoutes from './routes/eventRoutes'
import competitionRoutes from './routes/competitionRoutes'
import matchRoutes from './routes/matchRoutes'
import skillRoutes from './routes/skillRoutes'
import placeRoutes from './routes/placeRoutes'
import missionRoutes from './routes/missionRoutes'
import playerRoutes from './routes/playerRoutes'
import rankingRoutes from './routes/rankingRoutes'
import itemRoutes from './routes/itemRoutes'
import shopRoutes from './routes/shopRoutes'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', characterRoutes)
app.use('/api', guildRoutes)
app.use('/api', playerRoutes)
app.use('/api', missionRoutes)
app.use('/api', placeRoutes)
app.use('/api', skillRoutes)
app.use('/api', matchRoutes)
app.use('/api', competitionRoutes)
app.use('/api', eventRoutes)
app.use('/api', friendRoutes)
app.use('/api', itemRoutes)
app.use('/api', shopRoutes)
app.use('/api', rankingRoutes)

app.get('/', (req, res) => {
  res.send('Hello, Sword Art Online!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
