import React from "react";

import "./styles.css";

const isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

export const PageLoader = () => {
  return (
    <div className="page_loader">
      <h3>Searching for opponent</h3>
      {isChrome ? (
        <div className="loaderChrome">
          <div />
          <div />
          <div />
        </div>
      ) : (
        <div className="loader">
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
        </div>
      )}
    </div>
  );
};
