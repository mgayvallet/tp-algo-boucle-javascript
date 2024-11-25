// ex11.js

function countAboveThreshold(arr, threshold) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count ++
        }        
    }
    return count
}

// Exemples de test:
console.log(countAboveThreshold([1, 5, 10, 15], 8)); // Résultat attendu : 2
console.log(countAboveThreshold([3, 2, 1], 5)); // Résultat attendu : 0