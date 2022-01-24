import os from 'os';
const hostname = os.hostname();

const greet = () => {
    return `Hello ${hostname}`;
}

export default {
    greet,
    hostname
};