fetch(baseURL + "/matches")
    .then(response => response.json)
        .then(result => {
            console.log(result)
        })