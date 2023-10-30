import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navber = () => {
  const {logOut, user} = useContext(AuthContext)

    const handleLogOut = ()=>{
      logOut()
      .then(() => {
          alert('log out success')
      })
      .catch(error => {
        console.log(error.message);
      })
    }

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    {/* <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li> */}

    {
     user ?
      <>
      <li><button onClick={handleLogOut}>LogOut</button></li>
      <li><NavLink to='/userBookings'>My booking</NavLink></li>
      </>
      : 
      <li><NavLink to='/Login'>Login</NavLink></li>
    }

    </>

    return ( 
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src={logo} className="w-16" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="px-4 py-2 text-[#FF3811] rounded text-xl font-medium normal-case hover:bg-[#FF3811] hover:text-white border border-[#FF3811] ">Appointment</button>
  </div>
</div>
     );
}
 
export default Navber;