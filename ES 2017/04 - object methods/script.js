const mountains = {
  everest: 8840,
  k2: 8611,
  kangchenjunga: 8586,
  lhotse: 8586,
  makalu: 8485
};

const names = Object.getOwnPropertyNames(mountains);
console.log(names);

const keys = Object.keys(mountains);
console.log(keys);

const nav = keys.map(mountain => `<li>${mountain}</li>`).join('');
console.log(nav);

const total = Object.values(mountains).reduce((a, b) => a + b);
console.log(total);

Object.entries(mountains).forEach(([key, value]) => {
  console.log(key, value);
});
