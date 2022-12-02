const data = await Deno.readTextFile("./input.txt");

const split = data.split("\r\n");

const lookup: Record<string, number> = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
  X: 1,
  Y: 2,
  Z: 3,
};
const outcomeLookup: Record<string, Record<string, boolean>> = {
  A: { Y: true },
  B: { Z: true },
  C: { X: true },
};
//0 if you lost, 3 if the round was a draw, and 6 if you won
const LOST = 0;
const DRAW = 3;
const WIN = 6;
function evaluate(opponent: string, player: string): number {
  let res = 0;
  // We'd be getting a boolean or undefined
  const outcome = outcomeLookup[opponent][player];
  const playerValue = lookup[player];
  const opponentValue = lookup[opponent];

  if (outcome) {
    res = WIN + lookup[player];
  } else if (playerValue == opponentValue) {
    res = DRAW + playerValue;
  } else {
    res = LOST + playerValue;
  }
  console.log(res);
  return res;
}

const initValue = 0;
const score = split.reduce<number>((acc, value) => {
  const [opponent, player] = value.split(" ");
  return (acc += evaluate(opponent, player));
}, initValue);

console.log(score);
