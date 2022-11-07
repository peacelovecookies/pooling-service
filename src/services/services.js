export default {
    account: {
        // url: 'http://10.33.48.112:8135', // url to fetch, optional. Default value stored in .env ABS_MIDDLE_URL
        apiMethod: "/intgr/account/list", // api method, required
        // fetchMethod: "POST", // request method, optional. By default is "POST"
        // delay: 7000, // delay before next request, optional. Default value Stored in .env FETCH_DELAY
        timeout: 400, // request timeout, optional. Default value stored in .env FETCH_TIMEOUT
        data: {
            "balAccount": "22616",
            "clientId": "2954763",
            "currentRest": true,
            "kodSost": "2"
        } // body of request, optional, no need if "GET" fetchMethod
    },
    // cards: {
    //     apiMethod: "/intgr/bank/cards",
    //     // delay: 7000,
    //     timeout: 400,
    //     data: {
    //         "clientId": "2954763"
    //     }
    // },
    // credit: {
    //     apiMethod: "/intgr/credit/list",
    //     // delay: 7000,
    //     timeout: 6000,
    //     data: {
    //         "clientId": "3853185"
    //     }
    // },
    // deposit: {
    //     apiMethod: "/intgr/deposite/deposit-list",
    //     // delay: 7000,
    //     timeout: 400,
    //     data: {
    //         "clientId": "2954763",
    //         "status": 1
    //     }
    // }
};
