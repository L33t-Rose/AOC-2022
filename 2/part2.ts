const data = await Deno.readTextFile("./input.txt");

const split = data.split("\r\n");

const LOST = 0;
const DRAW = 3;
const WIN = 6;

// Value Lookup Table
const lookup: Record<string, number> = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
  X: LOST,
  Y: DRAW,
  Z: WIN,
};

const outcomeLookup: Record<string, Record<string, string>> = {
  X: {
    // We need to lose
    A: "C",
    B: "A",
    C: "B",
  },
  Y: {
    // We need to draw
    A: "A",
    B: "B",
    C: "C",
  },
  Z: {
    // We need to win
    A: "B",
    B: "C",
    C: "A",
  },
};

//0 if you lost, 3 if the round was a draw, and 6 if you won
function evaluate(opponent: string, result: string): number {
  let res = 0;
  const playerChoiceBasedOnResult = outcomeLookup[result][opponent];
  res = lookup[playerChoiceBasedOnResult] + lookup[result];
  console.log(res);
  return res;
}

const initValue = 0;
const score = split.reduce<number>((acc, value) => {
  const [opponent, desiredResult] = value.split(" ");
  return (acc += evaluate(opponent, desiredResult));
}, initValue);

console.log(score);
