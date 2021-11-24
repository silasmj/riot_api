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
        <p class="row-match-generatedid">${matches.summoner.generatedId}</p>
    </td>
    <td>
        <p class="row-match-champion">${matches.champion.id}</p>
    </td>
    <td>
         <button id="update-button-${matches.id}">🥯</button>            
    </td>
    <td>
          <button onclick="deleteMatch(${matches.id})">❌</button>            
    </td>
    `;
    document.getElementById(`update-button-${matches.id}`)
        .addEventListener("click", () => updateMatch(matches));
}
function deleteMatch(matchesId) {
    fetch(baseURL + "/matches/" + matchesId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(matchesId).remove();
        } else {
            console.log(response.status);
        }
    });
}
function updateMatch(matches) {
    const tableRowToUpdate = document.getElementById(matches.id);

    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-matches-date-${matches.id}" value="${matches.startDate}">
        </td>
        <td>
            <input id="update-matches-type-${matches.id}" value="${matches.type}">
        </td>
       <td>
            <input id="update-matches-role-${matches.id}" value="${matches.role}">
       </td>
        <td>
            <input id="update-matches-result-${matches.id}" value="${matches.result}">
       </td>
        <td>
            <input id="update-matches-honor-${matches.id}" value="${matches.honor}">
       </td>
        <td>
            <input id="update-matches-summoner-${matches.id}" value="${matches.summoner.generatedId}">
       </td>
        <td>
            <input id="update-matches-champion-${matches.id}" value="${matches.champion.id}">
       </td>
       <td>
            <button id="cancel-update-${matches.id}">✖️</button>
            <button onclick="updateMatchesInBackend(${matches.id})">✅</button>
       </td>
       <td>
            <button onclick="deleteMatch(${matches.id})">❌</button>
       </td>
    `;
    document.getElementById(`cancel-update-${matches.id}`)
        .addEventListener("click", () => undoUpdateTableRow(matches));

}
function undoUpdateTableRow(matches) {
    const matchesTableRow = document.getElementById(matches.id);

    constructMatchesTableRow(matchesTableRow, matches);
}

function updateMatchesInBackend(matchesId) {

    const tableRowToUpdate = document.getElementById(matchesId);

    const matchToUpdate = {
        id: matchesId,
        startDate: document.getElementById(`update-matches-date-${matchesId}`).value,
        type: document.getElementById(`update-matches-type-${matchesId}`).value,
        role: document.getElementById(`update-matches-role${matchesId}`).value,
        result: document.getElementById(`update-matches-result-${matchesId}`).value,
        honor:  document.getElementById(`update-matches-honor-${matchesId}`),
        summoner: document.getElementById(`update-matches-summoner-${matchesId}`),
        champion: document.getElementById(`update-matches-champion-${matchesId}`)
    };

    fetch(baseURL + "/matches/" + matchesId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(matchToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructMatchesTableRow(tableRowToUpdate, matchToUpdate);
        }
    });

}