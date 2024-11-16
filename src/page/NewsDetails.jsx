import React from "react";
import Header from "../component/Header";
import RightNavbar from "../component/leftLayout/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div className="container p-5 my-1.5  mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5 mt-10">
        <section className="col-span-9">
          <h1 className="font-semibold">Dragon News</h1>
          <div className="card bg-base-100 mt-5 border-2 p-4  shadow-xl">
            <figure>
              <img
                src={news?.image_url}
                alt="photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn text-white bg-red-600"><FaArrowLeftLong /> All news in this category</Link >
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
