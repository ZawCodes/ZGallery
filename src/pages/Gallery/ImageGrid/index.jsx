import React from "react";
import { Link } from "react-router-dom";
import images from "utils/images.js";
import "./index.scss";

const Index = () => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <Link to={`detail/${image.id}`} key={index} className="grid-item">
          <img src={image.src} alt="image" />
        </Link>
      ))}
    </div>
  );
};

export default Index;
