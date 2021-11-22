let summonerSearch = "Doublelift";
let summonerToSaveToDB = "";



fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=RGAPI-032898cb-2fde-47a7-9b1f-141e59314fcb")
    .then(response => response.json())
    .then(result => console.log(result))

function inputFetchSummoner() {
    summonerSearch = document.getElementById("search-for-summoner").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=RGAPI-032898cb-2fde-47a7-9b1f-141e59314fcb")
        .then(response => response.json())
        .then(result => {
            const name = document.getElementById("summoner-fetch-name").innerText = result.name;
            const accountId = document.getElementById("summoner-fetch-accountId").innerText = result.accountId;
            const id =  document.getElementById("summoner-fetch-id").innerText = result.id;
            const profileIcon = document.getElementById("summoner-fetch-profileIconId").innerText = result.profileIconId;
            const puuid = document.getElementById("summoner-fetch-puuid").innerText = result.puuid;
            const revisionDate = document.getElementById("summoner-fetch-revisionDate").innerText = result.revisionDate;
            const summonerLevel = document.getElementById("summoner-fetch-summonerLevel").innerText = result.summonerLevel;

            summonerToSaveToDB = {
                name: name,
                accountId: accountId,
                id: id,
                profileIconId: profileIcon,
                puuid: puuid,
                revisionDate: revisionDate,
                summonerLevel: summonerLevel
            }
        })
}

function saveSummonerToDB(summonerToSaveToDB) {
    console.log(summonerToSaveToDB)
    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(summonerToSaveToDB)
    }).then(response => response.json())
        .then(result =>
            console.log(result))
}




