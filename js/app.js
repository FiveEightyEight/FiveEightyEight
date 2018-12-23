// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// ----------------- Modules & Globals ----------------->> >
// const http = require('https');


// ----------------- Helper Functions ----------------->> >
const GETRequest = (url, cb) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', response => {
        const data = JSON.parse(response.currentTarget.response);

        cb(data);
    });
    request.send();
};



// ----------------- Events ----------------->> >

// http.get('https://github.com/FiveEightyEight', (res) => {
//     console.log(res);
// })

const FiveEightyEight = () => {
    GETRequest('https://github.com/FiveEightyEight', data => {
        console.log(data);
        });
};

// ----------------- State ----------------->> >

let state = {

    nav: [],

    sideBar : [],

    main: [], 

};


// ----------------- Render ----------------->> >

const render = (state) => {

};

// ----------------- Load Save ----------------->> >

render(state);

FiveEightyEight();