import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/nav/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <main className="font-outfit">
      <section className="container mx-auto">
        <Navbar />
      </section>
      <section className="max-container">
        <Outlet />
      </section>
      <section className="max-container">
        <Footer />
      </section>
    </main>
  );
};

export default Root;
