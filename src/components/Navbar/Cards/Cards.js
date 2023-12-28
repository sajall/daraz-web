import "./Cards.css";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
// import { render } from "react-dom";

export function Cards({ product , children }) {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

let dispatch = useDispatch();
  return (
    <>
      <div
        className="card"
        id="cardBody"
        style={{ width: "12rem", height: "22rem" }}
      >
        {children}
        <img
          src={product.src}
          className="card-img-top"
          id="cardimg"
          style={{ width: "180px", height: "190px" }}
          alt="..."
        />

        {/* <img src="/fb.JPG" alt=""    id="cardimg"  className="card-img-top"     style={{ width: "180px", height: "190px" }}/> */}
        <div id="neechyWali">
{/* like btn */}
          <span className={ product.abc ? "like-btn liked " :'like-btn' } onClick={async()=>{
            try{
              const response = await axios.get(`/like-product?id=${product._id}`);
              console.log(response.data , 'this is reponse like btn wala');
               if(response.status == 200){
                 dispatch({
                  type : "TOGGLE_LIKE_BTN",
                  id:response.data
                 })
               toast.success('liked successfully!');
               }
            }catch(err){
                console.log(err , 'some unexpected error occured');
            }


          }} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon"
              viewBox="0 0 1024 1024"
            >
              <path d="M831 449L512 839 194 450a155 155 0 11274-132h88a155 155 0 11275 131zM706 124c-81 0-152 42-194 104a233 233 0 10-379 270l329 402h100l330-403a233 233 0 00-186-372z" />
            </svg>
          </span>
{/* like btn */}

          <p id="about">Portable Bamboo Charcoal Clothes</p>
          <b>{product.category}</b>
          <h6 style={{ color: "#f85606" }}>RS.{product.price}</h6>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />

          <button id="detailsbtn" className="btn btn-primary">
            <NavLink
              style={{ textDecoration: "none" ,  color: 'white' }}
              to={`product-details/${product._id}`}
            >
              show details
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
