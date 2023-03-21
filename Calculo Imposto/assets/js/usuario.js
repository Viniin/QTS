export class Usuario {

    // CONSTRUTOR

    constructor(nome, cpf, salario) {

        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
        this.aliquota = this.calculoAliquota();
        this.imposto = this.calculoImposto();

    }

    // CALCULO ALIQUOTA

    calculoAliquota() {

        if (this.salario <= 22847.76) {
    
            return 0;

        } else if (this.salario > 22847.76 && this.salario <= 33919.80) {
    
            return 7.5;

        } else if (this.salario > 33919.80 && this.salario <= 45012.60) {

            return 15;
    
        } else if (this.salario > 45012.61 && this.salario <= 55976.16) {

            return 22.5;

        } else {

            return 27.5
        }
    }

    // CALCULA IMPOSTO

    calculoImposto() {

        if (this.aliquota == 0) {
            
            return 0;

        } else {

            return ((this.salario * this.aliquota) / 100).toFixed(2);

        }
    }
}