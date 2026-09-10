class ContaBancaria {
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Novo saldo: R$ ${this.saldo}`);
        
    }
}

let conta = new ContaBancaria("Fabiano")

conta.depositar(100)

console.log(conta.saldo);
