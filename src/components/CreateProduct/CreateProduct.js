import { useForm } from "react-hook-form"
import { useDispatch , useSelector} from "react-redux";
import { toast } from 'react-toastify';
import './CreateProduct.css'
import { v4 } from "uuid";
import axios from 'axios';
import { addProductApi } from "../../api/products/productsApis";

export function CreateProduct(){
    let dispatch = useDispatch();
let {register , handleSubmit } = useForm();

let user =  useSelector((store)=>store.UsersSection.userLoggedin);
// const baseUrl = process.env.REACT_APP_BASE_URL




const createProdct = async (data)=>{
    data.userId = user._id;
    // let myData = new FormData();

    // myData.append('category' , data.category);
    // myData.append('price' , data.price);
    // myData.append('file' , data.file[0]);
    // myData.append('userId' ,data.userId);
    // console.log(myData , 'this is formdata');
    // try{
    //     const resp = await axios.post(`/create-product` ,myData);
    //     if(resp.status == 200){
    //         toast.success("product added successfully!");
    //     }
    // }catch(err){
    //     console.log(err , 'this is error');
    // }



    // data.src = URL.createObjectURL(data.file[0]);
    const formData = {
        userId: data.userId,
        category:data.category,
        price:data.price,
        src: data.src
    }
    try{
        
        // const resp = await axios.post(`/create-product` ,formData);
        const resp = await addProductApi(formData)
        if(resp.status == 200){
            toast.success("product added successfully!");
        }
    }catch(err){
        console.log(err , 'this is error');
    }
}

return (
    <div id="myForm">
    <form action="" onSubmit={handleSubmit(createProdct)}  >
        <input {...register('category')} type="text" placeholder="enter category"/>
        <input {...register('price')} type="text" placeholder="enter price" />
        <input {...register('src')} type="text" placeholder="enter image path" />
        {/* <input {...register('file')} type="file" placeholder="" /> */}
    <button className="btn btn-primary">Create</button>
    </form>
    </div>
)
}