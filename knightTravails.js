class Node {
  constructor(position, parent = null) {
    const x = position[0];
    const y = position[1];
    this.move = [x, y];
    this.parent = parent;
  }
}

function knightMoves(start, end, moves = []) {
  let visited = [];
  let queue = [];
  queue.push(start);
  console.log(queue)



  // while (queue.length !== 0) {
  //   let currentMove = new Node(queue[0]);
  //   console.log(currentMove);
  //   const x = currentMove.move[0];
  //   const y = currentMove.move[1];

  //   visited.push([x, y]);
  //   queue.shift();

  //   queue.push(new Node([x + 2, y + 1], currentMove),
  //     new Node([x + 2, y - 1], currentMove),
  //     new Node([x - 2, y + 1], currentMove),
  //     new Node([x - 2, y - 1], currentMove),
  //     new Node([x + 1, y + 2], currentMove),
  //     new Node([x - 1, y + 2], currentMove),
  //     new Node([x + 1, y - 2], currentMove),
  //     new Node([x - 1, y - 2], currentMove)
  //   );
  //   for (let i = 0; i < queue.length; i++) {
  //     if (queue[i].move[0] < 0 || queue[i].move[0] > 7 || queue[i].move[1] < 0 || queue[i].move[1] > 7) {
  //       queue.splice(i, 1);
  //       i--;
  //     }
  //     if (visited.includes(queue[i])) {
  //       queue.splice(i, 1);
  //       i--;
  //     }
  //   }

  //   if (currentMove.move === end) {
  //     moves = currentMove;
  //     break;
  //   }
  // }
}

knightMoves([0, 0], [3, 3])