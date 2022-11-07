import ZabbixSender from "node-zabbix-sender";
import { config } from 'dotenv';

import { getCurrentDateTime } from './utils.js';

config();
const { ZABBIX_URL: host, ZABBIX_ITEMS_HOST: items_host } = process.env;

export default (itemKey, resCode) => {
    const Sender = new ZabbixSender({ host, with_timestamps: true, items_host });
 
    // Add items to request
    Sender.addItem(itemKey, resCode);
    // 0 or 1 and service name
    
    // Send the items to zabbix trapper
    Sender.send(function(err, res) {
        if (err) {
            throw err;
        }

        console.log(`${getCurrentDateTime()}    response from zabbix: `, res);
    });
};