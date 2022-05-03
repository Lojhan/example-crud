import { AxiosInstance } from "axios";
import BaseModel from "models/base.model";

type model = { [x: string]: any } & BaseModel
 export default class SendService {
    baseUrl: string = 'http://localhost:4000';
    constructor(
        private readonly httpService: AxiosInstance
    ) {}

    sendData(data: { items: model[] }) {
        return this.httpService.post<model[]>(`${this.baseUrl}/folha/add`, data);
    }    
    
 }