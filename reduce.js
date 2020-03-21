const nums = [1, 2, 3, 4, 5];
let total = 0;
for (n of nums) {
  total = total + n;
}

console.log(total);

nums.forEach(v => {
  console.log(v);
});

function add(a, b) {
  return a + b;
}

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

console.log(reduce(add, [1, 2, 3, 4, 5]));

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 30000 }
];

console.log(
  reduce((total_price, prod) => total_price + prod.price, 0, products)
);
