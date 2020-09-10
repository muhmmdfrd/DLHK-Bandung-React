import React from "react";
import ReactLoading from "react-loading";

const LoadingScreen = () => {
  return (
    <div
      className="container h-100 pt-4"
      style={{
        position: "fixed",
        width: 100 + "%",
        height: 100 + "%",
        background: "#111",
        opacity: 0.5,
      }}
    >
      <div className="row h-100 justify-content-center align-items-center">
        <ReactLoading type="spin" color="#444" />
      </div>
    </div>
  );
};

export default LoadingScreen;
