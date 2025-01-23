function moyenne(tab) {
    let result = 0
    for (let i = 0; i < tab.length; i++) {
        result += tab[i] / tab.length
    }
    return result
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6