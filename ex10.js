function filtrerNegatifs(tab) {
    let newtab = []
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] >= 0) {
            newtab.push(tab[i])
        }        
    }
    return newtab

}
  
console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]