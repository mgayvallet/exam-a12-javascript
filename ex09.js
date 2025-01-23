function compterMots(chaine) {
    let mots = chaine.split(" ");
    return mots.length;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4  
console.log(compterMots("Je suis un devellopeur html css js")); // Résultat attendu : 7
console.log(compterMots("Bonjour tout")); // Résultat attendu : 2
console.log(compterMots("Je suis un devellopeur html")); // Résultat attendu : 5
console.log(compterMots("Bonjour")); // Résultat attendu : 1  
