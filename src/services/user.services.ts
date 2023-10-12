import db from '../models/connect'

export const userServices = {
  createUser: async ({ email, password }: { email: string; password: string }) => {
    await db.query('INSERT INTO users(email,password) values($1,$2)', [email, password])
    return {
      message: 'create user successfully'
    }
  }
}
