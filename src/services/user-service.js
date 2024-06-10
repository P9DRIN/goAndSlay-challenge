import { User } from '../models/user-schema.js'

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async createUser(id, name, email, age){

        const emailExists = this.userRepository.findUserByEmail(email)
        if(emailExists.length > 0){
           return { error: 'Já existe este usuário cadastrado.'}
        }
        
        const user = new User(id, name, email, age)
         this.userRepository.addUser(user)
        return { user }
        
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
        const updatedUser = {
            id: userId,
            name: newUser.name,
            email: newUser.email,
            age: newUser.age
        }
        this.userRepository.editUserById(updatedUser)

        return userExists
    }
}

export { UserService }