import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center mx-auto p-3 bg-gray-200  w-11/12 gap-3 mt-3">
            <p className="bg-[#D72050] py-1 px-3 text-white ">Latest</p>
           <Marquee pauseOnHover speed={60} className="space-x-7">
            <Link to="/news">*1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cum
            </Link>

            <Link to="/news">*2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cum.
            </Link>

            <Link to="/news">*3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cum.
            </Link>

           </Marquee>

        </div>
    );
};

export default LatestNews;