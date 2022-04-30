import BaseModel from "../models/base.model";
import BaseRepository from "../repositories/base.repository";

export default class BaseService<T extends BaseModel> {
    constructor(
        private readonly repository: BaseRepository<T>
    ) {}

    getAll(): T[] {
        return this.repository.getAll();
    }

    getById(id: string): T {
        return this.repository.getById(id);
    }

    add(item: T): T {
        return this.repository.add(item);
    }

    update(id: string, data: T): T {
        return this.repository.update(id, data);
    }

    delete(id: string): void {
        this.repository.delete(id);
    }
}