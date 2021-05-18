import React from "react";

import "./styles.css";

export const Button = ({ text, onClick }) => {
  return (
    <button className="blob-btn" onClick={() => onClick()}>
      {text}
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </button>
  );
};
