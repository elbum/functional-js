const L = {};
L.map = function*(f, iter) {
  for (const a of iter) yield f(a);
};

var it = L.map([1, 2, 3]);
console.log(it.next());
