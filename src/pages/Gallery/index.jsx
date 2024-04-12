import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import ImageGrid from "./ImageGrid";
import Pagination from "./Pagination";
import Detail from "pages/Detail";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="gallery">
        <div className="container">
          <Search />
          <ImageGrid />
          <Pagination />
        </div>
      </div>
      <Routes>
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Index;
