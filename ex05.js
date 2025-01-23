function compterVoyelles(chaine) {
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    let count = 0;
    for (let i = 0; i < chaine.length; i++) {
        if (voyelles.includes(chaine[i])) {
            count++;
        }
    }
    return count;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
console.log(compterVoyelles("salut")); // Résultat attendu : 2
console.log(compterVoyelles("tableau")); // Résultat attendu : 4
console.log(compterVoyelles("document")); // Résultat attendu : 3
console.log(compterVoyelles("javascript")); // Résultat attendu : 3
