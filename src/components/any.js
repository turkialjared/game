import React from "react";

const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          width: "50px",
          height: "30px",
          border: "1px black solid",
          borderRadius: "30px",
          backgroundColor: "orange",
        }}
      >
        letsgo
      </button>
    </>
  );
};
export default Button;
