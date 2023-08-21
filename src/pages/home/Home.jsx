import React from "react";
import { Category } from "../../components/category/Category";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const navigateToOtherPage = () => {
    history.push("/blogs");
  };
  const navigateToOtherPages = () => {
    history.push("/polles");
  };
  return (
    <>
      <Category />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5 mb-5">What India Thinks?</h1>
            <p>
              At WhatIndiaThinks, we believe that every individual's voice
              deserves to be heard, and that's precisely what we stand for. Our
              platform is dedicated to providing a space where you can stay
              informed about current important issues and actively participate
              in shaping public opinion through unbiased opinion polls and
              insightful blogs.
            </p>
            <p>
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
      <div
        className="text-center mt-5 mb-5 pb-5 pt-5"
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
          style={{ justifyContent: "center", margin: "auto", width: "50%" }}
          class="btn btn-secondary btn-lg btn-block"
        >
          Poll
        </button>
      </div>
    </>
  );
};
