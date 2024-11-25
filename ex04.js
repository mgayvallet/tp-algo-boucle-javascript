// ex04.js

function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);

}

// Exemples de test:
console.log(filterPositiveNumbers([-3, 5, -1, 2])); // Résultat attendu : [5, 2]
console.log(filterPositiveNumbers([-1, -2, -3])); // Résultat attendu : []