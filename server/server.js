import  express from 'express'
import { addLocations, getLocations } from './database.js'

const app = express()
app.use(express.json())

app.get("/getlocations", async (req, res) => {
  const locations = await getLocations()
  res.json(locations)
})

app.post("/addlocation", async (req, res) => {
  const { world, loc, min, max, founder } = req.body
  try{
    await addLocations(world, loc, min, max, founder)
  }catch(error){
    res.send("Bad request")
  }
  res.send("success")
})

app.listen(5000, () => {console.log("server started on port 5000")})
