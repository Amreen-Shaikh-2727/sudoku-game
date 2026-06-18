export const Controls = ({handleCheck,handleReset,handleNewPuzzle}) => {
    return(
        <div style={{marginTop : 16}}>
            <button 
            style={{marginRight : 0}}
            onClick={handleCheck}
            >Check</button>
            <button 
            style={{marginRight : 0}}
            onClick={handleReset}
            >Reset</button>
            <button
            onClick={handleNewPuzzle}
            >New Puzzle</button>
        </div>
    )

}