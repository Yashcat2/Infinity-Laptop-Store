import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'


import logo from '../Assests/Infinity-Store.png'
import cart_icon from '../Assests/cart_icon3.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/nav_dropdown.png'


 const Navbar = () => {

    const[menue,setMenue] =useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menueRef = useRef();

    const dropdown_toggle =(e)=>{
      menueRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

    const handleMouseEnter = () => {
      setMenue("allProducts");
     };

    const handleMouseLeave = () => {
      setMenue(""); // Set the menu back to the default value when mouse leaves
    };



  return (
    <div className='navbar'>
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt=""  />
            </a>
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
        <ul ref ={menueRef} className="nav-menue">
            <li onClick={()=>{setMenue("shop")}}><Link to='/'>Shop</Link>{menue==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("aboutus")}}><Link to='/aboutus'>About</Link>{menue==="aboutus"?<hr/>:<></>}</li>
            

            
            {/* ////////////////////////////////////// */}
            <li class="nav-item dropdown">
              
              <a  href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Product
                  {/* {menue === "allProducts" ? <hr /> : null} */}
              </a>
              
              <ul class="dropdown-menu">
               <li onClick={()=>{setMenue("acer")}}><Link to='/acer'>Acer</Link>{menue==="acer"}</li>
                <li onClick={()=>{setMenue("asus")}}><Link to='/asus'>Asus</Link>{menue==="asus"}</li>
                <li onClick={()=>{setMenue("dell")}}><Link to='/dell'>Dell</Link>{menue==="dell"}</li>
                <li onClick={()=>{setMenue("hp")}}><Link to='/hp'>HP</Link>{menue==="hp"}</li>
                <li onClick={()=>{setMenue("msi")}}><Link to='/msi'>MSI</Link>{menue==="msi"}</li>
                <li onClick={()=>{setMenue("lenovo")}}><Link to='/lenovo'>       Lenovo</Link>{menue==="lenovo"}</li>


              </ul>
          </li>
            {/* ///////////////////////////// */}
            {/* <li onClick={()=>{setMenue("services")}}><Link to='/services'>Services</Link>{menue==="services"?<hr/>:<></>}</li> */}
            <li onClick={()=>{setMenue("contactus")}}><Link to='/contactus'>Contact Us</Link>{menue==="contactus"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to="/login"><button>Login</button></Link> }
            
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
export default Navbar
