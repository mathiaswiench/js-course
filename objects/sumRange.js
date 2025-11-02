function range(start, end, step = 1) {
    let numbers = []
    if (step > 0) {
        for (let n = start ; n <= end ; n = n + step) {
            numbers.push(n)
        }
    } else {
        for (let n = start ; n >= end ; n = n - Math.abs(step)) {
            numbers.push(n)
        }
    }
    console.log(numbers)
    return numbers
}

function sum(numbers) {
    let sum = 0
    for (let n = 0 ; n < numbers.length ; n++) {
        sum = sum + Number(numbers[n])
    }
    return sum
}

console.log(sum(range(10,1,-1)))