function compterVoyelles(chaine) {
    const voyelles = ["a", "e", "i", "o", "u", "y"]
    let count = 0
    for (let letter of chaine) {
        if (voyelles.includes(letter)) {
            count ++
        }
    }
    return count
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3