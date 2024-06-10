import express from 'express'
import {UserRepository} from './repository/user-repository.js'
import { UserService } from './services/user-service.js';
import { v4 as uuid } from 'uuid'
import { z } from 'zod'

const routes = express.Router()

const userRepository = new UserRepository
const userService = new UserService(userRepository)

const userSchema = z.object({
    name: z.string().min(1, { message: "É necessário colocar um nome!" }),
    email: z.string().email({ message: "É necessário colocar um email válido!" }),
    age: z.number().int().positive({ message: "A idade precisa ser um número inteiro e positivo! " }),
});

const handleZodError = (error) => {
    if(error instanceof z.ZodError){
        return error.errors.map(err => err.message)
    }
}

routes.post('/users', (req, res) => {
    const { name } = req.body

    try{
    const id = uuid()
    const parsedAgeToIntData = {
        name: req.body.name,
        email: req.body.email,
        age: parseInt(req.body.age)
}
    const parsedUser = userSchema.parse(parsedAgeToIntData)

    userService.createUser(id, parsedUser.name, parsedUser.email, parsedUser.age)

    res.status(201).json({message: `O usuário ${name} foi criado com sucesso.` })

}catch(error){

    const errorMessage = handleZodError(error)
    res.status(400).json({ message: errorMessage })
}

});
// Listar Usuários
routes.get('/users', (req, res) => {
    const users = userService.getAllUsers()
    res.json(users)
});

// Obter Usuário por ID
routes.get('/users/:id', (req, res) => {
    const user = userService.getUserById(req.params.id)
    if(!user){
        throw new Error(`Usuário não existe ou não pode ser encontrado`)
    }
    res.json(user)
});

// Atualizar Usuário
routes.put('/users/:id', (req, res) => {
    const userId = req.params.id

    try{
    const parsedAgeToIntData = {
            name: req.body.name,
            email: req.body.email,
            age: parseInt(req.body.age)
    }

    console.log(parsedAgeToIntData, 'parsedAgeIntToData')
    const UpdateUserById = userService.updateUserById(userId, parsedAgeToIntData)

    res.status(200).json({ message: `O usuário ${parsedAgeToIntData.name} foi atualizado com sucesso.`, user: UpdateUserById})

    }catch(error){
        const errorMessage = handleZodError(error)
        res.status(400).json({ message: errorMessage })
    }
});

// Deletar Usuário
routes.delete('/users/:id', (req, res) => {
   userService.deleteUser(req.params.id)

   res.status(200).json({ message: `Usuário deletado com sucesso`})

});


export default routes