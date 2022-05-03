import BaseModel from "../models/base.model";
import BaseService from "../services/base.service";
import { Request, Response } from "express";

export default class BaseController<T extends BaseModel> {
    constructor(
        private readonly service: BaseService<T>
    ) {}

    getAll(request: Request, response: Response) {
        try {
            return response.status(200).json(this.service.getAll());
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    getById(request: Request, response: Response) {
        try {
            return response.status(200).json(this.service.getById(request.params.id));
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async add(request: Request, response: Response) {
        try {
            const data = await this.service.add(request.body)
            return response.status(200).json(data);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    update(request: Request, response: Response) {
        try {
            return response.status(200).json(this.service.update(request.params.id, request.body));
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    delete(request: Request, response: Response) {
        try {
            this.service.delete(request.params.id);
            return response.status(200).json();
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}