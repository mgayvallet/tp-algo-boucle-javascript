function compressArray(arr) {
    const TAB = [];
    let num = null;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            count++;
        } else {
            if (num != null) TAB.push([num, count]);
            num = arr[i];
            count = 1;
        }
    }
    TAB.push([num, count]);
    return TAB;
}

// Exemples de test :
console.log(compressArray([1, 1, 2, 2, 2, 3, 4, 4])); // Résultat attendu : [[1, 2], [2, 3], [3, 1], [4, 2]]
