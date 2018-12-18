// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


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

const gitRepos = (type) => {

    // const userName = 'FiveEightEight';
        
    const ID = `?access_token=${readID}`
    // const url = `https://api.github.com/users/:${userName}/repos`;
    //https://api.github.com/users/FiveEightyEight/repos
    const url = `https://api.github.com/${ID}/users/FiveEightyEight/repos`

    

    GETRequest(url, data => {
        console.log(data)
    })
}

gitRepos();