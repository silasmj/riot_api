let summonerSearch = "Doublelift";
fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?bbbb")
    .then(response => response.json())
    .then(result => console.log(result))

function inputFetchSummoner() {
    summonerSearch = document.getElementById("search-for-summoner").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerSearch + "?bbbb")
        .then(response => response.json())
        .then(result => console.log(result))
}