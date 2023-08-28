import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { optionGet } from "../../api";
import { registerVote } from "../../api";
import { useHistory } from "react-router-dom";

export const DetailsPolles = () => {
  const history = useHistory();
  const { id } = useParams();

  const [Status, setStatus] = useState("");
  const [Question, setQuestion] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [inCorrect, setIncorreact] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [option, setOption] = useState("");
  console.log(id);

  const handleSubmit = async (event) => {
    try {
      const result = await optionGet(id);
      console.log(result.question.blogQuestion);
      setBlogId(result.blogid);
      console.log("hbhjbhj" + blogId);
      if (result.success) {
      }
      setStatus(result.data);
      setQuestion(result.question.blogQuestion);
    } catch (error) {
      console.error("Error registering user:", error);
      setStatus("Error registering user.");
    }
  };

  const handleVote = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append("id", selectedOption);
      formData.append("blogid", id);
      formData.append("userid", localStorage.getItem("userId"));
      formData.append("comment", comment);
      formData.append("name", localStorage.getItem("name"));
      formData.append("option", option);
      formData.append("question", Question);

      const result = await registerVote(formData);
      console.log(result);
      
      if (result.status) {
        if (value) {
          history.push("/polls");
        } else {
          history.push("/login");
        }
      } else {
        if (value) {
          setIncorreact(true);
          // history.push("/polles");
        } else {
          history.push("/login");
        }
        
      }
    } catch (error) {
      history.push("/login");
      console.error("Error registering user:", error);
      // setStatus('Error registering user.');
    }
  };
  const [blogs, setBlogs] = useState(null);

  const handleOptionChange = event => {
    const selectedId = parseInt(event.target.value, 10); // Convert value to integer
    const selectedBlogOption = Status.find(option => option.id === selectedId).blogoption;
    setSelectedOption(selectedId);
    setOption(selectedBlogOption); // Update the selected option in state
    console.log(`Selected ID: ${selectedId}, Selected Option: ${selectedBlogOption}`);
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
      {Status ? (
        <section className="singlePage">
          <div className="container">
            <div>
              <h1>{Question}</h1>
              <Link to={`/details/${blogId}`}>
              Read more on it
              </Link>
              {Status.map((item) => (
                <>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <label style={{ fontFamily: "Arial, sans-serif", fontSize: "25px", fontWeight:"600", color:"black" }}>
                        <input
                          style={{ marginRight: "30px", marginLeft: "10px" }}
                          type="radio"
                          className=""
                          value={item.id}
                          checked={selectedOption == item.id}
                          onChange={handleOptionChange}
                        />
                        {item.blogoption}
                      </label>
                    </div>
                    <div className="ml-5">
                      <p>What others think {Math.round(item.voting)} %</p>
                    </div>
                  </div>
                  <br />
                </>
              ))}

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Comment</label>
                <textarea
                  className="comment-poll form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              {inCorrect == true ? <><p style={{color:"red"}}>You already have voted</p></> : <></>}
              <button
                type="button"
                style={{ marginRight: "30px", marginLeft: "15px" }}
                class="btn btn-primary"
                onClick={handleVote}
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
