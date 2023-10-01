
import PropTypes from 'prop-types';


import {useCallback} from 'react';
import {getFormattedNumber} from "../../utils/utils";

import "./PaginationComponent.css";

/*
* A pagination component that can be used dynamically 
*/
export default function PaginationComponent({
    onPageChange,
    totalCount,
    currentPage,
    className,
    offSet
  }){

  const onNext = useCallback(() => {
    onPageChange(currentPage + 1);
  },[onPageChange]);

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1);
  },[onPageChange]);

//   const getTotalPages = useMemo(()=>{
//    return Math.ceil(totalCount/offSet);
//   },[totalCount,currentPage]);

  const currentMaxRecord = currentPage * offSet;
  return (
    <>
    <div className={`pt-3 border-0 border-top  d-flex justify-content-between mt-2 ${className}`}>
        <div className="fw-lighter">
            Showing {(currentMaxRecord)-offSet+1}-{(currentMaxRecord)} of {getFormattedNumber(totalCount)} 
        </div>
        <div className="">
            <button onClick={onPrevious} disabled={currentPage == 1}>Previous</button> 
            <button onClick={onNext} disabled={(currentMaxRecord) == totalCount}>Next</button>
        </div>
    </div>
    </>
  );
};


PaginationComponent.propTypes = {
  onPageChange : PropTypes.func,  // function to call when page is changed
  totalCount : PropTypes.number, // total number of items in the list
  currentPage: PropTypes.number, // Current Page number
  className: PropTypes.string, // addition classes to be set 
  offSet: PropTypes.number // number of records to show in one page
}
