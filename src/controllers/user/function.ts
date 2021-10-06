import bcrypt from 'bcrypt'

async function comparePassword (dbPassword: string, userPassword: string){
    return await bcrypt.compare(dbPassword, userPassword)
}

export default comparePassword