import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { readMore } from "../../api";
import { registerComment } from "../../api";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const DetailsPages = () => {
  const history = useHistory();
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [Status, setStatus] = useState([]);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [inCorrect, setIncorreact] = useState(false);
  const [alreadyComment, setAlreadyComment] = useState(false);

  const handleSubmit = async (event) => {
    try {
      const result = await readMore(id);
      console.log(result);
      if (result.status) {
      } else {
        // setAlreadyComment(true);
      }
      setStatus(result.data);
    } catch (error) {
      console.error("Error registering user:", error);
      setStatus("Error registering user.");
    }
  };

  const handleComment = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("userid", localStorage.getItem("userId"));
      formData.append("blogid", id);
      formData.append("comment", comment);
      formData.append("name", localStorage.getItem("name"));

      const result = await registerComment(formData);
      if (result.status) {
        console.log(value);
        if (value) {          
            history.push("/blogs");        
        } else {          
          history.push("/login");
        }
      } else {
        if(value){
          // if (comment == null) {
            setAlreadyComment(true);
          // } else if (comment != null) {
          //   setIncorreact(true);            
          // } else {
          //   history.push("/login");
          // }
        } else {
          history.push("/login");
        }        
      }
    } catch (error) {
      if (value) {
        setIncorreact(true);
      } else {
        history.push("/login");
      }
      console.error("Error registering user:", error);
    }
  };

  useEffect(() => {
    handleSubmit();
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
    const storedValue = localStorage.getItem("isLogin");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  return (
    <>
      <section className="singlePage">
        <div className="container">
          <div key={Status.id}>
            <div className="left">
              <img className="blog-image" src={Status.blogImage} alt="" />
            </div>
            <div className="right">
              <h1>{Status.blogTitle}</h1>
              <Link to={`/detail/${Status.blogid}`}>
                Participate in the poll
              </Link>
              <div dangerouslySetInnerHTML={{ __html: Status.blogDescription }}></div> 
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Comment</label>
                <textarea
                  className="comment-poll form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={comment}
                  required
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              {alreadyComment == true ? <><p style={{color:"red"}}>You have already commented on this blog</p></> : <></>}
              {inCorrect == true ? <><p style={{color:"red"}}>Please write comment</p></> : <></>}
              <button
                onClick={handleComment}
                type="button"
                style={{}}
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
