fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=RGAPI-5c0a70dd-85ab-4cf3-8e0f-cbded1c25fe6")
    .then(response => response.json())
    .then(result => console.log(result))


console.log("Hej")