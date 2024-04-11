import React from "react";
import logo from "./assets/ZGallery.png";
import add from "./assets/add.png";
import filter from "./assets/filter.png";
import view from "./assets/view.png";
import "./index.scss";

const Index = () => {
  return (
    <header>
      <a href="">
        <img src={logo} alt="ZGallery" />
      </a>
      <nav>
        <ul>
          <li>
            <div className="settings">
              <img src={add} alt="Add" />
            </div>
          </li>
          <li>
            <div className="settings">
              <img src={filter} alt="Filter" />
            </div>
          </li>
          <li>
            <div className="settings">
              <img src={view} alt="View" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Index;
