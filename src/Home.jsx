import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MediaGallery from "./components/MediaGallery";

export default function Home() {
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#f3f5f6] text-[#0a2016]">
      <Hero onScrollTo={handleScrollTo} />
      <Services onScrollTo={handleScrollTo} />
      <Portfolio />
      <MediaGallery />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
