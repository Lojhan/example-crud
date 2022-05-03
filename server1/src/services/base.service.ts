import DataModel from "models/data.model";
import BaseModel from "../models/base.model";
import BaseRepository from "../repositories/base.repository";
import SendService from "./send.service";

export default class BaseService<T extends BaseModel> {
    constructor(
        public readonly repository: BaseRepository<T>,
        public readonly sendService: SendService
    ) {}

    getAll(): T[] {
        const allData = this.repository.getAll();
        return allData;
    }

    add(item: T): T {
        return this.repository.add(item);
    }
}