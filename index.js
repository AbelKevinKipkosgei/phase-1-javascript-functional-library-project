// Helper function to handle both arrays and objects
const handleCollection = function (collection, callback) {
  if (!Array.isArray(collection) && typeof collection === "object") {
    collection = Object.values(collection);
  }
  return callback(collection);
};

const myEach = function (collection, callback) {
  return handleCollection(collection, function (arr) {
    arr.forEach(callback);
    return collection;
  });
};

const myMap = function (collection, callback) {
  return handleCollection(collection, function (arr) {
    return arr.map(callback);
  });
};

const myReduce = function (collection, callback, acc) {
  return handleCollection(collection, function (arr) {
    if (acc === undefined) {
      acc = arr[0];
      arr = arr.slice(1);
    }
    return arr.reduce(callback, acc);
  });
};

const myFind = function (collection, predicate) {
  return handleCollection(collection, function (arr) {
    return arr.find(predicate);
  });
};

const myFilter = function (collection, predicate) {
  return handleCollection(collection, function (arr) {
    return arr.filter(predicate);
  });
};

const mySize = function (collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === "object") {
    return Object.keys(collection).length;
  }
  return 0;
};

const myFirst = function (array, n) {
  if (n !== undefined) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
};

const myLast = function (array, n) {
  if (n !== undefined) {
    return array.slice(-n);
  } else {
    return array[array.length - 1];
  }
};

const myKeys = function (object) {
  return Object.keys(object);
};

const myValues = function (object) {
  return Object.values(object);
};

// Helper functions for tests
function arraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;
  for (let idx = 0; idx < arrA.length; idx++) {
    if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
      if (!arraysEqual(arrA[idx], arrB[idx])) return false;
    } else if (arrA[idx] !== arrB[idx]) {
      return false;
    }
  }
  return true;
}

function objectsEqual(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues,
  arraysEqual,
  objectsEqual,
};
