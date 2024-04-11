import React from "react";
import search from "./assets/search.png";
import "./index.scss";

const index = () => {
  return (
    <>
      <div className="search-container">
        <div className="search">
          <input type="text" placeholder="Search ..." />
          <button>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
