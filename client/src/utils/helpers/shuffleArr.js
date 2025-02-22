export const shuffleArr = arr => {
  var compare = madness();
  return arr.sort(compare);
};

function putToCache(elem, cache) {
  if (cache.indexOf(elem) != -1) {
    return;
  }
  var i = Math.floor(Math.random() * (cache.length + 1));
  cache.splice(i, 0, elem);
}

function madness() {
  var cache = [];
  return function (a, b) {
    putToCache(a, cache);
    putToCache(b, cache);
    return cache.indexOf(b) - cache.indexOf(a);
  };
}
