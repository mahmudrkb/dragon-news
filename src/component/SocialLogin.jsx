import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
             <h1 className="font-semibold ">Login With</h1>
             <div className="space-y-3 mt-4">
                <button className="btn text-blue-500 px-7 py-3 border-2 border-blue-500 "> <FaGoogle />Login With Google</button>
                <button className="btn px-7 py-3 border-2 border-black"><FaGithub /> Login With Github</button>
             </div>

        </div>
    );
};

export default SocialLogin;