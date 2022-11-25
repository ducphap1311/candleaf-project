require('dotenv').config()
require('express-async-errors');
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const authRouter = require('./routes/auth')
const connectDB = require('./db/connect')
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')


app.use(cors())
app.get("/", (req, res) => {
    res.send('home')
})

app.use(express.json())
app.use("/api/auth", authRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,() => console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(err)
    }
}

start()
