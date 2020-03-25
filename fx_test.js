// # define function
const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});
const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const products = [
  { name: "반팔티", price: 15000, quantity: 1 },
  { name: "긴팔티", price: 20000, quantity: 2 },
  { name: "핸드폰케이스", price: 30000, quantity: 3 },
  { name: "매트리스", price: 18000, quantity: 4 }
];

const add = (a, b) => a + b;

console.log(
  reduce(
    add,
    map(
      p => p.price,
      filter(p => p.price < 20000, products)
    )
  )
);

const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

go(
  add(0, 1),
  a => a + 10,
  a => a + 100,
  console.log
);

const f = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100
);

const total_price = pipe(
  map(p => p.price),
  reduce(add)
);

const base_total_price = predi => pipe(filter(predi), total_price);

go(
  products,
  base_total_price(p => p.price < 20000),
  console.log
);

go(
  products,
  base_total_price(p => p.price >= 20000),
  console.log
);

// 총수량
const total_quantity = pipe(
  map(p => p.quantity),
  reduce(add)
);

// 총가격
const t_price = pipe(
  map(p => p.price * p.quantity),
  reduce(add)
);
console.log(total_quantity(products));
console.log(t_price(products));

// 더 추상화
const sum = curry((f, iter) => go(iter, map(f), reduce(add)));
const tt_quan = sum(p => p.quantity);

console.log(tt_quan(products));
