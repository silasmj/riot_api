let matchToSaveToDB = "";

fetch(baseURL + "/matches")
    .then(response => response.json())
    .then(result => {
        result.map(createAMatchCard)
    });

const matchCardDiv = document.getElementById("create-match-div");

function createAMatchCard(match) {
    const matchCardDiv = document.createElement("div");

    matchToSaveToDB.appendChild(matchCardDiv);
    createAMatchCard(matchCardDiv, match);
}

function createNewMatch() {
    const startDate = document.getElementById("create-match-startDate").value;
    const role = document.getElementById("create-match-role").value;
    const type = document.getElementById("create-match-type").value;
    const win = document.getElementById("create-match-win").value;

    const newMatch = {
        startDate: startDate,
        role: role,
        type: type,
        win: win
    };

    function createAMatchCard(matchCardDiv, match) {
        matchCardDiv.innerHTML = `
        <h2>${escapeHTML(match.startDate)}</h2>
        <h3>${escapeHTML(match.type)}</h3>
        <h3>${escapeHTML(match.role)}</h3>
        <h3>${escapeHTML(match.win)}</h3>
    `;
    }
}

fetch(baseURL + "/matches", {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newMatch)
})
    .then(response => {
        if (response.status === 200) {
            createNewMatch(newMatch);
        } else {
            console.log("Match not created.", response.status);
        }


});