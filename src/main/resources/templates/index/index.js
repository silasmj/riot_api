let summonerSearch = "Doublelift";
fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=RGAPI-b164213e-5117-4005-bd4c-45133c4dadc6")
    .then(response => response.json())
    .then(result => console.log(result))

function inputFetchSummoner() {
    summonerSearch = document.getElementById("search-for-summoner").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?api_key=RGAPI-b164213e-5117-4005-bd4c-45133c4dadc6")
        .then(response => response.json())
        .then(result => console.log(result))
}