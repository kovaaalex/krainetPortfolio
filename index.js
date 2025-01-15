function nthFibo(n) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    let first = 0, second = 1, next;
    for(let i = 3; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}
console.log(nthFibo(4))