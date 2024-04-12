import React from "react";
import { useGlobalStates } from "globalStates";
import logo from "./assets/ZGallery.png";
import add from "./assets/add.png";
import filter_icon from "./assets/filter.png";
import filter_reverse from "./assets/filter_reverse.png";
import view_icon from "./assets/view.png";
import view_reverse from "./assets/view_reverse.png";
import "./index.scss";

const Index = () => {
  const { sort, view } = useGlobalStates();

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
            <div
              className="settings"
              onClick={() =>
                sort.setState((prev) => (prev === "asc" ? "desc" : "asc"))
              }
            >
              <img
                src={sort.state == "asc" ? filter_icon : filter_reverse}
                alt="Filter"
              />
            </div>
          </li>
          <li>
            <div
              className="settings"
              onClick={() =>
                view.setState((prev) => (prev === "big" ? "small" : "big"))
              }
            >
              <img
                src={view.state == "big" ? view_icon : view_reverse}
                alt="View"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Index;
