const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("A GET request!")
    console.log(req.headers)
    res.json({Hello:'asdfaddf'})
})
app.listen(process.env.PORT || 3000)
