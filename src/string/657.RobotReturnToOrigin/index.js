// T: O(N)
// S: O(1)
const judgeCircle = function (moves) {
  // initialize coordinates of [X Y]
  const coordinates = [0, 0];

  // loop thru given moves
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];

    if (move === "U") {
      coordinates[0]++;
    } else if (move === "D") {
      coordinates[0]--;
    } else if (move === "L") {
      coordinates[1]++;
    } else if (move === "R") {
      coordinates[1]--;
    }
  }

  // return coordinates to be X = 0 and Y = 0
  return coordinates[0] === 0 && coordinates[1] === 0;
};

const moves = "UD";

judgeCircle(moves); // --> true
