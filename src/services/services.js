export default {
    account: {
        url: 'http://10.33.48.112:8135', // url to fetch, optional. Default value stored in .env ABS_MIDDLE_URL
        apiMethod: "/intgr/account/list", // api method, required
        fetchMethod: "POST", // request method, optional. By default is "POST"
        delay: 7000, // delay before next request, optional. Default value Stored in .env FETCH_DELAY
        timeout: 10000, // request timeout, optional. Default value stored in .env FETCH_TIMEOUT
        data: {} // body of request, optional, no need if "GET" fetchMethod
    },
    cards: {
        apiMethod: "/intgr/bank/cards",
        fetchMethod: "POST",
        delay: 7000,
        data: {}
    },
    credit: {
        apiMethod: "/intgr/credit/list",
        fetchMethod: "POST",
        delay: 7000,
        data: {}
    },
    deposit: {
        apiMethod: "/intgr/deposite/deposit-list",
        fetchMethod: "POST",
        delay: 7000,
        data: {}
    }
};
