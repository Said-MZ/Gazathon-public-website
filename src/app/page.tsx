import About from "@/components/home/about";
import { FAQ } from "@/components/home/faq";
import Hero from "@/components/home/hero";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <FAQ />
    </main>
  );
};

export default HomePage;
