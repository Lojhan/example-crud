import { AxiosInstance } from "axios";
import BaseModel from "models/base.model";

 export default class EmailService {
    baseUrl: string = 'http://localhost:4000';
    constructor(
        private readonly httpService: AxiosInstance
    ) {}

    sendEmail(model: { [x: string]: any } & BaseModel) {
        return this.httpService.post(this.baseUrl, model);
    }    
    
 }