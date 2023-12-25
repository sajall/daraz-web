import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardTable from "./Dshboardtable";


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

// user created products 
 let [loading , setLoading] = useState(false);
 let [products , setProducts] = useState([]);
 const [addPopup, setAddPopup] = useState({
  isOpen: false,
  id: "",
});

const getProducts = async () => {
    setLoading(true)
    const response = await axios.get(`/products`);
    if (response.status == 200) {
        console.log(response.data , ' this is dashborad');
      setLoading(false);
      setProducts(response?.data);
    } else {
      toast.error("error fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);







    return(
        <>
           {/* <table border='2px' id="newCreatedProducts">
    <thead>
            <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            </tr>
        </thead>
        <tbody>
{ 
loading ? <h1>Loading...</h1> :
    products.filter((product)=>product?.userId == user?._id)?.map((item , index)=>{
       return(
       <tr>
       <td><img src={item.src} alt="" style={{width:"100px" }} /></td>
       <td>{item.category}</td>
       <td>{item.price}</td>
       <td><button onClick={async()=>{
         
         try{
           const response = await axios.delete(`/delete-product?id=${item._id}`);
           if(response.status == 200){
             //  products.splice(index , 1);
             //  setProducts([...products]);
             toast.success('product deleted successfully');
            }
          }catch(err){
            console.log(err , "some unexpected error occured" );
          }
          
          // dispatch({
          //     type:"DELETE_PRODUCT",
          //     payload: item
          // })

       }}>Delete</button></td>
       </tr>
       )
    })
   }
            
        </tbody>
    </table> */}
    <DashboardTable products={products}  setProducts={setProducts}  loading={loading} setLoading={setLoading}
    addPopup={addPopup} setAddPopup={setAddPopup} >

    </DashboardTable>
        </>
    )
}