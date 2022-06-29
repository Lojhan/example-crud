import DataModel from "models/data.model";
import BaseRepository from "repositories/base.repository";
import BaseService from "./base.service";
import CalculationService from "./calculation.service";
import SendService from "./send.service";

export default class DataService extends BaseService<DataModel> {

    constructor(
        repository: BaseRepository<DataModel>,
        sendService: SendService,
        private readonly calculationService: CalculationService
    ) {
        super(repository, sendService);
    }
    addItem(item: DataModel) {
        item.processed = true;
        const calculatedData = this.calculationService.calculate(item);
        this.sendService.sendData({ calculatedData });
        this.add(item);
        return calculatedData;
    }
}