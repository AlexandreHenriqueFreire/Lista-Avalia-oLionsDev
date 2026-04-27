let x = [1, 2, 3, 4, 5, 6]
let impar = 0
for (let i = 0; i < x.length; i++) {
    if(x[i] % 2 !== 0){
        impar++
    }
}
console.log(impar)