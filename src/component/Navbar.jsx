// import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
        <img src={userIcon} alt="" />
        {/* <FaUserCircle size={40}/> */}

        <button className="btn text-white bg-black px-7 py-2">Login</button>

      </div>
    </div>
  );
};

export default Navbar;
