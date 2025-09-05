const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

const unimarEvents = [
    {
        id: 'CodeXperienceUnimar2026',
        name: 'Code Xperience Unimar 2026',
        date: ['27/04/2026', '28/04/2026', '29/04/2026'],
        link: 'https://forms.gle/gb84eCkaRm5BLmca9'
    },
    {
        id: 'UnimarTechSummit2026',
        name: 'Unimar Tech Summit 2026',
        date: ['15/06/2026'],
        link: 'https://forms.gle/T3PaHT7JixKfzBfV9'
    },
    {
        id: 'Bootcamp2026',
        name: 'Bootcamp Unimar: Jovem Programador 2026',
        date: ['24/08/2026', '25/08/2026', '26/08/2026', '27/08/2026', '28/08/2026', 
            '31/08/2026', '01/09/2026', '02/09/2026', '03/09/2026', '04/09/2026'],
        link: 'https://forms.gle/rfYCpNmdfaaDMBRP6'
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