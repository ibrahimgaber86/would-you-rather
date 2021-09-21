import React from "react";

function Loading() {
  return (
    <div
      style={{ height: 300 }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
