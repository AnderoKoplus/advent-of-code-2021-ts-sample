import { readFileSync } from "fs";
import path from "path";

const start = new Date();
const getTotalFuel = (input: number[]): number => {
  return input.reduce((acc, mass) => acc + (Math.floor(mass / 3) - 2), 0);
};

const getIncrementalFuel = (mass: number): number => {
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) {
    return 0;
  }
  return fuel + getIncrementalFuel(fuel);
};

const filename =
  process.env["INPUT_DAY01_01"] ||
  path.join(process.cwd(), "./data/day01/input.txt");

const text: string = readFileSync(filename).toString();
const input: number[] = text.split("\n").map((v) => parseInt(v, 10));

let totalFuel = input.reduce((acc, mass) => {
  return acc + getIncrementalFuel(mass);
}, 0);

console.log(getTotalFuel(input));
console.log(totalFuel);
console.log("Time: " + (new Date().getTime() - start.getTime()));
