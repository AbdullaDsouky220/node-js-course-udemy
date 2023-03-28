import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: 'config.env' })
const app = express()


//routes
app.get('/', (req, res) => {
    res.send('this is the response')

})

//
const PORT = process.env.PORT
app.listen(PORT || 5000, () => {
    console.log('the app is running successfully on port ', PORT)
})