import { config } from 'dotenv';

config();
const { FETCH_DELAY } = process.env;

export default (callback, name, config) => {
    const { delay } = config;
    const loop = () => {
        callback(config, name);

        setTimeout(loop, delay || FETCH_DELAY);
    };

    loop();
};