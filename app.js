import express from "express"
import mongoose from "mongoose"
import router from "./routes/route.js"
import cors from "cors"

const app = express()
const host = "mongodb+srv://anonymousroot:admin@mongoatlascluster0.dtnaicc.mongodb.net"
const port = 3000
const database = "zettabyte_blog"

mongoose.connect(`${host}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))

app.use(cors())
app.use(express.json())
app.use('/articles', router)

app.get('/', (req, res) => {
    res.send('Welcome to ZettaByte Blog')
})

app.listen(port, () => console.log(`Server running on port: ${port}`))