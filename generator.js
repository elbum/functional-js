function* odd() {
  yield 1;
  yield 3;
  yield 5;
  yield 7;
  return 10;
}

const it = odd();

for (a of it) {
  console.log(a);
}

function* infi(i = 0) {
  while (1) yield i++;
}

const inf = infi();

for (a of inf) {
  console.log(a);
}
