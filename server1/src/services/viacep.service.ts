"viacep.com.br/ws/01001000/json/"

import { AxiosInstance } from "axios";
import BaseModel from "models/base.model";

 export default class ViaCepService {
    constructor(
        private readonly httpService: AxiosInstance
    ) {}

    getInfo(model: { [x: string]: any } & BaseModel) {
        const url = this.getUrl(model.cep);
        return this.httpService.get(url);
    }  
    
    getUrl(cep: string) {
        return `https://viacep.com.br/ws/${cep}/json/`
    }
    
 }