// import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

import { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useSelector,  useDispatch} from "react-redux";
import store from "../../Store/Store";
import { Cart } from "../Cart/Cart";
import axios from "axios";
import { toast } from "react-toastify";


export function ProductDetails() {

  // const baseUrl = process.env.REACT_APP_BASE_URL;


  let [quantity, setQuantity] = useState(1);


  let dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
console.log(productId , 'this is product id');

  let [product , setproduct] = useState({userId:{}});


const findProduct = async()=>{
try{
  await axios.put(`/find-product/${productId}`).then((resp)=>{
    console.log(resp.data ,' this is PRODUCT THAT I FOUND');
  
    if (resp.status === 200) {
      setproduct(resp.data);
    } else{
    toast.error("error fetching product");
      }
  })

}catch(err){
console.log(err , 'some error occured');
}
 
  }
  useEffect(()=>{
    findProduct();
  } , []);


  return (
     
    <div id="main">
      <div id="left">
        <img
          src={product?.src}
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
        <strong>{product?.category}</strong>
          <img src="https://cdn-icons-png.flaticon.com/512/8367/8367735.png" style={{width:"20px" }} alt="" />
          <img  src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" style={{width:"20px"}} alt="" />
          <hr />
        </div>
      <div id="inside_right " >
        
      <p >
      </p>

        <h3 style={{color: '#f85606'}}>RS. {product?.price}</h3>
        <h3 style={{color: '#f85606'}}>user ki email {product.userId?.email}</h3>

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
                  payload:product 
                })

              }}>Add to Cart</button>
            </div>
      </div>
{/* <Cart/> */}
    </div>
  );
}
