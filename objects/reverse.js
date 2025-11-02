function reverseArray(array) {
    let arrayNew = []
    for (let n = array.length - 1 ; n >= 0 ; n--) {
        arrayNew.push(array[n])
    }
    return arrayNew
}

function reverseArrayInPlace(array) {
    for (let n = 1 ; n <= array.length ; n++) {
        let lastElement = array[array.length-n]
        let firstElemnt = array[n-1]
        array[array.indexOf(lastElement)] = firstElemnt
        array[array.indexOf(firstElemnt)] = lastElement
    }
    return array
}

let array = ["A", "B", "C", "D", "E"]

console.log(reverseArrayInPlace(array))

