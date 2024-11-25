// ex09.js

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum
}

// Exemples de test:
console.log(sumEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 6
console.log(sumEvenNumbers([7, 11, 18])); // Résultat attendu : 18