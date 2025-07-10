// for(let i = 23; i <= 48; i++) {
//     if(i % 2 !== 0)
//     console.log(i);
// }
// console.log()

// a=10
// while(a < 20){
//     console.log(a);
//     a++;
// }
// console.log()
// b=10
// do {
//     console.log(b);
//     b++;
// }
// while(b < 20)

let num = 56789;
let rev = 0;
while(num > 0) {
    let d  = num % 10;
    rev = rev * 10 + d;
    num = parseInt(num / 10);
}

console.log(rev);
