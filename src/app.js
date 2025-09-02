const express = require('express')
const app = express()

const port = 3001

// Run
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})