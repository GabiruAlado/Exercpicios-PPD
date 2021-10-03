function adicionar(a:number, b:number):number{
    return a+b;
}
console.log(adicionar(3,4));

let adicionar1 = function (a:number, b:number):number{
    return a+b;
}

console.log(adicionar1(5,4));

//Arrow funcion
let adicionar2 = (a:number, b:number):number => {
    return a+b;
}

let adicionar3 = (a:number, b:number):number => (a+b)