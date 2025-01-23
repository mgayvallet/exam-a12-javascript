function compterMots(chaine) {
    for (let i = 0; i < chaine.length; i++) {
        return chaine.split(" ").length; 
    }
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4  