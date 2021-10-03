function criar_conta(nome_titular:any, saldo_inicial:number):any{
    return{
        "nome_titular": nome_titular,
        "saldo": saldo_inicial,
    }
}

function depositar(conta:any, valor:number):void {
    conta.saldo += valor;
}

function sacar(conta:any, valor:number):boolean {
    if (valor > conta.saldo) {
        console.log("Saldo insuficiente. operação não realizada");
        return false;
    }
    else {
        conta.saldo -= valor;
        return true;
    }
}

let transferir = function (conta_1:any, conta_2:any, valor:number):boolean {
    if (conta_1.saldo >= valor) {
        conta_1.saldo -= valor;
        conta_2.saldo += valor;
        console.log(conta_1.nome_titular, "tranferiu", valor, "para", conta_2.nome_titular,".");
        return true;
    }
    else {
        console.log("Saldo insuficiente. Transferência não executada.");
        return false;
    }
}

let minha_conta = criar_conta("Jaime", 0);

depositar(minha_conta, 100);
console.log(minha_conta.saldo);

sacar(minha_conta, 60);
console.log(minha_conta.saldo);

sacar(minha_conta, 60);
console.log(minha_conta.saldo);

let outra_conta = criar_conta("Ana", 12);

transferir(minha_conta, outra_conta, 20);
console.log(minha_conta.saldo);
console.log(outra_conta.saldo);