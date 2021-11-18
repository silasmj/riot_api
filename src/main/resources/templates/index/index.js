let summonerSearch = "Doublelift";
let summonerToSaveToDB = "";



fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=")
    .then(response => response.json())
    .then(result => console.log(result))

function inputFetchSummoner() {
    summonerSearch = document.getElementById("search-for-summoner").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=")
        .then(response => response.json())
        .then(result => {
            document.getElementById("summoner-fetch-name").innerText = result.name;
            document.getElementById("summoner-fetch-accountId").innerText = result.accountId;
            document.getElementById("summoner-fetch-id").innerText = result.id;
            document.getElementById("summoner-fetch-profileIconId").innerText = result.profileIconId;
            document.getElementById("summoner-fetch-puuid").innerText = result.puuid;
            document.getElementById("summoner-fetch-revisionDate").innerText = result.revisionDate;
            document.getElementById("summoner-fetch-summonerLevel").innerText = result.summonerLevel;

            summonerToSaveToDB = {
                name: result.name,
                accountId: result.accountId,
                id: result.id,
                profileIconId: result.profileIconId,
                puuid: result.puuid,
                revisionDate: result.revisionDate,
                summonerLevel: result.summonerLevel
            }
        })
}

function saveSummonerToDB(summonerToSaveToDB) {
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(summonerToSaveToDB)
    }).then(response => response.json())
        .then(result =>
            console.log(result))
}

