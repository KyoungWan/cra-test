import React from "react";
import useTheme from "./useTheme";
const Card = (props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      Card
      <div>theme in board: {theme}</div>
      <button onClick={() => toggleTheme()}> Toggle </button>
    </div>
  );
};
export default Card;
