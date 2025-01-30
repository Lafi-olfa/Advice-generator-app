
fetch('')
    .then((response) =>response.json())
    .then((data) => {
        const advices = data.slip
        console.log(advices);

    })
    .catch((error) => {
        console.error('Erreur lors du chargement du fichier JSON:', error);
    });