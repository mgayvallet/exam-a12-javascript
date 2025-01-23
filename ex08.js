function sommePairs(tab) {
    let result = 0
    for (let i = 0; i < tab.length; i++) {
        if(tab[i] % 2 === 0 ){
            result += tab[i]
        }
    }
    return result
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6