function somme(n:number) : number {
    let res = 0;
    for (let i = 1; n>=i ; i++) {
        res+=i;
    }
    return res;
}
console.log(somme(6));