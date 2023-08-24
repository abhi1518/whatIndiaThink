import React from "react";
import { Category } from "../../components/category/Category";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const navigateToOtherPage = () => {
    history.push("/blogs");
  };
  const navigateToOtherPages = () => {
    history.push("/polls");
  };
  return (
    <>
      <Category />

      <div
        className="text-center mt-3 mb-3 pb-4 pt-4"
        style={{ display: "flex", margin: "auto" }}
      >
        <button
          type="button"
          onClick={navigateToOtherPage}
          style={{ justifyContent: "center", margin: "auto", width: "50%" }}
          class="btn btn-primary btn-lg btn-block text-center"
        >
          Blogs
        </button>
        <br />
        <button
          type="button"
          onClick={navigateToOtherPages}
          style={{ justifyContent: "center", margin: "auto", width: "50%", background:"lightgreen" }}
          class="btn btn-lg btn-block"
        >
          Polls
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mb-2">What India Thinks !</h1>
            <p>
              At WhatIndiaThinks, we believe that every individual's voice
              deserves to be heard, and that's precisely what we stand for. Our
              platform is dedicated to providing a space where you can stay
              informed about current important issues and actively participate
              in shaping public opinion through unbiased opinion polls and
              insightful blogs.
            </p>
            <p className="mb-5">
              In today's world, it's crucial to have a reliable source of
              information and a place to express your thoughts freely. We
              understand that mainstream media often struggles to remain
              impartial, leaving people searching for a trustworthy platform to
              share their views on government actions and other critical
              matters.{" "}
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};
