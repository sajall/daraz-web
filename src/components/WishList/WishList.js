

import { useSelector,  useDispatch} from "react-redux";
import { Cards } from "../Navbar/Cards/Cards";
import { useEffect, useState } from "react";
import { getproductsApi } from "../../api/products/productsApis";
import { toast } from "react-toastify";

export function WishList(){
    let data = useSelector((store) => {
        return store;
    });
    let dispatch = useDispatch()
    ;
const [likedproducts , setLikedproducts] = useState([]);

    useEffect(async()=>{
      const response = await getproductsApi();
      if (response.status == 200) { 
        let filterLikedProducts = response.data.filter((product)=>product.liked)
        setLikedproducts(filterLikedProducts);
      } else {
        toast.error("error fetching products");
      }
    },[])
    return(
        <>
    <div id="cards">
      
      {
     
     
     likedproducts.map((product, index) => {
          return (
          
              <Cards key={index} product={product}>
                {/* <button onClick={()=>{
                     dispatch({
                        type : "TOGGLE_LIKE_BTN",
                        id:product.id
                     })
                }}
                >remove</button> */}
              </Cards>
          );
        })}
    </div>
        </>
    )
}