import userModel from '../models/User.model.js'

export const createUser = async ({email, password})=>{
    if(!email || !password){
        throw new Error("email anf password are required")
    }

    const handlePassword = await userModel.hashPassword(password)

    const user = userModel.create({
        email,
        password: handlePassword
    })

    return user

}

export const getAllUsers = async ({ userId }) =>{
    const users = await userModel.find({
        _id: { $ne: userId }
    })
    return users
}