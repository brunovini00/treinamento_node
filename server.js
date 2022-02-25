const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (request, response) =>{

    return response.send('Hello World')
})

server.post('/users', (request, response) =>{

    const {
        name,
        age,
        phone
    } = request.body

    console.log({
        name,
        age,
        phone
    });

    return response.status(201).json({ success: true})
})

server.put('/users/:id', (request, response) =>{
    const { id } = request.params

    const {
        name,
        age,
        phone
    } = request.body

    console.log({
        name,
        age,
        phone
    });

    return response.status(201).json({ message: `usuário com id ${id} atualizado com sucesso!`})
})

server.put('/users', (request, response) =>{
    // const { id } = request.query

    const {
        name,
        age,
        phone,
        id
    } = request.query

    console.log({
        name,
        age,
        phone,
        id
    });

    return response.status(201).json({ date: {
        name,
        age,
        phone,
        id
    }})
})

server.use((request, response) => {
    response.status(404).send('not found')
})

server.listen(3000, () => {
    console.log('Server is running');
})