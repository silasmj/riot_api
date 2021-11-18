fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=APIKEYHERE")
    .then(response => response.json())
    .then(result => console.log(result))


console.log("Hej")