const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 30000 }
];

// const m = new Map();

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};
console.log(map(p => p.name, products));

a = [1, 2, 3];
console.log(a.map(i => i + 1));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
console.log(map(([k, v]) => [k, v * 2], m));

console.log(...a);

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

console.log(...filter(p => p.price < 20000, products));
