import "./Cards.css";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import store from "../../../Store/Store";
import { Button } from "@mui/material";
import { likeProductApi } from "../../../api/products/productsApis";

// import { render } from "react-dom";

export function Cards({ product, children }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  let dispatch = useDispatch();
  return (
    <div id="card-parent">
      <NavLink
        style={{ textDecoration: "none", color: "white" }}
        to={`product-details/${product._id}`}
      >
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
            style={{ width: "190px", height: "190px" }}
            alt="..."
          />

          {/* <img src="/fb.JPG" alt=""    id="cardimg "   className="card-img-top" 
              style={{ width: "180px", height: "190px" }}/> */}
          <div id="neechyWali">
            <p id="about">Portable Bamboo Charcoal Clothes</p>
            <b>{product.category}</b>
            <h6 style={{ color: "#f85606" }}>RS.{product.price}</h6>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

            {/* <button id="detailsbtn" className="btn btn-primary">
              show details
          </button> */}
          </div>
        </div>
      </NavLink>

      {/* like btn */}
      <span
        className={product.abc ? "like-btn liked " : "like-btn"}
        onClick={async () => {
          try {
            //
            const response = await likeProductApi(product._id);
            if(response.status == 200){
              
            }
            // const response = await axios.get(`/like-product?id=${product._id}`);
            console.log(response.data, "this is reponse like btn wala");
          } catch (err) {
            console.log(err, "some unexpected error occured");
          }
        }}
      >
        <Button>
          {product.liked == true ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorder />}
        </Button>
      </span>
      {/* like btn */}
    </div>
  );
}
