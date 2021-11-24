const key = "RGAPI-b9ad3ebf-a01d-4e52-a690-2137c6d4fa55"
const summonersTableBody = document.getElementById("summoners-tbody");


fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/doublelift?api_key=" + key)
    .then(response => response.json())
    .then(result => saveToDb(result))

fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/deforen?api_key=" + key)
    .then(response => response.json())
    .then(result => saveToDb(result))

fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/gubz?api_key=" + key)
    .then(response => response.json())
    .then(result => saveToDb(result))

fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/lemonjuicee?api_key=" + key)
    .then(response => response.json())
    .then(result => saveToDb(result))

fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/captainzeus?api_key=" + key)
    .then(response => response.json())
    .then(result => saveToDb(result))

function saveToDb(result) {
    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(result)
    }).then(response => response.json())
        .then(summ => {
                const summonerCreatedInDB = {
                    generatedId: summ.generatedId,
                    accountId: summ.accountId,
                    id: summ.id,
                    name: summ.name,
                    profileIconId: summ.profileIconId,
                    puuid: summ.puuid,
                    revisionDate: summ.revisionDate,
                    summonerLevel: summ.summonerLevel
                }
                createSummonerTableRow(summonerCreatedInDB)
            })
}

function createSummonerTableRow(summoner) {
    const summonersTableRow = document.createElement("tr");
    summonersTableRow.id = summoner.id;

    summonersTableBody.appendChild(summonersTableRow);

    constructSummonersTableRow(summonersTableRow, summoner);
}

function constructSummonersTableRow(summonersTableRow, summoner) {
    summonersTableRow.innerHTML = `
            <td>
                <a href="../matches/matches.html?generatedId=${summoner.generatedId}">
                    <p class="row-summoners-generated-id">${summoner.generatedId}</p>
                </a>
            </td>
            <td>
                <p class="row-summoners-accountId">${summoner.accountId}</p>
            </td>
            <td>
                <p class="row-summoners-id">${summoner.id}</p>
            </td>
            <td>
                <p class="row-summoners-name">${summoner.name}</p>
            </td>
            <td>
                <p class="row-summoners-profile-icon-id">${summoner.profileIconId}</p>
            </td>
            <td>
                <p class="row-summoners-puuid">${summoner.puuid}</p>
            </td>
            <td>
                <p class="row-summoners-revision-date">${summoner.revisionDate}</p>
            </td>
            <td>
                <p class="row-summoners-summoner-level">${summoner.summonerLevel}</p>
            </td>
            `;

}







