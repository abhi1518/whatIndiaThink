import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  const [value, setValue] = useState("");

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem("isLogin");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);
  const navigateToOtherPages = () => {
    // Use the history object to navigate to the other page
    // history.push('/other');
    window.location.href = "/register";
  };
  const navigateToLogOut = () => {
    // Use the history object to navigate to the other page
    // history.push('/other');
    localStorage.clear();
    window.location.href = "/login";
  };
  const navigateToOtherPage = () => {
    // Use the history object to navigate to the other page
    // history.push('/other');
    window.location.href = "/login";
  };
  return (
    <>
      <header className="header">
        {" "}
        {/* <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='100px' />
           
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flexCenter'>
            <User />
          </div>
        </div> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a class="navbar-brand" href="/">
            What India Think
          </a>
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
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/polles">
                  Poll
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="text-center" style={{ margin: "auto" }}>
              {value == true ? <><button
                class="btn btn-outline-success my-2 my-sm-0"
                onClick={navigateToLogOut}
              >
                Logout
              </button></>: <> <button
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
              </button></> }
             
            </div>
          </div>
         
        </nav>
        <hr />
        
      </header>
    </>
  );
};
