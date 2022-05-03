import UserModel from "../models/user.model";
import BaseModel from "../models/base.model";
import BaseRepository from "../repositories/base.repository";
import EmailService from "./mail.service";
import ViaCepService from "./viacep.service";

export default class BaseService<T extends BaseModel> {
    constructor(
        private readonly repository: BaseRepository<T>,
        private readonly emailService: EmailService,
        private readonly viacepService: ViaCepService
    ) {}

    getAll(): T[] {
        return this.repository.getAll();
    }

    getById(id: string): T {
        return this.repository.getById(id);
    }

    async add(item: any & T): Promise<T> {
        if (UserModel.isUserModel(item)) {
            const locationInfo = (await this.viacepService.getInfo(item)).data;
            item.address = locationInfo;
            this.emailService.sendEmail(item);
        }
        return this.repository.add(item)
    }

    update(id: string, data: T): T {
        return this.repository.update(id, data);
    }

    delete(id: string): void {
        this.repository.delete(id);
    }
}