import BaseModel from "models/base.model";
import CalculatedDataModel from "models/calculatedData.model";
import RabbitMQService from "./rabbitmq.service";

type model = { [x: string]: unknown } & BaseModel
 export default class SendService {
    baseUrl = 'http://localhost:4000';
    rabbitMQService: RabbitMQService;
    constructor() {
        this.rabbitMQService = RabbitMQService.getInstance();
    }

    sendData(data: { calculatedData: CalculatedDataModel }) {
        return this.rabbitMQService.publish('folha', JSON.stringify(data));
    }    
    
 }