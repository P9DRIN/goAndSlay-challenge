class UserRepositoryInterface {
    addUser(user){
        throw new Error("Essa função não existe")
    }
    deleteUser(user){
        throw new Error("Essa função não existe")
    }
    getUserById(user){
        throw new Error("Essa função não existe")
    }
    getUsersList(user){
        throw new Error("Essa função não existe")
    }
    editUserById(user){
        throw new Error("Essa função não existe")
    }
}

class UserRepository extends UserRepositoryInterface{
    constructor(){
        super()
        this.users = []
    }
    addUser(user){
        this.users.push(user)
    }
    removeUser(userId){
        this.users = this.users.filter(user => user.id !== userId)
    }
    getUsersList(){
        return this.users
    }
    findUserById(userId){
        return this.users.filter(user => user.id === userId)
    }
    findUserByEmail(email){
        return this.users.filter(user => user.email === email)
    }
    editUserById(updatedUser){
            
        const index = this.users.findIndex(user => user.id === updatedUser.id)

        if(index === -1){
            throw new Error('O Usuário não existe ou não foi encontrado')
        }
        this.users[index] = updatedUser

    }
}

export { UserRepository, UserRepositoryInterface }