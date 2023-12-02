import express from 'express'

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.static('src'))

app.listen(3000, () => {
    console.log('Live on: http://localhost:3000')
})