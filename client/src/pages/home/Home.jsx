import Categories from "../../components/home/Categories";
import ContactForm from "../../components/home/ContactForm";
import FAQ from "../../components/home/FAQ";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Hero from "../../components/home/Hero";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <FeaturedProducts />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <FAQ />
      </section>
      <section className="flex justify-center py-12 items-center">
        <ContactForm />
      </section>
    </main>
  );
};

export default Home;
