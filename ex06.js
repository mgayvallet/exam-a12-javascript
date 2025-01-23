function doublons(tab) {
    let newtab = []
    for (let i = 0; i < tab.length; i++) {
        let result = tab[i] * 2
        newtab.push(result)
    }
    return newtab
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]