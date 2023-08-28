
import React from "react";
import "./blog.css";
import "./polles.css"
import {AiOutlineTags} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogGet, blogFilter } from "../../api";

export const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [fliterData, setFilterData] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const handleSubmit = async (event) => {
    try {
      const result = await blogGet();
      console.log(result.data);
      setUserData(result.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleFilter = async (event) => {
    closePopup();
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(selectedLabels);
    try {
      const formData = new FormData();
      formData.append("categories", selectedLabels);

      const result = await blogFilter(formData);
      setFilterData(result.data);
      console.log(result);
      if (result.success) {
        setFilterStatus(true);
      } else {
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Political", checked: false },
    { id: 2, label: "Business", checked: false },
    { id: 3, label: "Sports", checked: false },
    { id: 4, label: "Environment & Health", checked: false },
    { id: 5, label: "Entertainment", checked: false },
    { id: 6, label: "Generic", checked: false },
  ]);

  useEffect(() => {
    const newSelectedLabels = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.label);
    setSelectedLabels(newSelectedLabels);
  }, [checkboxes]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <>
      <div className="card-display">
        <button onClick={openPopup} className="floating-button">
          +
        </button>
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Categorey</h2>
              {checkboxes.map((checkbox) => (
                <div>
                  <label key={checkbox.id}>
                    <input
                      className=""
                      style={{ marginRight: "20px", marginLeft: "10px" }}
                      type="checkbox"
                      checked={checkbox.checked}
                      // onChange={getSelectedLabels}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    {checkbox.label}
                  </label>
                  <br />
                </div>
              ))}
              <button
                onClick={handleFilter}
                style={{ marginLeft: "10px" }}
                type="button"
                class="btn btn-primary"
              >
                Filtter
              </button>
            </div>
          </div>
        )}
        <section className="blog">
          <div className="container grid3">
            {filterStatus ? <>
              {fliterData.map((item) => (
                <div className="box boxItems" key={item.id}>
                  <div className="details">
                    <div className="tag">
                      <AiOutlineTags className="icon" />
                      <Link to={`/detail/${item.blogid}`} className="hastag">
                        {item.hastag}
                      </Link>
                    </div>
                    <Link to={`/detail/${item.blogid}`} className="link">
                      <h3>{item.blogTitle}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </> :  <>
              {userData.map((item) => (
                <div className="box boxItems" key={item.id}>
                  
                  <div className="details">
                    <div className="tag">
                      <AiOutlineTags className="icon" />
                      <Link to={`/detail/${item.blogid}`} className="hastag">
                        {item.hastag}
                      </Link>
                      <a href="/"></a>
                    </div>
                    <Link to={`/detail/${item.blogid}`} className="link">
                      <h3>{item.blogTitle}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </> }           
          </div>
        </section>
        <section className="caterogies">
          <div>
            <div className="box boxItems mt5">
              <h1>Categorey</h1>              
              {checkboxes.map((checkbox) => (
                <div>
                  <label key={checkbox.id}>
                    <input
                      className=""
                      style={{ marginRight: "20px", marginLeft: "10px" }}
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    {checkbox.label}
                  </label>
                  <br />
                </div>
              ))}
              <button
                onClick={handleFilter}
                style={{ marginLeft: "10px" }}
                type="button"
                class="btn btn-primary"
              >
                Filtter
              </button>             
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

