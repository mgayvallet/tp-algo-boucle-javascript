// ex10.js

function calculateAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Exemples de test:
console.log(calculateAverage([2, 4, 6, 8])); // Résultat attendu : 5
console.log(calculateAverage([10, 20, 30])); // Résultat attendu : 20