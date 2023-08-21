import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem("isLogin");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);
  const navigateToOtherPages = () => {
    history.push("/register");
  };
  const navigateToLogOut = () => {
    localStorage.clear();
    setValue(false);
    history.push("/login");
  };
  const navigateToOtherPage = () => {
    history.push("/login");
  };
  return (
    <>
      <header className="header">
        {" "}
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link class="navbar-brand" to="/">
            What India Think
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto text-center">
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/polles">
                  Poll
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="text-center" style={{ margin: "auto" }}>
              {value ? 
                <>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    onClick={navigateToLogOut}
                  >
                    Logout
                  </button>
                </>
               : 
                <>
                  {" "}
                  <button
                    class="btn btn-outline-success my-2 mx-2 my-sm-0"
                    onClick={navigateToOtherPages}
                  >
                    Register
                  </button>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    onClick={navigateToOtherPage}
                  >
                    Login
                  </button>
                </>
              }
            </div>
          </div>
        </nav>
        <hr />
      </header>
    </>
  );
};
