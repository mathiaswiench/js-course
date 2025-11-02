// Your code here.

function countBs(word) {
  let counter = 0
  for (let n = 0 ; n < word.length ; n++) {
    if (word[n] == "B") {
      counter++
    } else {
      continue
    }
  }
  return counter
}

function countChar(word, char) {
  let counter = 0
  for (let n = 0 ; n < word.length ; n++) {
    if (word[n] == char) {
      counter++
    } else {
      continue
    }
  }
  return counter
}
console.log(countBs("BOB"));
// → 2
console.log(countChar("test", "e"));
// → 4