function estPalindromeAvance(chaine) {
    chaine = chaine.toLowerCase().replace(/[^a-zA-Z]/g, "");   // cette re exp permet de sup tous les espaces
    return chaine === chaine.split("").reverse().join("");

}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true