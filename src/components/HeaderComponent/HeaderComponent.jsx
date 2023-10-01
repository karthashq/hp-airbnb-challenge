import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./HeaderComponent.css";
import ProfileComponent from "../ProfileComponent/ProfileComponent";

export default function HeaderComponent() {
  return (
    <header className="container-fluid">
      <nav className="navbar">
        <div className="navbar-brand h1">
          <FontAwesomeIcon icon={faHouse} /> Acme Homes
        </div>

        {/* Create a pop over component from scratch and use it to display the profile menu */}

        <ProfileComponent/>

      </nav>
    </header>
  );
}
