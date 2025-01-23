function premiereLettreMajuscule(chaine) {
    let mots = chaine.split(" ");
    let resultat = "";
    for (let i = 0; i < mots.length; i++) {
        resultat += mots[i].charAt(0).toUpperCase() + mots[i].slice(1) + " ";
    }
    return resultat;
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
console.log(premiereLettreMajuscule("Je suis un devellopeur html css js")); // Résultat attendu : Je Suis Un Devellopeur Html Css Js
console.log(premiereLettreMajuscule("Bonjour tout")); // Résultat attendu : Bonjour Tout
console.log(premiereLettreMajuscule("Je suis un devellopeur html")); // Résultat attendu : Je Suis Un Devellopeur Html
console.log(premiereLettreMajuscule("Bonjour je fais du hockey")); // Résultat attendu : Bonjour Je Fais Du Hockey