let sum = 0;

console.time('process');
console.time('loop');
for(let i = 0; i <1000000000; i++){
    sum += i;
}
console.timeEnd('loop');

let sum2 = 0;
console.time('loop2');
for(let i = 0; i <10000000; i++){
    sum2 += i;
}
console.timeEnd('loop2');

console.time('Async');
myAsync()
    .then(() => {
        console.time('Async');
    });


console.timeEnd('process');

function myAsync () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('End async');
            resolve()
        })
    })
}