function premiereLettreMajuscule(chaine) {
    let chaineArray = chaine.split(" ");
    for (let i = 0; i < chaineArray.length; i++) {
        chaineArray[i] = chaineArray[i].charAt(0).toUpperCase() + chaineArray[i].slice(1);
    }
    return chaineArray.join(" ");
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"