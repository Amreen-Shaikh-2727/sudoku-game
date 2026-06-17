import classNames from "classnames";
export const Grid = ({ board,handleInput, puzzle, selected, setSelected }) => {
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
            return (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => {
                  const isPrefilled = puzzle[rIdx][cIdx] !== null;
                  //'same-box', 'same-row', 'same-col'
                  // let classNames = "cell";
                  // if (selected && rIdx === selected[0]) {
                  //   classNames += " same-row";
                  // } else if (selected && cIdx === selected[1]) {
                  //   classNames += " same-col";
                  // } else if (
                  //   selected &&
                  //   Math.floor(rIdx / 3) === Math.floor(selected[0] / 3) &&
                  //   Math.floor(cIdx / 3) === Math.floor(selected[1] / 3)
                  // ) {
                  //   classNames += " same-box";
                  // }
                  return (
                    <td
                      key={cIdx}
                      className={classNames("cell", {
                        "same-row": selected && rIdx === selected[0],
                        "same-col": selected && cIdx === selected[1],
                        "same-box":
                          selected &&
                          Math.floor(rIdx / 3) ===
                            Math.floor(selected[0] / 3) &&
                          Math.floor(cIdx / 3) === Math.floor(selected[1] / 3),
                        selected:
                          selected &&
                          rIdx === selected[0] &&
                          cIdx === selected[1],
                      })}
                    >
                      <input
                        type="text"
                        maxLength={1}
                        value={cell == null ? "" : cell}
                        readOnly={isPrefilled}
                        onFocus={() => {
                          setSelected([rIdx, cIdx]);
                        }}
                        onChange={(e) => {
                          handleInput(rIdx,cIdx,e.target.value)
                        }}
                        onClick={() => {
                          setSelected([rIdx, cIdx]);
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
