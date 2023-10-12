import { Application } from "express";
import routes from './user.routes'

export const route=(app: Application)=>{
  app.use('/api/v1',routes)
}
