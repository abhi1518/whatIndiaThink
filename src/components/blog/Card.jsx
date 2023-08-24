// import React from "react";
// import "./blog.css";
// import { blog } from "../../assets/data/data";
// import {
//   AiOutlineTags,
//   AiOutlineClockCircle,
//   AiOutlineComment,
//   AiOutlineShareAlt,
// } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { blogGet, blogFilter } from "../../api";

// export const Card = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userData, setUserData] = useState([]);
//   const [selectedLabels, setSelectedLabels] = useState([]);
//   const [fliterData, setFilterData] = useState([]);
//   const [filterStatus, setFilterStatus] = useState(false);

//   const openPopup = () => {
//     setIsOpen(true);
//   };

//   const handleSubmit = async (event) => {
//     try {
//       const result = await blogGet();
//       console.log(result.data);
//       setUserData(result.data);
//     } catch (error) {
//       console.error("Error registering user:", error);
//     }
//   };

//   const handleFilter = async (event) => {
//     closePopup();
//     event.preventDefault(); // Prevent the default form submission behavior
//     console.log(selectedLabels);
//     try {
//       const formData = new FormData();
//       formData.append("categories", selectedLabels);

//       const result = await blogFilter(formData);
//       setFilterData(result.data);
//       console.log(result);
//       if (result.success) {
//         setFilterStatus(true);
//       } else {
//       }
//     } catch (error) {
//       console.error("Error registering user:", error);
//     }
//   };

//   useEffect(() => {
//     handleSubmit();
//   }, []);

//   const closePopup = () => {
//     setIsOpen(false);
//   };
//   const [checkboxes, setCheckboxes] = useState([
//     { id: 1, label: "Political", checked: false },
//     { id: 2, label: "Business", checked: false },
//     { id: 3, label: "Sports", checked: false },
//     { id: 4, label: "Environment & Health", checked: false },
//     { id: 5, label: "Entertainment", checked: false },
//     { id: 6, label: "Generic", checked: false },
//   ]);

  

//   const handleCheckboxChange = (id) => {
//     const updatedCheckboxes = checkboxes.map((checkbox) =>
//       checkbox.id === id
//         ? { ...checkbox, checked: !checkbox.checked }
//         : checkbox
//     );
//     setCheckboxes(updatedCheckboxes);
//   };

//   // const handleCheckboxChange = (id) => {
//   //   const updatedCheckboxes = checkboxes.map((checkbox) =>
//   //     checkbox.id === id
//   //       ? { ...checkbox, checked: !checkbox.checked }
//   //       : checkbox
//   //   );
//   //   setCheckboxes(updatedCheckboxes);

//   //   // Update selected labels state
//   //   const newSelectedLabels = updatedCheckboxes
//   //     .filter(checkbox => checkbox.checked)
//   //     .map(checkbox => checkbox.label);
//   //   setSelectedLabels(newSelectedLabels);
//   //   console.log(selectedLabels);
//   // };

//   return (
//     <>
//       <div className="card-display">
//         <button onClick={openPopup} className="floating-button">
//           +
//         </button>
//         {isOpen && (
//           <div className="popup">
//             <div className="popup-content">
//               <h2>Categorey</h2>
//               {/* <p>This is the content of the popup.</p> */}
//               {checkboxes.map((checkbox) => (
//                 <div>
//                   <label key={checkbox.id}>
//                     <input
//                       className=""
//                       style={{ marginRight: "20px", marginLeft: "10px" }}
//                       type="checkbox"
//                       checked={checkbox.checked}
//                       // onChange={getSelectedLabels}
//                       onChange={() => handleCheckboxChange(checkbox.id)}
//                     />
//                     {checkbox.label}
//                   </label>
//                   <br />
//                 </div>
//               ))}
//               <button
//                 onClick={handleFilter}
//                 style={{ marginLeft: "10px" }}
//                 type="button"
//                 class="btn btn-primary"
//                 // onChange={handleFilter}
//               >
//                 Filtter
//               </button>
//               {/* <button onClick={closePopup}>Close</button> */}
//             </div>
//           </div>
//         )}
//         <section className="blog">
//           <div className="container grid3">
//             {filterStatus ? <>
//               {fliterData.map((item) => (
//                 <div className="box boxItems" key={item.id}>
//                   <div className="img">
//                     <img
//                       src={`https://api.whatindiathinks.com/public/assets/profile/${item.blogImage}`}
//                       alt=""
//                     />
//                   </div>
//                   <div className="details">
//                     <div className="tag">
//                       <AiOutlineTags className="icon" />
//                       <Link to={`/details/${item.blogid}`} className="hastag">
//                         {/* <button>Read More</button> */}
//                         {item.hastag}
//                       </Link>
//                       <a href="/"></a>
//                     </div>
//                     <Link to={`/details/${item.blogid}`} className="link">
//                       <h3>{item.blogTitle}</h3>
//                     </Link>
//                     {item.blogDescription != null ? (
//                       <>
//                         <p>{item.blogDescription.slice(0, 180)}...</p>
//                       </>
//                     ) : (
//                       <></>
//                     )}

//                     <div className="date">
//                       <Link to={`/details/${item.blogid}`} className="link">
//                         <button>Read More</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </> :  <>
//               {userData.map((item) => (
//                 <div className="box boxItems" key={item.id}>
//                   <div className="img">
//                     <img src={item.blogImage} alt="" />
//                   </div>
//                   <div className="details">
//                     <div className="tag">
//                       <AiOutlineTags className="icon" />
//                       <Link to={`/details/${item.blogid}`} className="hastag">
//                         {/* <button>Read More</button> */}
//                         {item.hastag}
//                       </Link>
//                       <a href="/"></a>
//                     </div>
//                     <Link to={`/details/${item.blogid}`} className="link">
//                       <h3>{item.blogTitle}</h3>
//                     </Link>
//                     {item.blogDescription != null ? (
//                       <>
//                         <p>{item.blogDescription.slice(0, 180)}...</p>
//                       </>
//                     ) : (
//                       <></>
//                     )}

//                     <div className="date">
//                       <Link to={`/details/${item.blogid}`} className="link">
//                         <button>Read More</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </> }
            
           
//           </div>
//         </section>
//         <section className="caterogies">
//           <div>
//             <div className="box boxItems mt5">
//               <h1>Categorey</h1>
//               {/* <div style={{display:"flex"}}> */}
//               {checkboxes.map((checkbox) => (
//                 <div>
//                   <label key={checkbox.id}>
//                     <input
//                       className=""
//                       style={{ marginRight: "20px", marginLeft: "10px" }}
//                       type="checkbox"
//                       checked={checkbox.checked}
//                       onChange={() => handleCheckboxChange(checkbox.id)}
//                     />
//                     {checkbox.label}
//                   </label>
//                   <br />
//                 </div>
//               ))}
//               <button
//                 onClick={handleFilter}
//                 style={{ marginLeft: "10px" }}
//                 type="button"
//                 class="btn btn-primary"
//                 // onChange={console.log(getSelectedLabels())}
//               >
//                 Filtter
//               </button>
//               {/* </div> */}
//               {/* <div className='img'>
//                 <img src={item.cover} alt='' />
//               </div>
//               <div className='details'>
//                 <div className='tag'>
//                   <AiOutlineTags className='icon' />
//                   <a href='/'>#{item.category}</a>
//                 </div>
//                 <Link to={`/details/${item.id}`} className='link'>
//                   <h3>{item.title}</h3>
//                 </Link>
//                 <p>{item.desc.slice(0, 180)}...</p>
//                 <div className='date'>
                 
//                   <button>Read More</button>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

import React from "react";
import "./blog.css";
// import "./polles.css"
// import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
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

  // const handleCheckboxChange = (id) => {
  //   const updatedCheckboxes = checkboxes.map((checkbox) =>
  //     checkbox.id === id
  //       ? { ...checkbox, checked: !checkbox.checked }
  //       : checkbox
  //   );
  //   setCheckboxes(updatedCheckboxes);

  //   // Update selected labels state
  //   const newSelectedLabels = updatedCheckboxes
  //     .filter(checkbox => checkbox.checked)
  //     .map(checkbox => checkbox.label);
  //   setSelectedLabels(newSelectedLabels);
  //   console.log(selectedLabels);
  // };

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
              {/* <p>This is the content of the popup.</p> */}
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
                // onChange={handleFilter}
              >
                Filtter
              </button>
              {/* <button onClick={closePopup}>Close</button> */}
            </div>
          </div>
        )}
        <section className="blog">
          <div className="container grid3">
           

            {filterStatus ? <>
              {fliterData.map((item) => (
                <div className="box boxItems" key={item.id}>
                  <div className="img">
                    <img
                      src={`https://api.whatindiathinks.com/public/assets/profile/${item.blogImage}`}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="tag">
                      <AiOutlineTags className="icon" />
                      <Link to={`/details/${item.blogid}`} className="hastag">
                        {/* <button>Read More</button> */}
                        {item.hastag}
                      </Link>
                      <a href="/"></a>
                    </div>
                    <Link to={`/details/${item.blogid}`} className="link">
                      <h3>{item.blogTitle}</h3>
                    </Link>
                    {item.blogDescription != null ? (
                      <>
                        <p>{item.blogDescription.slice(0, 180)}...</p>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="date">
                      <Link to={`/details/${item.blogid}`} className="link">
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </> :  <>
              {userData.map((item) => (
                <div className="box boxItems" key={item.id}>
                  <div className="img">
                    <img src={item.blogImage} alt="" />
                  </div>
                  <div className="details">
                    <div className="tag">
                      <AiOutlineTags className="icon" />
                      <Link to={`/details/${item.blogid}`} className="hastag">
                        {/* <button>Read More</button> */}
                        {item.hastag}
                      </Link>
                      <a href="/"></a>
                    </div>
                    <Link to={`/details/${item.blogid}`} className="link">
                      <h3>{item.blogTitle}</h3>
                    </Link>
                    {item.blogDescription != null ? (
                      <>
                        <p>{item.blogDescription.slice(0, 180)}...</p>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="date">
                      <Link to={`/details/${item.blogid}`} className="link">
                        <button>Read More</button>
                      </Link>
                    </div>
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
                // onChange={console.log(getSelectedLabels())}
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
