const express = require('express')
const User = require('./models/User')

const server = express()

server.use(express.json())

server.get('/users', async (request, response) =>{

    const users = await User.find()
    
    return response.json(users)
})

server.post('/users', async (request, response) =>{

    try {
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

        const user = await User.create({
            name,
            age,
            phone
        })
    
        return response.status(201).json({ user})
    } catch (error){
        return response.status(500).json({
            error: 'Erro ao cadastrar o usuário.'
        })
    }
  
})

server.put('/users/:id', async(request, response) =>{
    const { id } = request.params

    const {
        name,
        age,
        phone
    } = request.body

    // console.log({
    //     name,
    //     age,
    //     phone
    // });

    await User.findByIdAndUpdate (id ,{
        name,
        age,
        phone
    })

    return response.status(201).json({ name})
})

server.delete('/users/:id', async(request, response) =>{
    
    const {id} = request.params

    await User.findByIdAndDelete(id)

    return response.status(201).json({success:true})
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