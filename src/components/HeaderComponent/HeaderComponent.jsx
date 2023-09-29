import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./HeaderComponent.css";

export default function HeaderComponent() {
  return (
    <header className="container-fluid">
      <nav className="navbar">
        <div className="navbar-brand h1">
          <FontAwesomeIcon icon={faHouse} /> Acme Homes
        </div>

        {/* Create a pop over component from scratch and use it to display the profile menu */}
        <div className="circle">
          JS
        </div>
        {/* <div class="dropdown">
          <button
            class="circle btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            JS
          </button>

          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
            <li>
              <a class="text-muted text-reset" href="#">
                Action
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
}
