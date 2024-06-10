import { User } from '../models/user-schema.js'

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    createUser(id, name, email, age){
        const user = new User(id, name, email, age)
        this.userRepository.addUser(user)
    }
    deleteUser(userId){
        this.userRepository.removeUser(userId)
    }
    getAllUsers(){
        return this.userRepository.getUsersList()
    }
    getUserById(userId){
        return this.userRepository.findUserById(userId)
    }
    updateUserById(userId, newUser){
        const userExists = this.userRepository.findUserById(userId)

        if(!userExists){
            throw new Error('Usuário não existe ou não foi encontrado')
        }

        userExists.name = newUser.name
        userExists.email = newUser.email
        userExists.age = newUser.age

        console.log(userExists)
        
        this.userRepository.editUserById(userExists)

        return userExists
    }
}

export { UserService }