import React from 'react';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./pagination.css";

const Pagination = ({
  page,
  endIndex,
  pageCount,
  totalRepos,
  startIndex,
  pluralCheck,
  handlePageChange,
}) => {
  return (
    <div className="paginate">
      <span className="paginate__total">
        {startIndex}-{endIndex} of {totalRepos} {pluralCheck}
      </span>
      <ReactPaginate
        breakLabel="..."
        previousLabel={<ArrowBackIosIcon fontSize='7px' />}
        nextLabel={<ArrowForwardIosIcon fontSize='7px' />}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        forcePage={page - 1}
        pageCount={pageCount}
        containerClassName="paginate__container"
        activeClassName="paginate__active"
        pageLinkClassName="paginate__link"
        previousClassName="paginate__arrow"
        nextClassName="paginate__arrow"
        onPageChange={handlePageChange}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;