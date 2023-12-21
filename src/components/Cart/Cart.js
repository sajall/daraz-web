import { useDispatch, useSelector } from "react-redux";
import store from "../../Store/Store";
import "./Cart.css";
import { useEffect, useState } from "react";
// import Modal from 'react-modal';
// import ReactDOM from 'react-dom';

export function Cart() {
  let data = useSelector((store) => {
    return store.productsSection;
  });
  // let [ total , setTotal ] = useState(0);
  let total = 0;
// useEffect(()=>{

// },[])
//  dispatch 
let dispatch = useDispatch();
function orderNow(){
  alert('order done')
}
  return (
    <>

      <div id="maincart">
        <div>

        this is cart
        {data.products.
        filter((product)=>{
          if(product.addTocart){
            return true;
          }
        })
        .map((product) => {
          // setTotal(total+product.price);
          total += product.price;
          return (
            <div id="cartProduct">
              <img
                src={product.src}
                alt=""
                style={{ width: "80px", height: "100px" }}
              />
              {/* price and category */}
              <div id="priceCategory">
              <strong>{product.category}</strong>
              <p style={{color: 'oarnge'}}>RS.{product.price}</p>
              </div>
            <button id="CancelOrder" onClick={()=>{
                      dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:product.id
                      })
            }}>cancel</button>
            </div>
          );
        })}
      </div>
<div>total :{total} </div>
<button className="btn btn-primary" onClick={orderNow}>Order Now</button>
</div>
    </>
  );
}

{/* 
<div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div> */}