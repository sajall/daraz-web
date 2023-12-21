
import './Navbar.css';
import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";  
import { useDispatch, useSelector } from 'react-redux';
import { Link , NavLink } from 'react-router-dom';  

export function Navbar(){

let dispatch = useDispatch();
let userLoggedin = useSelector((store)=>store.UsersSection.userLoggedin);
return (
  <>
  

         <section className="border mb-4 d-flex align-items-center flex-column bg-#cd3f00" >
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg py-5 navbar-light bg-body-tertiary d-flex flex-column p-5 " id='navbar'>
    {/* Container wrapper */}
    <div id='listDiv'>
    <ul id='list'>
      <li>
        <Link to='/wishlist' style={{textDecoration : 'none' , color: 'white'}}>
        WhishList
        </Link>
        </li>
      <li>Draz Affiliate Program</li>
      <li> <Link  style={{textDecoration : 'none' , color: 'white'}} to='/show-users'>Users</Link></li>
      <li>Help & support</li>
      <li>Daraz logistics partner</li>
    </ul>
    <div id='saveMore'>
      <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png"  style={{width:'25px'}} alt="" />
      <p>save more on app</p>
    </div>
    </div>
    <div className="container-fluid   ">
      {/* Navbar brand */}
     <img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" style={{width:'130px'}} alt="" />
       {/* Search form */}
       <div className="input-group ps-5">
          <div
            id="navbar-search-autocomplete bg-danger"
            className="form-outline"
            data-mdb-input-init=""
          >
            <input onChange={(evt)=>{
                dispatch({
                  type: "SEARCH",
                  payload:evt.target.value
                })
            }}
             type="search" id="form1" className="form-control bg-white inputsearch" style={{width:'700px'}} placeholder='Search in Daraz' />
          </div>
        </div> 
        <div id='searchIconParent'>

          <img src="./search.png" alt="" style={{width:"50px"}} id='searchIcon'/>
        </div>
   
      <div className="collapse navbar-collapse   " id="navbarSupportedContent" >
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='icons'>
          <li className="nav-item hover">
            <Link className="nav-link active pages" aria-current="page" to='/'>
              Home
            </Link>
          </li>
          {/* dashboard */}
         { userLoggedin ? <li className="nav-item hover">
            <Link className="nav-link active pages" aria-current="page" to='/Dashboard'>
              Dashboard
            </Link>
          </li> : null}

          {userLoggedin ?null :
            <li className="nav-item d-flex hover">
              <img src="./user.png" style={{width:'20px', height:'20px'}} alt="" />
            <Link className="nav-link pages"  to='/Login'>
              Login

            </Link>
          </li>
          }



          <li className="nav-item">|</li>

         {userLoggedin ? null : <li className="nav-item hover" >
            <Link className="nav-link pages" to='/Signup'>
              Signup
            </Link>
          </li> }

         {userLoggedin ? <li className="nav-item hover" >
            <Link className="nav-link pages" to='/Create-product'>
             create product
            </Link>
          </li> :null}

          {userLoggedin ?
            <li className="nav-item d-flex hover">
              {/* <img src="./user.png" style={{width:'20px', height:'20px'}} alt="" /> */}
            <Link className="nav-link pages" onClick={()=>{
              dispatch({
                type:"USER_LOGGED_OUT"
              })
            }}  to='/'>
              Logout

            </Link>
          </li> : null
          }
{/* ========================================language dropdown ============================================ */}
          {/* <li className="nav-item dropdown hover">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              // id="navbarDropdown"
              role="button"
              data-mdb-dropdown-init=""
              aria-expanded="false"
            >
              
              <img src="https://icon-library.com/images/globe-icon-white/globe-icon-white-25.jpg" style={{width:'20px'}} alt="" />
            <span className='pages' id='language '>EN</span>
            </a> */}
            {/* Dropdown menu */}
            {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul> */}
          {/* </li> */}
{/* ========================================language dropdown ============================================ */}

       <NavLink className="nav-item hover" to='/add-to-cart'>
        <img src="./cart.png"  style={{width:'50px', height:'50px'}} alt="" />
       </NavLink>
        </ul>
        {/* Left links */}
      
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</section>




        {/* </div> */}
     
        </>
    )
}