const solve = require("./MazeSolver");

// Test the implementation
let maze = [
  [0, 0, 1, 0, 0, 0, 0, 0], //0
  [0, 1, 1, 1, 0, 0, 0, 0], //1
  [1, 1, 1, 1, 0, 0, 0, 0], //2
  [0, 0, 0, 1, 0, 0, 0, 1], //3
  [0, 0, 0, 1, 0, 1, 1, 1], //4
  [1, 1, 1, 1, 1, 1, 0, 1], //5
  [0, 1, 0, 1, 0, 1, 0, 1], //6
  [0, 0, 0, 0, 0, 0, 0, 1] //7
];

let steps = solve(maze);

let solved = maze.map(el => el.map(el => el));

steps.forEach(el => {
  const [i, j] = el;
  solved[i][j] = "x";
});
console.table(maze);
console.table(solved);
