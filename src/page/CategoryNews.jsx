import { useLoaderData } from "react-router-dom";
import NewsCard from "../component/NewsCard";


const CategoryNews = () => {
    const {data:news} =useLoaderData()
    console.log(news)
    return (
        <div className="mt-3">
            <h1 className="text-gray-400">{news.length} News Found On This category</h1>

            <div>
               {
                news.map((singleNews,index)=> <NewsCard key={index} singleNews={singleNews}></NewsCard>

                )
               }
            </div>
          
        </div>
    );
};

export default CategoryNews;