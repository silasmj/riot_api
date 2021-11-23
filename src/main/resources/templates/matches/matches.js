const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
let generatedId = URLParams.get("generatedId");
const matchesTableBody = document.getElementById("galleries-tbody");


fetch(baseURL + "/matches/" + generatedId)
    .then(response => response.json())
        .then(result => {
            console.log(result)
            //result.map(createMatchTableRow)
        })

function createMatchTableRow(matches) {
    const matchesTableRow = document.createElement("tr");
    matchesTableRow.id = matches.id;
    puuid = matches.puuid;

    matchesTableBody.appendChild(matchesTableRow);

    constructMatchesTableRow(matchesTableRow, matches);
}

function constructMatchesTableRow(matchesTableRow, matches) {
    matchesTableRow.innerHTML = `
    <td>
        <p class="row-match-startDate">${escapeHTML(matches.startDate)}</p>
    </td>
    <td>
        <p class="row-match-type">${escapeHTML(matches.type)}</p>
    </td>
    <td>
        <p class="row-match-role">${escapeHTML(matches.win)}</p>
    </td>
    <td>
        <p class="row-match-honor">${escapeHTML(matches.honor)}</p>
    </td>
    <td>
        <p class="row-match-champions">${escapeHTML(matches.champion)}</p>
    </td>
    <td>
        <p class="row-match-puuid">${escapeHTML(matches.puuid)}</p>
    </td>
    `;
}