const needle = require("needle");

function getTotalStars(username) {
    return new Promise(resolve => {
        needle.get(`https://api.github.com/users/${username}/repos?per_page=1000`, (err, response) => {
            if(err) throw err;

            let repos = response.body;
            let totalStars = 0;
            for(let i in repos) {
                totalStars +=  repos[i]["stargazers_count"];
            }

            resolve(totalStars);
        });
    });
}

module.exports = getTotalStars;