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
  return obj === null;
}

function loop(obj) {
  for (let key of Object.keys(obj)) {
    if (key == 'rest') {
      if (isEmpty(obj[key])) {
        return obj;
      } else {
        let o = obj[key];
        return loop(o);
      }
    }
  }
}

function arrayToList(numbers) {
  let list = {};
  for (number of numbers) {
    if (Object.keys(list).length === 0) {
      list['value'] = number;
      list['rest'] = null;
    } else {
      let rest = loop(list);
      rest['rest'] = { value: number, rest: null };
    }
  }
  return list;
}

function listToArray(list, array = []) {
  let a = array;
  for (let key of Object.keys(list)) {
    if (key === 'value') {
      a.push(list[key]);
    }
    if (key === 'rest' && !isEmpty(list[key])) {
      return listToArray(list[key], a);
    }
  }
  return array;
}

function prepend(number, list) {
  let newList = {};
  newList['value'] = number;
  newList['rest'] = list;
  return newList;
}

function nth(list, i = 0, counter = 0) {
  for (let key of Object.keys(list)) {
    if (i == counter && key == 'value' && list[key] != undefined) {
      return list[key];
    }
    if (key == 'rest' && !isEmpty(list[key])) {
      counter++;
      return nth(list[key], i, counter);
    }
  }
  return undefined;
}

console.log(arrayToList([1, 2, 3, 4]));
console.log(listToArray(arrayToList([1, 2, 3, 4])));
console.log(prepend(5, arrayToList([1, 2, 3, 4])));
console.log(nth(arrayToList([1, 2, 3, 4]), 5));



