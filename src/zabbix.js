import ZabbixSender from "node-zabbix-sender";
import { config } from 'dotenv';

config();
const { ZABBIX_URL: host } = process.env;

export default (config, errCode) => {
    const { apiMethod, data = {} } = config;
    const Sender = new ZabbixSender({ host });
 
    // Add items to request
    Sender.addItem('poolingServer', 'error code', errCode);
    Sender.addItem('poolingServer', 'apiMethod', `failed on fetching data from ${apiMethod}`);
    Sender.addItem('poolingServer', 'data', data);
    
    // Send the items to zabbix trapper
    Sender.send(function(err, res) {
        if (err) {
            throw err;
        }
    
        console.dir(res);
    });
};