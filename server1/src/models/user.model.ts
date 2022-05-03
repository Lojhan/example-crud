import BaseModel from "./base.model"

export default class UserModel extends BaseModel {
    name: string;
    email: string;
    cep: string;
    address: any;

    static isUserModel(value: { [x: string]: any } & BaseModel): boolean {
        return value.name && value.email && value.cep;
    }
}