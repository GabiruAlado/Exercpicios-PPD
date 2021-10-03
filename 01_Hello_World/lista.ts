let A = [0,2,3];
console.log(A[0]);

//tipado
let B:number[] = [2, 3, 4];
console.log(B);

//iteração
for(let i=0; i<B.length; i++){
    console.log(B[i]);
}

//for...in
for(let i in B){
    console.log(i)
}

//for... of - para quando precisa somente dos valores da lista
for(let e of B){
    console.log(e);
}
