import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  return (
    <div className="text-center p-5 m-5">
      <h1>404 This Page Not Available</h1>
      <button
        className="btn btn-outline-primary m-5"
        onClick={() => history.push("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
