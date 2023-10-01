import { useRef, useState } from "react";

import "./ProfileComponent.css";

import CardComponent from "../CardComponent/CardComponent";

export default function ProfileComponent() {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  return (
    <div className="profile-pop-over">
      <div className="swatch" onClick={() => toggle((prev) => !prev)}>
        <div className="circle">JS</div>
      </div>
      {isOpen && (
        <div className="popover" ref={popover}>
          <CardComponent>
            <div className="fs-3">
              Jane Smith
            </div>
            <div className="fs-4 fw-lighter pb-3">
              jane.smith@me.com
            </div>
            <div className="d-flex justify-content-between">
              <div className="fs-6 text-decoration-underline" style={{cursor:"pointer"}}> View profile</div>
              <button onClick={() => toggle((prev) => !prev)} className="btn-sign-out">Sign Out</button>
            </div>
          </CardComponent>
        </div>
      )}
    </div>
  );
}
