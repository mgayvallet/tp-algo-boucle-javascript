// ex12.js

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Exemples de test :
console.log(reverseArray([1, 2, 3])); // Résultat attendu : [3, 2, 1]
console.log(reverseArray([10, 20, 30])); // Résultat attendu : [30, 20, 10]
