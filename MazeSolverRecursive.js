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
function solve(maze, start = [], finish = [], route = [], visited = []) {
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

  visited.push([i, j]);
  route.push([i, j]);

  // Left, Down, Right, Up
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  while (i !== endI || j !== endJ) {
    for (let direction of directions) {
      let checkI = i + direction[0];
      let checkJ = j + direction[1];
      if (checkI < 0 || checkJ < 0) return;

      if (
        maze[checkI][checkJ] === 1 &&
        !visited.find(([row, col]) => row === checkI && col === checkJ)
      ) {
        solve(maze, [checkI, checkJ], [endI, endJ], route, visited);
      }
      if (route.length === 0) {
        throw "No route found";
      }
      const lastEl = route.length - 1;
      if (route[lastEl][0] == endI && route[lastEl][0] == endJ) return route;
      [i, j] = route[lastEl]; // stack.peek()
    }
    route.pop();
    return;
  }
  return route;
}

module.exports = solve;
