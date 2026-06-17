export const Grid = () => {
  const board = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));

  const puzzle = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));

  /**
   * [
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * [null,null,...]
   * ]
   */
  return (
    <div className="container">
      <table className="table">
        <tbody>
          {board.map((row, rIdx) => {
            return(
            <tr key={rIdx}>
              {row.map((cell, cIdx) => {
                const isPrefilled = puzzle[rIdx][cIdx] !== null;
                return(
                <td key={cIdx} className="cell">
                    <input
                     type="text"
                     maxLength={1}
                     value={cell==null ? '' : cell}
                     readOnly={isPrefilled}
                     onFocus={()=>{}}
                     onChange={()=>{}}
                     onClick={()=>{}}

                      />
                </td>
                )
              })}
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
