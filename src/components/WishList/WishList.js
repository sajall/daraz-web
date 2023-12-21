

import { useSelector,  useDispatch} from "react-redux";
import { Cards } from "../Navbar/Cards/Cards";

export function WishList(){
    let data = useSelector((store) => {
        return store;
    });
    let dispatch = useDispatch();
    return(
        <>
    <div id="cards">
      
      {
      data.productsSection.products && data.productsSection.products
       .filter((item) => {
          if (item.abc ) {
            return true;
          }
        })
        .map((product, index) => {
          return (
          
              <Cards product={product}>
                <button onClick={()=>{
                     dispatch({
                        type : "TOGGLE_LIKE_BTN",
                        id:product.id
                     })
                }}
                >remove</button>
              </Cards>
          );
        })}
    </div>
        </>
    )
}