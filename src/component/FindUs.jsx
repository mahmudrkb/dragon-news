import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-10 space-y-3">
      <h1 className="font-semibold ">Find Us On</h1>
      <div className=" join flex join-vertical  justify-start *:bg-base-100">
        <button className=" btn join-item justify-start  border-black"> <FaFacebook color="blue" />


          Facebook
        </button>
        <button className=" btn join-item justify-start  border-black"> <FaTwitter color="white" className="bg-blue-400 rounded" />
          Twitter
        </button>
        <button className=" btn join-item justify-start  border-black"> <FaInstagram color="[#D82D7E]" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
