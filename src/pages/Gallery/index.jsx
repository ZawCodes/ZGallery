import React from "react";
import Search from "./Search";
import ImageGrid from "./ImageGrid";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="gallery">
        <div className="container">
          <Search />
          <ImageGrid />
        </div>
      </div>
    </>
  );
};

export default Index;
