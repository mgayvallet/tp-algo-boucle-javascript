// ex05.js

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ('aeiouy'.includes(str[i].toLowerCase()) || 'aeiouy'.includes(str[i].toUpperCase())) {
            count++;
        }
    }
    return count
}

// Exemples de test:
console.log(countVowels("hello")); // Résultat attendu : 2
console.log(countVowels("xyz")); // Résultat attendu : 1