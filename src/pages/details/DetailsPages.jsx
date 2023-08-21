import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import img from "../../assets/images/b5.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { readMore } from "../../api";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [Status, setStatus] = useState([]);

  const handleSubmit = async (event) => {
    try {
      const result = await readMore(id);
      console.log(result);
      if (result.success) {
        
      }
      setStatus(result.data);
    } catch (error) {
      console.error("Error registering user:", error);
      setStatus("Error registering user.");
    }
  };

  useEffect(() => {
    handleSubmit();
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <>
      <section className="singlePage">
        <div className="container">
          {/* {Status.map((item) => ( */}
            <div key={Status.id}>
              <div className="left">
                <img style={{ height: "70vh" }} src={Status.blogImage} alt="" />
              </div>
              <div className="right">            
                <h1>{Status.blogTitle}</h1>
                <Link to="/">Participate in the poll</Link>
                {/* <p>{blogs.desc}</p> */}
                <p>{Status.blogDescription}
                </p>
                <p>Author: Sunil</p>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Comment</label>
                  <textarea
                    // style={{width:"30%"}}
                    // class="form-control"
                    className="comment-poll form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="button" style={{}} class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          {/* ))} */}
        </div>
      </section>
    </>
  );
};
