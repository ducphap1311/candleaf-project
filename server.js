require('dotenv').config()
require('express-async-errors');
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const authRouter = require('./routes/auth')
const connectDB = require('./db/connect')
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')


app.use(cors())
app.get("/", (req, res) => {
    res.send('home')
})

app.use(express.json())
// app.use(cors)
app.use("/api/auth", authRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,() => console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(err)
    }
}

start()
