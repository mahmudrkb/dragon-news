import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="">
      {" "}
     
     <div className="text-center space-y-2"> 
        <img className="w-[200px] mx-auto" src={logo} alt="" />
     <p className="text-gray-400">Journalism Without Fear or Favour</p>
     <p>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>

     </div>


    </div>
  );
};

export default Header;
