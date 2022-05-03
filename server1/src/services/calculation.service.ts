import CalculatedDataModel from "models/calculatedData.model";
import DataModel from "models/data.model";

export default class CalculationService {

    calculate(data: DataModel[]): CalculatedDataModel[] {
        return data.map(item => {
            const newItem = { ...item } as CalculatedDataModel;
            newItem.brute = this.calculateBruteIncome(item.hours, item.value);
            newItem.irrf = this.calculateIrr(newItem.brute);
            newItem.inss = this.calculateInss(newItem.brute);
            newItem.fgts = this.calculateFgts(newItem.brute);
            newItem.liquid = this.calculateFinalIncome(newItem.brute, newItem.irrf, newItem.inss);
            newItem.processed = true;
            return newItem;
        })
    }

    // número de horas trabalhadas * valor da hora
    private calculateBruteIncome(hours: number, value: number) {
        return hours * value;
    }

    // fgts 
    private calculateFgts(bruteIncome: number) {
        return bruteIncome * 0.08;
    }

    
    // Tabela para o cálculo do INSS

    // Salário Bruto	Desconto
    // Até R$ 1.693,72	8%
    // De R$ 1.693,73 até R$ 2.822,90	9%
    // De R$ 2.822,91 até R$ 5.645,80	11%
    // Acima de R$ 5.645,81	R$ 621,03 (fixo)
    private calculateInss(bruteIncome: number) {
        if (bruteIncome <= 1693.72) {
            return bruteIncome * 0.08;
        } else if (bruteIncome <= 2822.90) {
            return bruteIncome * 0.09;
        } else if (bruteIncome <= 5646.80) {
            return bruteIncome * 0.11;
        } else {
            return 621.03;
        }
    }

    // Tabela para o cálculo do Imposto de Renda

    // Salário Bruto	Alíquota	Parcela a deduzir
    // Até R$ 1.903,98	0,0%	
    // De R$ 1.903,99 até R$ 2.826,65	7,5%	R$ 142,80
    // De R$ 2.826,66 até R$ 3.751,05	15,0%	R$ 354,80
    // De R$ 3.751,06 até R$ 4.664,68	22,5%	R$ 636,13
    // Acima de R$ 4.664,68	27,5%	R$ 869,36
    private calculateIrr(bruteIncome: number) {
        if (bruteIncome <= 1903.98) {
            return 0;
        } else if (bruteIncome <= 2826.65) {
            return bruteIncome * 0.075;
        } else if (bruteIncome <= 3751.05) {
            return bruteIncome * 0.15;
        } else if (bruteIncome <= 4664.68) {
            return bruteIncome * 0.225;
        } else {
            return bruteIncome * 0.275;
        }
    }

    // Para calcular o salário líquido: Salário bruto – IR – INSS
    private calculateFinalIncome(bruteIncome: number, irr: number, inss: number) {
        return bruteIncome - irr - inss;
    }


}