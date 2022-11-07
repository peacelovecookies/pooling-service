import servicesList from './src/services/services.js';
import loop from './src/looper.js';
import fetcher from './src/fetcher.js';

const services = Object.entries(servicesList);
for (const [serviceName, config] of services) {
    loop(fetcher, serviceName, config);
}
