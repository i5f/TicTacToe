// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

function GameBoard({ onSelectSquare, board }) {
  // ************************* EXPLANATION ************************* //
  //
  // The reason why we wrote the following explanation(double commented
  // part i.e. // //) and implementation(single commented part i.e. //)
  // about the gameboard was to update the cell states with
  // corresponding symbols i.e. 'X' or 'O' but turns out that <Log />
  // component also needs that so in order to handle the same state
  // changes on two different places, we, instead, gonna handle it in
  // the parent or superior component of it
  //
  // *************************************************************** //

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectedSquare(rowIndex, colIndex) {
  //     // objects and arrays(also objects) are reference values in JS =>
  //     // therefore you should NOT MUTATE them DIRECTLY! - instead,
  //     // create a (deep) copy first
  //     setGameBoard((prevGameBoard) => {
  //       // the following line updates the old value in memory
  //       // immediately, even before this scheduled state update was
  //       // executed by React and this can lead to some strange bugs or
  //       // unpredictable side effects if we have multiple places in our
  //       // app that are scheduling state updates for the same state
  //       /* prevGameBoard[rowIndex][colIndex] = "X";
  //        return prevGameBoard; */

  //       // what we should do instead is that we need to create a new
  //       // variable, copy the old array values to this new array and
  //       // then, update it. However, we need to do this for every layer
  //       // i.e. every array dimension, one by one therefore,
  //       // 1. spread the outer array elements on prevGameBoard, (...prevGameBoard)
  //       // 2. map the elements inside of it(innerArray) to the empty array
  //       // elements but before assignment,  (.map())
  //       // 3. spread the inner arrays to their elements (...innerArray)
  //       // 4. update the changed element after updating the array
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol; // this will change later
  //       return updatedGameBoard;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
