import react from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <>
      <nav class="navbar navbar-expand">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            LAUNDRY
          </a>
          <ul id="navigation" class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Career
              </a>
            </li>
            <li id="active" class="nav-item active">
              <a
                class="nav-link "
                aria-current="page"
                aria-selected="true"
                href="#"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Header1;
