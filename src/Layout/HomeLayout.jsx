import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
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
    

      <nav> <Navbar></Navbar></nav>
      <main className="grid grid-cols-12 gap-3 mt-14">
        <aside className="left col-span-3">

        </aside>
        <section className="left col-span-6"> middle

        </section>
        <aside className="left col-span-3"> right side

        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
