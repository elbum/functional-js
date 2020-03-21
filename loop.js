//  ES5
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// ES6
for (const a of list) {
  console.log(a);
}

for (a of list) {
  console.log(a);
}

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      }
    };
  }
};

let iterator = iterable[Symbol.iterator]();

for (const a of iterable) console.log(a);
console.log(iterator);

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
console.log(iter2[Symbol.iterator]());
