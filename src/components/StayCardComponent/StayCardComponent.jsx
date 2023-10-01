import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus, faHeartCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./StayCardComponent.css";
import CardComponent from "../CardComponent/CardComponent";


function StayCardComponent({ stayInfo = {}}) {
  return (
    <CardComponent>
      <div className="stay-card container-fluid">
        <div className="row info-box">
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">{stayInfo.location}</span>

            <div className="float-right">
              {stayInfo.isUsuallBooked ? <div className="blue-box d-inline-block p-1 m-1">Usually Booked</div>  : null} 
              {stayInfo.isLowRate ? <div className="purple-box d-inline-block p-1 m-1">Low Rate</div>  : null} 
              {/* find  icon later as per design provided */}
              <FontAwesomeIcon icon={stayInfo.isLiked ? faHeartCirclePlus : faHeartCircleMinus} />
            </div>
          </div>
          <div className="mb-4">
            <div className="fw-lighter">{stayInfo.specs}</div>
            {/* generate the date range randomly */}
            <div className="fw-lighter">{stayInfo.availability}</div>
          </div>
        </div>
        <hr className="m-0 mb-3" />
        <div className="card-footer fw-lighter row">
          <div className="col-8">Total</div>
          <div className="col-4 text-end text-truncate">${stayInfo.price}</div>
        </div>
      </div>
    </CardComponent>
  );
}

export default StayCardComponent;

StayCardComponent.propTypes = {
  stayInfo: PropTypes.object // all the info abt the stay
}
