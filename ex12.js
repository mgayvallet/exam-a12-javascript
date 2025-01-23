function estPalindromeAvance(chaine) {
    let chaineMinuscule = chaine.toLowerCase();
    let chaineSansEspaces = chaineMinuscule.replace(/\s/g, "");
    let chaineInversee = chaineSansEspaces.split("").reverse().join("");
    return chaineSansEspaces === chaineInversee;
}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true
console.log(estPalindromeAvance("laval")); // Résultat attendu : true
console.log(estPalindromeAvance("Bonjour")); // Résultat attendu : false
console.log(estPalindromeAvance("radar")); // Résultat attendu : true
console.log(estPalindromeAvance("ratio")); // Résultat attendu : false
