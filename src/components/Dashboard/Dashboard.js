import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";


export function Dashboard(){
    let dispatch = useDispatch();
  let user =  useSelector((store)=>{
     return store.UsersSection.userLoggedin
    });
   
    // let userCreatedproducts = useSelector((store)=>store.productsSection.products).filter((item)=>{
    //     if(item.owner == user.id && user.id){
    //         return true;
    //     }
    // });

    return(
        <>
           <table border='2px' id="newCreatedProducts">
    <thead>
            <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            </tr>
        </thead>
        <tbody>
{/* {
    userCreatedproducts?.map((item)=>{
       return(
       <tr>
       <td><img src={item.src} alt="" style={{width:"100px" }} /></td>
       <td>{item.category}</td>
       <td>{item.price}</td>
       <td><button onClick={()=>{
        // dispatch({
        //     type:"DELETE_PRODUCT",
        //     payload: item
        // })
       }}>Delete</button></td>
       </tr>
       )
    })
   } */}
            
        </tbody>
    </table>
        </>
    )
}