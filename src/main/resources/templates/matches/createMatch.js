const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
let queryId = URLParams.get("generatedId");


function createMatch() {

    const startDate = document.getElementById("create-match-startDate").value;
    const role = document.getElementById("create-match-role").value;
    const type = document.getElementById("create-match-type").value;
    const win = document.getElementById("create-match-win").value;
    const champion = document.getElementById("create-match-champion").value
};

    const newMatch = {
        startDate: startDate,
        role: role,
        type: type,
        win: win,
        champion: champion,
        generatedId: queryId
    };

    fetch(baseURL + "/matches", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newMatch)
    })
        .then(response => {
            if (response.status === 200) {
                console.log(response)
                /*createMatch(newMatch);*/
            } else {
                console.log("Match not created.", response.status);
            }
        });