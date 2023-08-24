import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import back from "../../assets/images/logo.png"

export const Header = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  function closeNavbar() {
    
    const navbar = document.getElementById('myNavbar');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem("isLogin");
    if (storedValue) {
      setValue(storedValue);
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
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
  function handleNavLinkClick() {
    if (window.innerWidth <= 992) { // Adjust this breakpoint if needed
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler.classList.contains('show')) {
        navbarToggler.click(); // Simulate clicking the navbar toggler to close the menu
      }
    }
  }
  return (
    <>
      <header className="header">
        {" "}
        <nav id="myNavbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          {/* <Link class="navbar-brand" to="/">
            What India Think
          </Link> */}
          <div>
          <div className='logo'>
          <Link to="/" onClick={closeNavbar}>
            <img src={back} alt='logo' width='70px' />
            </Link>
           
          </div>
          {/* <Link class="" to="/">
            <img  src={back} alt='' className="logo"  />
            </Link> */}
          </div> 
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
                <Link class="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about" data-toggle="collapse" data-target=".navbar-collapse.show">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blogs" data-toggle="collapse" data-target=".navbar-collapse.show">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/polls" data-toggle="collapse" data-target=".navbar-collapse.show">
                  Polls
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="text-center" style={{ margin: "auto" }}>
              {value ? 
                <>
                {/* <p>Hi {name}</p> */}
                  <button
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                    class="btn btn-outline-success my-2 my-sm-0"
                    onClick={navigateToLogOut}
                    onChange={closeNavbar}
                  >
                    Logout
                  </button>
                </>
               : 
                <>
                  {" "}
                  <button
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                    class="btn btn-outline-success my-2 mx-2 my-sm-0"
                    onClick={navigateToOtherPages}
                    onChange={closeNavbar}
                  >
                    Register
                  </button>
                  <button
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                    class="btn btn-outline-success my-2 my-sm-0"
                    onClick={navigateToOtherPage}
                    onChange={closeNavbar}
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
