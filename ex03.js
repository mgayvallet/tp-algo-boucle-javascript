// ex03.js

function multiplyArray(arr, multiplier) {
    let tab = []
    for (let i = 0; i < arr.length; i++) {
        tab.push(arr[i] * multiplier)
    }
    return tab
}

// Exemples de test :
console.log(multiplyArray([1, 2, 3], 2)); // Résultat attendu : [2, 4, 6]
console.log(multiplyArray([4, 0, -3], 3)); // Résultat attendu : [12, 0, -9]