import { useDispatch, useSelector } from "react-redux";
import store from "../../Store/Store";
import "./Cart.css";
import { useEffect, useState } from "react";
// import Modal from 'react-modal';
// import ReactDOM from 'react-dom';

export function Cart() {
  let data = useSelector((store) => {
    return store.productsSection.orders;
  });
  let total = 0;

//  dispatch 
let dispatch = useDispatch();
function orderNow(){
  alert('order done')
}
  return (
    <>

      <div id="maincart">
        {/* <div> */}

        {/* this is cart */}
        {data?.map((product) => {
          total += +product.price;
          return (
            <div id="cartProduct">
              <img
                src={product.src}
                alt=""
                style={{ width: "80px", height: "100px" }}
              />
              <div id="priceCategory">
              <strong>{product.category}</strong>
              <p style={{color: 'oarnge'}}>RS.{product.price}</p>
              </div>
            <button id="CancelOrder" onClick={()=>{
                      dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:product._id
                      })
            }}>cancel</button>
            </div>
          );
        })}
      {/* </div> */}
<div>total :{total} </div>
<button className="btn btn-primary" onClick={orderNow}>Order Now</button>
</div>
    </>
  );
}
