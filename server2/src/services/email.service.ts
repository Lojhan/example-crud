import BaseModel from "../models/base.model";

export default class EmailService {
    
    sendEmail(model: { [x: string]: any } & BaseModel) {
        console.log(model)
        console.log(`Sending email to ${model.email}`);
    }
}