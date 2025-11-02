let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function loop(obj) {
  console.log(obj)
  for (let key of Object.keys(obj)) {
    if (key == "rest") {
        if (isEmpty(list[key])) {
            return list[key]
        } else {
            let o = list[key]
            return loop(o)
        }
    } else {
        continue
    }

}
}
console.log(loop(list))

