function myAsync(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000)
}

myAsync((err, data) => {
    if(err){
        // return false;
        throw err;
    }

    console.log('Without error:', data);
})