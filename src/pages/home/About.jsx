import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";

export const About = () => {
  
  const navigateToOtherPage = () => {
    // Use the history object to navigate to the other page
    // history.push('/other');
    window.location.href = '/blogs';
  };
  const navigateToOtherPages = () => {
    // Use the history object to navigate to the other page
    // history.push('/other');
    window.location.href = '/polles';
  };
  return (
    <>
      {/*  <Slider />*/}
      {/* <Category /> */}

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5 mb-5">About Us</h1>
            <p>At WhatIndiaThinks, we believe that every individual's voice deserves to be heard, and that's precisely what we stand for. Our platform is dedicated to providing a space where you can stay informed about current important issues and actively participate in shaping public opinion through unbiased opinion polls and insightful blogs.</p>
            <p>In today's world, it's crucial to have a reliable source of information and a place to express your thoughts freely. We understand that mainstream media often struggles to remain impartial, leaving people searching for a trustworthy platform to share their views on government actions and other critical matters.   </p> 
            <p>Unbiased and Informative Articles: Our team of seasoned writers and researchers work diligently to bring you unbiased articles on a wide range of topics that matter most to society. Stay up-to-date with accurate and reliable information to form well-informed opinions.</p>
            <p>Your Opinion Matters: We firmly believe that each individual's opinion carries value. Through our user-friendly opinion polls, you can make your voice count on various issues, and together, we can understand the collective pulse of the nation.</p>
            <p>Community-Driven Approach: We are a community-driven platform that thrives on the active participation of our users. By fostering a sense of belonging, we create an inclusive environment where everyone feels welcome to express themselves freely.</p>
            <p>Privacy and Security: Your privacy is of utmost importance to us. Rest assured that your personal information remains secure, and your opinions are anonymous unless you choose otherwise.</p>
            <p>Join us at WhatIndiaThinks and be part of a movement that aims to bridge the gap between the government's actions and the voice of the people. Together, let's build a platform that reflects the true sentiments and concerns of the common citizens.</p>
            <p>Our vision is to create a world where informed opinions lead to positive changes. Together, let's shape the future.</p>
            <p>Speak up, share your insights, and let your voice be heard. Welcome to WhatIndiaThinks</p>
          </div>
        </div>

      </div>
      {/* <div className="text-center mt-5 mb-5 pb-5 pt-5" style={{display:"flex",margin:"auto"}}>

      <button type="button" onClick={navigateToOtherPage} style={{justifyContent:"center",margin:"auto",width:"50%"}} class="btn btn-primary btn-lg btn-block text-center">
        Blogs
      </button><br/>
      <button type="button" onClick={navigateToOtherPages} style={{justifyContent:"center",margin:"auto", width:"50%"}} class="btn btn-secondary btn-lg btn-block">
        Polles
      </button>
      </div> */}
      {/* <Card /> */}
    </>
  );
};
