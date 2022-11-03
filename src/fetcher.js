import axios from 'axios';
import { URL } from 'url';
import { config } from 'dotenv';

import sendMessageToZabbix from './zabbix.js';

config();
const { ABS_MIDDLE_URL, FETCH_TIMEOUT } = process.env;

export default (config, name = 'unknown service') => {
    const { fetchMethod, apiMethod, timeout, url = ABS_MIDDLE_URL, data = {} } = config;
    const { href: fullServiceUrl } = new URL(apiMethod, url);
    try {
        console.log(`fetching to service: ${name} with timeout: ${timeout || FETCH_TIMEOUT}`);
        axios({
            method: fetchMethod.toLowerCase(),
            url: fullServiceUrl,
            data,
            timeout: timeout || FETCH_TIMEOUT
        });
    } catch(e) {
        sendMessageToZabbix(config, e.code);
        console.log(`having problem while was fetching service: ${name}`);
        console.log(e);
    }
};