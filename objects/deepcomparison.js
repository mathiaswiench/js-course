function deepEqual(obj1, obj2) {
  for (let key1 of Object.keys(obj1)) {
    if (!obj2[key1]) {
      return false;
    }
    if (typeof obj1[key1] != 'object' && typeof obj2[key1] != 'object') {
      if (obj1[key1] === obj2[key1]) {
        return true;
      } else {
        return false;
      }
    } else {
      return deepEqual(obj1[key1], obj2[key1]);
    }
  }
}

function main(obj1, obj2) {
  for (let key1 of Object.keys(obj1)) {
    if (!obj2[key1]) {
      return false;
    }
    if (typeof obj1[key1] == 'object' && typeof obj2[key1] == 'object') {
      if (!deepEqual(obj1[key1], obj2[key1])) return false;
    } else {
      if (obj1[key1] === obj2[key1]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

function deepEqualRecursion(obj1, obj2) {
  // 1) obj1: { here: { is: 'an' }, object: 2 }
  // 1) obj1: { here: { is: 'an' }, object: 2 }
  // 1) obj1.keys.length 2
  // 1) obj2.keys.length 2
  // 2) obj1: { is: 'an' }
  // 2) obj1: { is: 'an' }
  // 2) obj1.keys.length 1
  // 2) obj2.keys.length 1
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }

  let keys1 = Object.keys(obj1),
    keys2 = Object.keys(obj2);
  // 1) keys1: here, object
  // 1) keys2: here, object
  // 2) keys1: is
  // 2) keys2: is
  for (key of keys1) {
    // 1) key = here
    // 2) key = is
    let showKey = key;
    if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') {
      // 1) obj1[key] = here: { is: 'an' } == object
      // 1) obj2[key] = here: { is: 'an' } == object
      // 1) deepEqualRecursion({ is: 'an' }, { is: 'an' })
      let resultDeepEqual = deepEqualRecursion(obj1[key], obj1[key]);
      if (resultDeepEqual) {
        continue;
      } else {
        return false;
      }
    } else {
      if (obj1[key] === obj2[key]) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

let obj = { here: { is: 'an' }, object: 2 };
let objNested = { here: { is: { is: 'test' } }, object: 2 };

console.log(deepEqualRecursion(obj, { here: { is: 'an' }, object: 2 }));
console.log(deepEqualRecursion(obj, { here: 1, object: 2 }));
console.log(deepEqualRecursion(obj, { here: { is: 'an' }, object: 2 }));
