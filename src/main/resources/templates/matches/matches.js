const matchesTableBody = document.getElementById("matches-tbody");

fetch(baseURL + "/matches")
    .then(response => response.json())
        .then(result => {
            result.map(createMatchTableRow)
            filteredResult = result;
        })

document.getElementById("name-search").addEventListener("input", handleSearchName)

function handleSearchName(event) {
    matchesTableBody.innerHTML = "";
    filteredResult.filter(result => result.name.toLowerCase().includes(event.target.value.toLowerCase())).map(createMatchTableRow);
}

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
        <p class="row-match-summoner">${matches.summoner.generatedId}</p>
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
