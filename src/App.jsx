import { Grid } from "./components/Grid";
import { Controls } from "./components/Controls";
import { useEffect, useState } from "react";
import "./App.css";
import { fetchPuzzle } from "./fetch-puzzle";

function App() {
  //board[0][0] = null

  const [board, setBoard] = useState(null);

  //puzzle[0][0] = null

  const [puzzle, setPuzzle] = useState(null);

  const [solution, setSolution] = useState(null);
  const [status, setStatus] = useState("");
  //row,col
  const [selected, setSelected] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchPuzzle({
      setError,
      setStatus,
      setPuzzle,
      setSolution,
      setBoard,
      setSelected,
    });
  }, []);

  //coreect color it tell us how many block are green

  const [greenCount, setGreenCount] = useState(0);

  const handleCheck = () => {
    const flatBoard = board.flat();
    const flatSolution = solution.flat();

    if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
      setStatus("Correct!");

      let count = 0;
      // const totalCells = 81;
      const interval = setInterval(() => {
        count++;
        setGreenCount(count);

        if (count >= 81) {
          clearInterval(interval);
        }
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
    fetchPuzzle({
      setError,
      setStatus,
      setPuzzle,
      setSolution,
      setBoard,
      setSelected,
    });
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

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (!board) {
    return <div>Loading</div>;
  }

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
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
