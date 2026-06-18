import {Grid}  from './components/Grid';
import {Controls}  from './components/Controls';

import './App.css';
import { useState } from 'react';

function App() {
    const [board,setBoard] = useState(Array(9)
    .fill(null)
    .map(() => Array(9).fill(null)));
    const [puzzle,setPuzzle] = useState(Array(9)
    .fill(null)
    .map(() => Array(9).fill(null))
    )

    //row,col
const [selected,setSelected] = useState(null);

const handleCheck = () =>{

}

const handleReset = () =>{
  
}

const handleNewPuzzle = () =>{
  
}

const handleInput =(rIdx,cIdx,value)=>{
  if(value === "" || (value >= 1 && value <=9 )){
    setBoard((prev) => 
      prev.map((row,r) =>
        row.map((cell,c) =>{
          if (r === rIdx && c ==cIdx){
            return value ? parseInt(value) : null ;
          }
          return cell;
        })
      ))
  }
}

  return(
    <div style={{textAlign: 'center'}}>
      <h1>Sudoku</h1>
      <Grid
        board={board}
        puzzle={puzzle}
        handleInput={handleInput}
        selected={selected}
        setSelected = {setSelected}
      />
      <Controls
       handleCheck ={handleCheck}
       handleReset ={handleReset}
       handleNewPuzzle = {handleNewPuzzle}
      />
    </div>
  )
}

export default App
