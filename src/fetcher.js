import axios from 'axios';
import { URL } from 'url';
import { config } from 'dotenv';

import sendMessageToZabbix from './zabbix.js';
import { getCurrentDateTime } from './utils.js';

config();
const { ABS_MIDDLE_URL, FETCH_TIMEOUT } = process.env;

export default async (config, name = 'unknown service') => {
    const { fetchMethod = 'post', apiMethod, timeout, url = ABS_MIDDLE_URL, data = {} } = config;
    const { href: fullServiceUrl } = new URL(apiMethod, url);
    try {
        console.log(`fetching to service: ${name} with timeout = ${timeout || FETCH_TIMEOUT}`);
        await axios({
            method: fetchMethod.toLowerCase(),
            url: fullServiceUrl,
            data,
            timeout: timeout || FETCH_TIMEOUT,
            // headers: { Authorization: `Bearer ${ABS_MIDDLE_TOKEN}` } // uncomment this if you need authorization and fill .env value
        });

        sendMessageToZabbix(name, 0); // send 0 code if everything is okay
    } catch(e) {
        sendMessageToZabbix(name, 1);

        console.log(`${getCurrentDateTime()}    having problem while was fetching service: ${name}`);
        console.log(e);
    }
};