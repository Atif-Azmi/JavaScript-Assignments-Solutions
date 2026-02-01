const input = { a: "x", b: "y", c: "z" };

const swapped = Object.fromEntries(
  Object.entries(input).map(([key, value]) => [value, key])
);

console.log(swapped); 
