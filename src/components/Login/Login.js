import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { v4 } from "uuid";
import { toast } from "react-toastify";

// axios.defaults.baseURL = "https://dark-plum-brown-bear-vest.cyclic.app/";

// axios.defaults.baseURL = "http://localhost:6070/";

export function Login({ user, setUser }) {

// const baseUrl = process.env.REACT_APP_BASE_URL

  let move = useNavigate();
  let dispatch = useDispatch();
  //  let users =useSelector((store)=>store.UsersSection.users);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const saveData = async (data) => {
    try {
      const response = await axios.put(`/find-user`, data);

      // console.log(response.data.myToken , "responseresponseresponse");

      if (response.status == 200) {
        
        move("/Dashboard");
        // localStorage.setItem("someToken" ,response.data.myToken)

        dispatch({
          type: "USER_LOGGEDIN",
          payload: response.data,
        });
        toast.success("login successful");

        console.log("User LoggedIn successfully:", response.data);
      } else {
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.log("An error occurred during login:", error.message);
    }

    //  let res = await axios.put('/find-user' , data).then((resp)=>{
    //   console.log(resp , 'this is loggeduser found');

    //   if(resp.status == 200){
    //     localStorage.setItem("someToken" ,resp.data.myToken)
    //     move('/Dashboard');

    //     dispatch({
    //       type: "USER_LOGGEDIN",
    //       payload:resp.data.data
    //     })
    //     toast.success("login successful");

    //   }
    // })
  };

  return (
    <>
      <form className="vh-100 " onSubmit={handleSubmit(saveData)}>
        <div className="container  h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
              <div
                className="card shadow-2-strong bg-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5" style={{ color: "white" }}>
                    Login Now
                  </h3>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label"
                      htmlFor="typeEmailX-2"
                      style={{ color: "white" }}
                    >
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                    />
                    {errors.email ? (
                      <div className="errors">
                        please enter valid email address
                      </div>
                    ) : null}
                  </div>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label"
                      htmlFor="typePasswordX-2"
                      style={{ color: "white" }}
                    >
                      Password
                    </label>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                    {errors.password ? (
                      <div className="errors">
                        please enter correct password
                      </div>
                    ) : null}
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
