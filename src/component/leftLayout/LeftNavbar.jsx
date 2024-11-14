import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="font-semibold">All Category ({category.length})</h1>
      <div className="flex flex-col gap-3 mt-5 ">
        {
            category.map(category=>
                 <NavLink to={`category/${category.category_id}`} className="btn " key={category.category_id}>{category.category_name} </NavLink >)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;
