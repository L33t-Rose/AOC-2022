const data = await Deno.readTextFile("./input.txt");

const split = data.split("\r\n");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();

let acc = 0;
for (const comp of split) {
  const first = comp.slice(0, Math.floor(comp.length / 2));
  const second = comp.slice(Math.floor(comp.length / 2));
  console.log(first, second);

  const letter = first
    .split("")
    .sort((letter) => {
      return second.indexOf(letter);
    })
    .pop() as string;

  const lower = lowercase.indexOf(letter);
  const upper = uppercase.indexOf(letter);
  const value = lower > upper ? lower + 1 : upper + 27;
  console.log(letter, value);
  acc += value;
}

console.log(acc);
