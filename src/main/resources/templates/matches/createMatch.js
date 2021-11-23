let matchToSaveToDB = "";

const matchFormParentDiv = document.getElementById("create-match-form");
const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const puuid = URLParams.get("puuid");

fetch(baseURL + "/matches/" + puuid)
    .then(response => response.json())
    .then(result => {
        result.map(createAMatchCard)
    });

function showMatchForm() {
    matchFormParentDiv.innerHTML = createMatchForm;
}

const createMatchForm = `<div>
    <label>Start Date</label>
    <input id="create-match-startDate" placeholder="start date">
    <label>Role</label>
    <input id="create-match-role" placeholder="role">    
    <label>Type</label>
    <input id="create-match-type" placeholder="type">    
    <label>Win</label>
    <input id="create-match-win" placeholder="win">
    <label>Champion</label>
    <input id="create-match-champion" placeholder="champion">
    <label>Summoner</label>
    <input id="create-match-summoner" placeholder="summoner">
    <button onclick="createMatch()">Create A New Match</button>
</div>`;


function createAMatchCard(match) {
    const matchCardDiv = document.createElement("div");

    matchToSaveToDB.appendChild(matchCardDiv);
    createAMatchCard(matchCardDiv, match);
}

function createMatch() {
    const matchToCreate = {
        startDate: document.getElementById("create-match-startDate").value,
        role: document.getElementById("create-match-role").value,
        type: document.getElementById("create-match-type").value,
        win: document.getElementById("create-match-win").value,
        champion: document.getElementById("create-match-champion").value,
        summoner: puuid
    };

    const newMatch = {
        startDate: startDate,
        role: role,
        type: type,
        win: win,
        champion: champion,
        summoner: summoner
    };

    fetch(baseURL + "/matches", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(matchToCreate)
    })
        .then(response => {
            if (response.status === 200) {
                createMatch(newMatch);
            } else {
                console.log("Match not created.", response.status);
            }
        });
}