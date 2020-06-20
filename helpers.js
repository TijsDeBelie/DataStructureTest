function groupBy(list, k) {
  const map = new Map();
  list.forEach((item) => {
    const key = k(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

//use the reduce function to make the sum of all the columns
const sum = (key, arr) => {
  return arr.reduce((prev, curr) => prev + (curr[key] || 0), 0);
};
