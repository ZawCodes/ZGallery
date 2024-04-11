import React from "react";
import "./index.scss";

const Index = () => {
  return (
    <div className="grid-container">
      {[...Array(20).keys()].map((_, index) => (
        <div key={index} className="grid-item">
          <img
            src={`https://picsum.photos/200/200?random=${index}`}
            alt="random"
          />
        </div>
      ))}
    </div>
  );
};

export default Index;
