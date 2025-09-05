const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

const unimarEvents = [
    {
        id: 'CodeXperienceUnimar2017',
        name: 'Code Xperience Unimar',
        data: ['24/04/2017', '25/04/2017', '26/04/2017'],
        link: 'https://www.google.com'
    },
    {
        id: 'UnimarTechSummit2025',
        name: 'Unimar Tech Summit',
        data: ['15/04/2025'],
        link: 'https://www.cursoemvideo.com'
    },
    {
        id: 'Bootcamp2025',
        name: 'Bootcamp Unimar: Jovem Programador',
        data: ['25/08/2025'],
        link: 'https://unimar.br'
    }
]
// Eventos
let CodeXperienceUnimar;

// Rotas

for (let i = 0; i <= 2; i++)
    if (unimarEvents[i].name == 'Code Xperience Unimar') CodeXperienceUnimar = unimarEvents[i]


app.get('/unimarEvents', (req, res) => res.json(unimarEvents))
app.get('/unimarEvents/CodeXperienceUnimar', (req, res) => res.json(CodeXperienceUnimar))

// Run
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})