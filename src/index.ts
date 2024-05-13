import express from 'express'

const app = express()
const port = 3333 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})