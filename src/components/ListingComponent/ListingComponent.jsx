import { useEffect, useState, useRef, useCallback } from "react";
import StayCardComponent from "../StayCardComponent/StayCardComponent";
import PaginationComponent from "../PagninationComponent/PagninationComponent";
import { getRandomBool, getRandomDateRange, getFormattedNumber } from "../../utils/utils";

const defaultListingAPI =
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?";

export default function ListingComponent({
  listingAPI,
  limit = 6,
  showPagination = true,
}) {
  if (!listingAPI) listingAPI = defaultListingAPI;

  const [staysList, setStaysList] = useState([]);

  let totalCount = useRef(0);
  let currentPage = useRef(1);

  const onPageChange = async (pageNumber) => {
    console.log(pageNumber);
    currentPage.current = pageNumber;
    await fetchandSetList(limit * pageNumber);
  }

  // calls the ListingAPI provided and sets the list initially
  const fetchandSetList = useCallback(async (offSet = 0) => {
    let response = await fetch(
      defaultListingAPI + `limit=${limit}&offset=${offSet}`
    );
    response = await response.json();
    const list = response.results.map((listItem) => {
      const isUsuallBooked = getRandomBool();
      return {
        id: listItem.id,
        location: listItem.smart_location,
        specs: `${listItem.bedrooms} bedrooms, ${listItem.bathrooms} bathrooms`,
        price: getFormattedNumber(listItem.price * 4.25),
        isUsuallBooked,
        isLowRate: !isUsuallBooked && getRandomBool(),
        isLiked: getRandomBool(),
        availability: getRandomDateRange(),
      };
    });
    setStaysList(list);
    totalCount.current = response.total_count;
  },[]);

  // sets the initial List
  useEffect(() => {
    fetchandSetList();
  }, []);

  const getTable = () => {
    const cols = staysList.map((stay) => {
      // console.log(stay);
      return (
        <div key={stay.id} className="col-12 col-md-6 col-lg-4 p-2">
          <StayCardComponent stayInfo={stay}></StayCardComponent>
        </div>
      );
    });
    return cols;
  };

  return (
      <div className="p-3">
      <div className="row">{getTable()}</div>
      {showPagination ? (
        <PaginationComponent
          onPageChange={onPageChange}
          totalCount={totalCount.current}
          currentPage={currentPage.current}
          offSet={limit}
        ></PaginationComponent>
      ) : null}
      </div>
  );
}
