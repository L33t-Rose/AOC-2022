const text = await Deno.readTextFileSync("./input.txt");
console.log(text);

const split = text.split("\r\n\r\n").map((str) => {
  let value = 0;
  return str.split("\r\n").reduce<number>((val, str) => {
    return val + parseInt(str);
  }, value);
});

console.log(Math.max(...split));
let items = split.sort((a, b) => {
  return b - a;
});
console.log(items[0]);

console.log(items[0] + items[1] + items[2]);
