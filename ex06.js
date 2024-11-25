// ex06.js

function generateNumbers(n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Exemples de test :
console.log(generateNumbers(5)); // Résultat attendu : [0, 1, 2, 3, 4]
console.log(generateNumbers(3)); // Résultat attendu : [0, 1, 2]
