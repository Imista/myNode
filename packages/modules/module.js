const os = require('os');
const hostname = os.hostname();

const greet = () => {
    return `Hello ${hostname}`;
}

module.exports = {
    greet,
    hostname,
}