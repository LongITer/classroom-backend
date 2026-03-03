import express from 'express'

const app = express()
const PORT = 8000

app.use(express.json())

app.use('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})