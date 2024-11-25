// ex01.js

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Exemples de test :
console.log(findMax([1, 3, 7, 2])); // Résultat attendu : 7
console.log(findMax([-5, -1, -10])); // Résultat attendu : -1