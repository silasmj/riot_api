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
            <input id="update-matches-win-${matches.id}" value="${matches.win}">
       </td>
        <td>
            <input id="update-matches-honor-${matches.id}" value="${matches.honor}">
       </td>
        <td>
              <input id="update-matches-summoner-${matches.id}" type="text" value="${matches.summoner.generatedId}">
       </td>
        <td>
              <input id="update-matches-champion-${matches.id}" type="text" value="${matches.champion.id}">
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
    console.log(matchesId)
    const tableRowToUpdate = document.getElementById(matchesId);

    const matchToUpdate = {
        id: matchesId,
        startDate: document.getElementById(`update-matches-date-${matchesId}`).value,
        type: document.getElementById(`update-matches-type-${matchesId}`).value,
        role: document.getElementById(`update-matches-role-${matchesId}`).value,
        win: document.getElementById(`update-matches-win-${matchesId}`).value,
        honor:  document.getElementById(`update-matches-honor-${matchesId}`).value,
        summoner: document.getElementById(`update-matches-summoner-${matchesId}`).value,
        champion: document.getElementById(`update-matches-champion-${matchesId}`).value
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