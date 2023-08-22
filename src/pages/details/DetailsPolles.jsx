import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { optionGet } from "../../api";
import { registerVote } from "../../api";
import { useHistory } from 'react-router-dom';

export const DetailsPolles = () => {
  const history = useHistory();
  const { id } = useParams();

  const [Status, setStatus] = useState("");
  const [Question, setQuestion] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); 
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  console.log(id);

  const handleSubmit = async (event) => {
    try {
      const result = await optionGet(id);
      console.log(result.question.blogQuestion);
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
      formData.append('id', selectedOption);
      formData.append('blogid', id);
      formData.append('userid', localStorage.getItem('userId'));
      formData.append('comment', comment);

      const result = await registerVote(formData);
      console.log(result);
      if(result.status){
        // if(value == true){
          history.push('/');
        // } else {
        //   history.push('/login');
        // }
      } else{
        history.push('/login');
      }
    } catch (error) {
      history.push('/login');
      console.error('Error registering user:', error);
      // setStatus('Error registering user.');
    }
  };
  const [blogs, setBlogs] = useState(null);

  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
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
            {/* <div className='left'>
              <img src={blogs.cover} alt='' />
            </div> */}
            <div>
              <h1>{Question}</h1>
              {Status.map((item) => (
                <>
                  <div style={{ display: "flex" , flexDirection:"column" }}>
                    <div>
                      <label>
                        <input
                          style={{ marginRight: "30px", marginLeft: "15px" }}
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
                      <p>no. of votes {Math.round(item.voting)} %</p>
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
                  value={comment} onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <button
                type="button"
                style={{ marginRight: "30px", marginLeft: "15px" }}
                class="btn btn-primary"
                onClick={handleVote}
              >
                Submit
              </button>

              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
