import React from "react";
import search from "./assets/search.png";
import "./index.scss";

const index = ({ searchKey, setSearchKey }) => {
  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search ..."
          />
          <button>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
