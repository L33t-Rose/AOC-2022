const data = await Deno.readTextFile("./input.txt");

const split = data.split("\r\n");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
console.log(lowercase.indexOf("s"));
const uppercase = lowercase.toUpperCase();

let acc = 0;
for (let i = 0; i < split.length; i += 3) {
  const first = split.slice(i, i + 3);
  console.log(first);

  const letter = first[0]
    .split("")
    .sort((letter1, letter2) => {
      return (
        (first[1].indexOf(letter1) != -1 ? 1 : 0) +
        (first[2].indexOf(letter1) != -1 ? 1 : 0) -
        ((first[1].indexOf(letter2) != -1 ? 1 : 0) +
          (first[2].indexOf(letter2) != -1 ? 1 : 0))
      );
    })
    .pop();

  console.log(letter);

  const lower = lowercase.indexOf(letter!);
  const upper = uppercase.indexOf(letter!);
  const value = lower > upper ? lower + 1 : upper + 27;
  console.log(letter, value);
  acc += value;
}

console.log(acc);
