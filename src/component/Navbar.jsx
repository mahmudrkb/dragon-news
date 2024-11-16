// import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import userIcon from"../assets/user.png"
const Navbar = () => {
  return (
    <div className="grid grid-cols-3 items-center mt-10">
      <div className=""></div>
      <div className="">
        <ul className="flex items-center justify-center  gap-10">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/career'>Career</NavLink></li>
        </ul>
      </div>

      <div className=" flex items-center justify-end gap-3 ">
       <Link to="/auth/register"> <img src={userIcon} alt="" /></Link>

        {/* <FaUserCircle size={40}/> */}

        <Link to="/auth/login" className="btn text-white bg-black px-7 py-2">Login</Link >

      </div>
    </div>
  );
};

export default Navbar;
