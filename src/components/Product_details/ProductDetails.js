// import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

import { useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useSelector,  useDispatch} from "react-redux";
import store from "../../Store/Store";
import { Cart } from "../Cart/Cart";


export function ProductDetails() {
  let [quantity, setQuantity] = useState(1);

  // using dispatch for sending object of desired product to the store

  let dispatch = useDispatch();
  // useSelector 
  let data = useSelector((store) => {
    return store;
  });

  // params for dynamic routes
  const params = useParams();
  console.log(params, "param");
  const productId = params.id;

  // finding the component having same id as param

  console.log(productId, "productId");

  const desiredProduct = data.productsSection.products.find((prod) => prod.id == productId);

  console.log(desiredProduct, "desiredProduct");

  return (

    <div id="main">
      <div id="left">
        <img
          src={desiredProduct?.src}
          className="w-100"
          alt="Blue Jeans Jacket"
          height="400px"
          width="50px "
        />
      </div>

      <div className="d-flex" id="right" >
        <div>
          <h4> 
          Nihil sit architecto ipsam sunt veritatis nesciunt excepturi vel,aliquam quibusdam</h4>
        <strong>{desiredProduct?.category}</strong>
          <img src="https://cdn-icons-png.flaticon.com/512/8367/8367735.png" style={{width:"20px" }} alt="" />
          <img  src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" style={{width:"20px"}} alt="" />
          <hr />
        </div>
      <div id="inside_right " >
        
      <p >
      </p>

        <h3 style={{color: '#f85606'}}>RS. {desiredProduct?.price}</h3>

        <div className="form-outline " id="quantity">
   
          <p className="form-label" htmlFor="form1" style={{color: '#757575'}}>
            Quantity
          </p>
          <button
            className="btn btn-primary quantitybtn"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            >
            -
          </button>
          <div id="input1">
          <input id="form1" name="quantity" value={quantity} type="text"  />
          </div>
          <button
            className="btn btn-primary quantitybtn "
            onClick={() => {
              if (quantity < 5) {
                setQuantity(quantity + 1);
              }
            }}
            >
            +
          </button>
        </div>
            </div>


            <div id="neechywalubtn">
              <button id='btn1'>Buy Now</button>
              <button id="btn2" onClick={()=>{
                
                dispatch({
                  type:"ADD_TO_CART",
                  payload:desiredProduct.id
                })

              }}>Add to Cart</button>
            </div>
      </div>
{/* <Cart/> */}
    </div>
  );
}
