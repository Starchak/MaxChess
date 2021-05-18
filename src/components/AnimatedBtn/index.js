import React from "react";

import "./styles.css";

export const AnimatedBtn = ({ text, onClick }) => {
  return (
    <div className="animatedBtn" onClick={() => onClick()}>
      <span>{text}</span>
    </div>
  );
};
