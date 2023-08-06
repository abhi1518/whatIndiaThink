import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import img from "../../assets/images/b5.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { optionGet } from '../../api';

export const DetailsPolles = () => {
  const { id } = useParams();

  const [Status, setStatus] = useState('');

  console.log(id);

  const handleSubmit = async (event) => {
    try {
      const result = await optionGet(id);
      console.log(result);
      if(result.success){
        // localStorage.setItem('isLogin', true);
        // window.location.href = '/';
      }
      setStatus(result.data);
    } catch (error) {
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };
  const [blogs, setBlogs] = useState(null);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
      {Status ? (
        <section className="singlePage">
          <div className="container">
            {/* <div className='left'>
              <img src={blogs.cover} alt='' />
            </div> */}
            <div className="right">
              {/* <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div> */}
              <h1>Betadine Feminine Wash</h1>
              {Status.map((item) => (
                <>
              <label>
                <input style={{marginRight:"30px",marginLeft:"15px"}}
                  type="radio"
                  className=""
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                {item.blogoption}
              </label>
              <br />
              </>
              ))}
              {/* <label>
                <input
                  className=""
                  style={{marginRight:"30px",marginLeft:"15px"}}
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                Option 2
              </label>
              <br />
              <label>
                <input
                  className=""
                  style={{marginRight:"30px",marginLeft:"15px"}}
                  type="radio"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                />
                Option 3
              </label>
              <br />
              <label>
                <input
                  className=""
                  style={{marginRight:"30px",marginLeft:"15px"}}
                  type="radio"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                />
                Option 4
              </label>
              <br /> */}
              
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
              <button type="button" style={{marginRight:"30px",marginLeft:"15px"}} class="btn btn-primary">
                Submit
              </button>
              {/* <p>{blogs.desc}</p> */}
              {/* <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p> */}
              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
