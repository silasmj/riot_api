const matchesTableBody = document.getElementById("matches-tbody");

fetch(baseURL + "/matches")
    .then(response => response.json())
        .then(result => {
            result.map(createMatchTableRow)
        })

function createMatchTableRow(matches) {
    const matchesTableRow = document.createElement("tr");
    matchesTableRow.id = matches.id;

    matchesTableBody.appendChild(matchesTableRow);

    constructMatchesTableRow(matchesTableRow, matches);
}

function constructMatchesTableRow(matchesTableRow, matches) {
    matchesTableRow.innerHTML = `
    <td>
        <p class="row-match-startDate">${matches.startDate}</p>
    </td>
    <td>
        <p class="row-match-type">${matches.type}</p>
    </td>
    <td>
        <p class="row-match-role">${matches.role}</p>
    </td>
    <td>
        <p class="row-match-win">${matches.win}</p>
    </td>
    <td>
        <p class="row-match-honor">${matches.honor}</p>
    </td>
    <td>
        <p class="row-match-puuid">${matches.summoner.generatedId}</p>
    </td>
    <td>
        <p class="row-match-champion">${matches.champion.id}</p>
    </td>
    
    `;
}