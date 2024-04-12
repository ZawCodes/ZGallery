import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "globalStates";
import { motion } from "framer-motion";

import "./index.scss";

const ImageGrid = ({ images }) => {
  const { view } = useGlobalStates();
  return (
    <div className={`grid-container ${view.state}`}>
      {images.map((image, index) => (
        <Link to={`detail/${image.id}`} key={index} className={`grid-item `}>
          <motion.img
            src={image.src}
            alt="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Link>
      ))}
    </div>
  );
};

export default ImageGrid;
