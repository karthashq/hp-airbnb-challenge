
import {useCallback} from 'react';
import {getFormattedNumber} from "../../utils/utils";

import "./PagninationComponent.css";
export default function Pagination({
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

