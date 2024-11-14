import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import LeftNavbar from "../component/leftLayout/LeftNavbar";
import Main from "../component/leftLayout/Main";
import RightNavbar from "../component/leftLayout/RightNavbar";
import Navbar from "../component/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto p-5 my-1.5 font-poppins">
      <header>
        {" "}
        <Header></Header>
      </header>
      <section className="w-11/12">
        <LatestNews></LatestNews>
      </section>

      <nav>
        {" "}
        <Navbar></Navbar>
      </nav>
      <main className="grid grid-cols-12 gap-5 mt-14">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="left col-span-6">
          <Main></Main>
          <Outlet></Outlet>
        </section>
        <aside className="left col-span-3">
          {" "}
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
