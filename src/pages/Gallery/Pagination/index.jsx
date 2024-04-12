import React from "react";
import "./index.scss";

const Pagination = ({ imagesPerPage, totalImages, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-container">
        <button onClick={() => paginate(Math.max(1, currentPage - 1))}>
          prev
        </button>

        <div className="pages">
          {currentPage} of {totalPages}
        </div>

        <button onClick={() => paginate(Math.min(totalPages, currentPage + 1))}>
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
