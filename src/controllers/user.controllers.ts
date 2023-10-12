import { Request, Response } from 'express'
import { userServices } from '~/services/user.services'
export const userController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body
      const result = await userServices.createUser({ email, password })
      return res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
