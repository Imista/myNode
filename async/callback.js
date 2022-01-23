function myAsync(callback) {
    setTimeout(() => {
        console.log('I am async');
        callback();
    }, 1000);
}

console.log('Start process');
myAsync(() => console.log('End process'));