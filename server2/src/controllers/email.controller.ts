import BaseModel from "../models/base.model";
import EmailService from "../services/email.service";
import { Request, Response } from "express";

export default class EmailController {
    constructor(
        private readonly service: EmailService
    ) {}

    sendEmail(request: Request, response: Response) {
        try {
            return response.status(200).json(this.service.sendEmail(request.body));
        } catch (error) {
            return response.status(500).json(error);
        }
    }

}