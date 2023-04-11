import  express from 'express'
import { getLocations } from './database.js'

const app = express()

app.get("/api", async (req, res) => {
  const locations = await getLocations()
  res.json(locations)
})

app.listen(5000, () => {console.log("server started on port 5000")})
