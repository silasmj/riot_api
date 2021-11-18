fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=RGAPI-fe34a3bf-da62-41f5-ab3a-23165a896adb")
    .then(response => response.json())
    .then(result => console.log(result))