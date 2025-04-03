class Node {
  constructor(position, parent = null) {
    const x = position[0];
    const y = position[1];
    this.move = [x, y];
    this.parent = parent;
  }
}

function knightMoves(start, end) {
  if (start[0] < 0 || start[1] < 0 || start[0] > 7 || start[1] > 7) {
    throw new Error('Please provide a valid starting value');
  }
  if (end[0] < 0 || end[1] < 0 || end[0] > 7 || end[1] > 7) {
    throw new Error('Please provide a valid ending value');
  }

  let result = [];
  let visited = [];
  let queue = [];
  queue.push(new Node(start));

  while (queue.length) {
    let currentMove = queue.shift();
    const x = currentMove.move[0];
    const y = currentMove.move[1];

    let neighbors = [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
      [x + 1, y + 2],
      [x - 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y - 2]
    ]
    if (neighbors.length !== 0) {
        neighbors = neighbors.filter(move => move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7);
        neighbors = neighbors.filter(neighbor => {
          return !visited.some(obj => obj.move[0] === neighbor[0] && obj.move[1] === neighbor[1]);
        })
      }

    if (!(visited.some(obj => obj === currentMove))) {
      visited.push(currentMove);

      for (const neighbor of neighbors) {
        queue.push(new Node(neighbor, currentMove));
      }
    }

    if (neighbors.some(move => move[0] === end[0] && move[1] === end[1])) {
      while (currentMove !== null) {
        result.unshift(currentMove.move);
        currentMove = currentMove.parent;
      }
      result.push(end);
      break;
    }
  }
  return result;
}

console.log(knightMoves([3, 3], [7, 7]));


