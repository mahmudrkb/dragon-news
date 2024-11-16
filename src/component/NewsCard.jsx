import { Link } from "react-router-dom";



const NewsCard = ({ singleNews}) => {

  const {
   
    author: { img: authorImg, name: authorName },
    published_date: publishedDate,
    title,
    image_url,
    details,
    rating: { number: ratingNumber, badge },
    total_view: totalView,
    _id,
  } = singleNews;

  return (
    <div className="card bg-white shadow-xl p-4 rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={authorImg}
          alt={authorName}
          className="w-12 h-12 rounded-full border-2 border-gray-300"
        />
        <div>
          <p className="font-semibold">{authorName}</p>
          <p className="text-sm text-gray-500">{publishedDate}</p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">{title}</h2>

      <img
        src={image_url}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <p className="text-gray-700 text-sm mb-4">{details.slice(0, 150)}...
 
      </p>
      <Link to={`/news/${_id}`} className="text-red-500" >Read More...</Link>
     

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl">&#9733;</span>
          <span className="font-bold">{ratingNumber}</span>
          <span className="text-sm text-gray-500">{badge}</span>
        </div>
        <div className="text-sm text-gray-500">
          Views: {totalView}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


