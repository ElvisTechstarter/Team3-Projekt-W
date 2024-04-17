import React, { useState } from "react";
import styles from "./StandardBtn.module.css";

function StandardBtn({ onClick, text, style }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`${styles.myBtn} ${isPressed ? styles.myBtnPressed : ""}`}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {text}
    </div>
  );
}

export default StandardBtn;
