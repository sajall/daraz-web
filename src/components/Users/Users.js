import { useDispatch, useSelector } from "react-redux";
import store from "../../Store/Store";
import "./Users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UsersTable from "./Userstable";
import AddEditUser from "./AddEditUser";
import { Button } from "@mui/material";
import { getUsersApi } from "../../api/users/usersApis";
// import { Button } from "bootstrap";

// axios.defaults.baseURL = "https://dark-plum-brown-bear-vest.cyclic.app/";
// axios.defaults.baseURL = "http://localhost:6070/";

export function Users() {

  const baseUrl = process.env.REACT_APP_BASE_URL

  const [addPopup, setAddPopup] = useState({
    isOpen: false,
    id: "",
  });


  let [users, setUsers] = useState([]);


  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    // const response = await axios.get("https://uptight-newt-jewelry.cyclic.app/user-lao");
    // const response = await axios.get(`${baseUrl}/user-lao`);
    
    const response = await getUsersApi();
    if (response.status == 200) {
      setLoading(false);
      setUsers(response?.data.data);
    } else {
      toast.error("error fetching Users");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const callFunc = () => {
    getUsers();
  };


  // useDispatch
  let dispatch = useDispatch();
  let userCreatedproducts = useSelector(
    (store) => store.productsSection.products
  );
  return (
    <>
      <Button variant="contained"
        onClick={() => {
          setAddPopup({
            isOpen: true,
          });
        }}
      >
        Add User
      </Button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <UsersTable
          users={users}
          addPopup={addPopup}
          setAddPopup={setAddPopup}
        />
      )}
      <h1 id="user">Users</h1>
      <hr />

      <AddEditUser
        addPopup={addPopup}
        setAddPopup={setAddPopup}
        callFunc={callFunc}
      />

      <table border="2px" id="usertable">
        {/* <thead>
          <tr>
            <th>user email</th>
            <th>user password</th>
            <th>Delete User</th>
            <th>Edit</th>
            <th>User's products</th>
          </tr>
        </thead> */}
        {/* {users &&
          users.map((item, index) => {
            // console.log(item.id , 'jhuejfhbkebkhj');
            return (
              <tr>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    onClick={() => {
                      axios
                        .delete("/delete-user?id=" + item._id)
                        .then((resp) => {
                          if (resp.status === 200) {
                            users.splice(index, 1);
                            setUsers([...users]);
                          }
                        });
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                </td>

                <td>
                  {" "}
                  <button>
                    {" "}
                    <Link to={"/signup/" + item._id}>edit</Link>{" "}
                  </button>{" "}
                </td>

                <td>
                <ol>
                    {userCreatedproducts.filter((product)=>{
    if(product.owner == item.id){
        return true;
    }
}).map((product)=>{
                        return <li>{product.category}</li>
                    })}
                </ol>
            </td>
              </tr>
            );
          })} */}
      </table>
    </>
  );
}

{
  /* //  dispatch({ */
}
//     type:"DELETE_USER",
//     payload:item.id
{
  /* // }); */
}
// get of delete mn  dossry parameter mn data send nh kr skty is k liy query params use hoty hyn
// post or put mn data ja skta hy
// query param chota mota data send krny k liy use hota hy
