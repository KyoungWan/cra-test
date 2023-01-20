import React from "react";
import useTheme from "./useTheme";
const Board = (props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      Board
      <div>theme in board: {theme}</div>
      <button onClick={() => toggleTheme()}> Toggle </button>
    </div>
  );
};
export default Board;
