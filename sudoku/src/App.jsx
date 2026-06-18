import { Grid } from "./components/Grid";
import { Controls } from "./components/Controls";

import "./App.css";
import { useState } from "react";

function App() {
  //board[0][0] = null

  const [board, setBoard] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null)),
  );

  //puzzle[0][0] = null

  const [puzzle, setPuzzle] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null)),
  );

  const [solution, setSolution] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null)),
  );
  const [status, setStatus] = useState(null);

  //row,col
  const [selected, setSelected] = useState(null);

  //coreect color it tell us how many block are green

  const [greenCount, setGreenCount] = useState(0);

  const handleCheck = () => {
    const flatBoard = board.flat();
    const flatSolution = solution.flat();

    if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
      setStatus("Correct!");

      let count = 0;
      const totalCells = 81;
      const interval = setInterval(() => {
        count++;
        setGreenCount(count);
      }, 10);
    } else {
      setStatus("Incorrect! Try Again!");
      setGreenCount(0);
    }
  };

  const handleReset = () => {
    setBoard(puzzle.map((row) => [...row]));
    setStatus("");
    setSelected(null);
    setGreenCount(0);
  };

  const handleNewPuzzle = () => {
    setGreenCount(0);
  };

  const handleInput = (rIdx, cIdx, value) => {
    if (value === "" || (value >= 1 && value <= 9)) {
      setBoard((prev) =>
        prev.map((row, r) =>
          row.map((cell, c) => {
            if (r === rIdx && c === cIdx) {
              return value ? parseInt(value) : null;
            }
            return cell;
          }),
        ),
      );
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sudoku</h1>
      <Grid
        board={board}
        puzzle={puzzle}
        handleInput={handleInput}
        selected={selected}
        setSelected={setSelected}
        greenCount={greenCount}
      />
      <Controls
        handleCheck={handleCheck}
        handleReset={handleReset}
        handleNewPuzzle={handleNewPuzzle}
      />
      {status && <div className="status">{status}</div>}
    </div>
  );
}

export default App;
