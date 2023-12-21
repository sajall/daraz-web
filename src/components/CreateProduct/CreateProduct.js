import { useForm } from "react-hook-form"
import { useDispatch , useSelector} from "react-redux";
import { toast } from 'react-toastify';
import './CreateProduct.css'
import { v4 } from "uuid";

export function CreateProduct(){
    let dispatch = useDispatch();
let {register , handleSubmit } = useForm();

let user =  useSelector((store)=>store.UsersSection.userLoggedin);

const createProdct = (data)=>{
console.log(data);
data.src = URL.createObjectURL(data.file[0]);
data.id = v4();
data.owner = user.id;
dispatch({
    type:"ADD-NEW-PRODUCT",
    payload:data
})
toast.success("product added successfully!");
}

return (
    <div id="myForm">
    <form action="" onSubmit={handleSubmit(createProdct)}  >
        <input {...register('category')} type="text" placeholder="enter category"/>
        <input {...register('price')} type="text" placeholder="enter price" />
        {/* <input {...register('id')} type="number"  placeholder="enter id"/> */}
        <input {...register('file')} type="file" placeholder="" />
    <button className="btn btn-primary">Create</button>
    </form>
    </div>
)
}