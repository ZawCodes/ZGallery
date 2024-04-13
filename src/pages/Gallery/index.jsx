import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useGlobalStates } from "globalStates";
import { AnimatePresence } from "framer-motion";
import Search from "./Search";
import ImageGrid from "./ImageGrid";
import Pagination from "./Pagination";
import Detail from "pages/Detail";
import images from "utils/images.js";
import "./index.scss";

const Index = () => {
  const { sort } = useGlobalStates();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const imagesPerPage = 30;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const [currentImages, setCurrentImages] = useState(
    images.slice(indexOfFirstImage, indexOfLastImage)
  );

  useEffect(() => {
    const slicedImages = images.slice(indexOfFirstImage, indexOfLastImage);
    setCurrentImages(slicedImages);
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (sort.state === "asc") {
      setCurrentImages(
        [...currentImages].sort((a, b) =>
          a.uploaded_date.localeCompare(b.uploaded_date)
        )
      );
    } else if (sort.state === "desc") {
      setCurrentImages(
        [...currentImages].sort((a, b) =>
          b.uploaded_date.localeCompare(a.uploaded_date)
        )
      );
    }
  }, [sort.state]);

  useEffect(() => {
    if (searchKey === "") {
      setCurrentImages(images.slice(indexOfFirstImage, indexOfLastImage));
    } else {
      setCurrentImages(
        images
          .filter((image) =>
            image.tags.toLowerCase().includes(searchKey.toLowerCase())
          )
          .slice(indexOfFirstImage, indexOfLastImage)
      );
    }
  }, [searchKey]);

  return (
    <>
      <div className="gallery">
        <div className="container">
          <Search searchKey={searchKey} setSearchKey={setSearchKey} />
          <ImageGrid images={currentImages} />
          <Pagination
            currentPage={currentPage}
            imagesPerPage={imagesPerPage}
            totalImages={searchKey ? currentImages.length : images.length}
            paginate={paginate}
          />
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Routes>
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Index;
