/**
 * Solves a 0/1 maze providing a route array with
 * all the needed steps.
 * If no start and finish is provided it assumes
 * start on the first row and finish in the last
 * row.
 *
 * @param {number[][]} maze
 * @param {[number, number]} start
 * @param {[number, number]} finish
 * @param {[[number, number]]} route
 * @returns {[[number, number]]} route
 * @throws No route found
 */
function solve(maze, start = [], finish = [], route = []) {
  let i;
  let j;
  let endI;
  let endJ;

  if (start.length) {
    [i, j] = start;
  } else {
    i = 0;
    j = maze[i].indexOf(1);
  }

  if (finish.length) {
    [endI, endJ] = finish;
  } else {
    endI = maze.length - 1;
    endJ = maze[endI].indexOf(1);
  }

  let visited = [[i, j]];
  route.push([i, j]);

  // Left, Down, Right, Up
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  while (i !== endI || j !== endJ) {
    let found = false;
    for (let direction of directions) {
      let checkI = i + direction[0];
      let checkJ = j + direction[1];

      // Block out of bounds moves
      if (checkI < 0 || checkJ < 0) {
        break;
      }

      if (
        maze[checkI][checkJ] === 1 &&
        !visited.find(([row, col]) => row === checkI && col === checkJ)
      ) {
        route.push([checkI, checkJ]);
        visited.push([checkI, checkJ]);
        [i, j] = [checkI, checkJ];
        found = true;
        break;
      }
    }
    if (found) continue;
    route.pop();
    if (route.length === 0) {
      throw "No route found";
    }
    [i, j] = route[route.length - 1]; // stack.peek()
  }

  return route;
}

const maze = [
  [0, 0, 1, 0, 0, 0, 0, 0], //0
  [0, 1, 1, 1, 0, 0, 0, 0], //1
  [1, 1, 1, 1, 0, 0, 0, 0], //2
  [0, 0, 0, 1, 0, 0, 0, 1], //3
  [0, 0, 0, 1, 0, 1, 1, 1], //4
  [1, 1, 1, 1, 1, 1, 0, 1], //5
  [0, 1, 0, 1, 0, 1, 0, 1], //6
  [0, 1, 0, 0, 0, 0, 0, 0] //7
];

console.log(solve(maze));
