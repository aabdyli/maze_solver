/**
 * Finds the path to the ezit of the
 * maze located in the last row of the array
 * @param {number[][]} maze
 * @param {[number, number]} start
 * @param {[number, number]} finish
 * @param {[[number, number]]} route
 * @returns {[[number, number]]} route
 */
function solve(maze, start = [], finish = [], route = []) {
  let i = 0;
  let j = maze[i].indexOf(1);
  let endI = maze.length - 1;
  let endJ = maze[endI].indexOf(1);

  let visited = [];
  visited.push([i, j]);
  let stack = [];
  stack.push([i, j]);
  while (i !== endI || j !== endJ) {
    // check Left
    if (
      maze[i][j + 1] === 1 &&
      !visited.find(([row, col]) => row === i && col === j + 1)
    ) {
      j++;
      stack.push([i, j]);
      visited.push([i, j]);
      continue;
    }
    if (
      maze[i + 1][j] === 1 &&
      !visited.find(([row, col]) => row === i + 1 && col === j)
    ) {
      i++;
      stack.push([i, j]);
      visited.push([i, j]);
      continue;
    }
    if (
      maze[i][j - 1] === 1 &&
      !visited.find(([row, col]) => row === i && col === j - 1)
    ) {
      j--;
      stack.push([i, j]);
      visited.push([i, j]);
      continue;
    }
    if (
      maze[i - 1][j] === 1 &&
      !visited.find(([row, col]) => row === i - 1 && col === j)
    ) {
      i--;
      stack.push([i, j]);
      visited.push([i, j]);
      continue;
    }

    stack.pop();
    [i, j] = stack[stack.length - 1]; // stack.peek()
  }
  return stack;
}

const maze = [
  [0, 0, 1, 0, 0, 0, 0, 0], //0
  [0, 1, 1, 1, 0, 0, 0, 0], //1
  [1, 1, 1, 1, 0, 0, 0, 0], //2
  [0, 0, 0, 1, 0, 0, 0, 1], //3
  [0, 0, 0, 1, 0, 1, 1, 1], //4
  [1, 1, 1, 1, 1, 1, 0, 1], //5
  [0, 0, 0, 1, 0, 1, 0, 1], //6
  [0, 0, 0, 0, 0, 0, 0, 1] //7
];

console.log(solve(maze));
