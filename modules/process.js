process.on('beforeExit',() => {
    console.log('Process will end');
})

process.on('exit',() => {
    console.log('Process ended');
})

process.on('uncaughtException', () => {
    console.error('well, we lost caught a error');
})
