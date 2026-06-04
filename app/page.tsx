import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trust from "./components/Trust";
import RecoveryJourney from "./components/RecoveryJourney";
import WhyChoose from "./components/WhyChoose";
import Conditions from "./components/Conditions";
import Doctors from "./components/Doctors";
import Reviews from "./components/Reviews";
import Coverage from "./components/Coverage";
import Testimonials from "./components/Testimonials";
import RecoveryShowcase from "./components/RecoveryShowcase";
import BookingCTA from "./components/BookingCTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import FloatingCall from "./components/FloatingCall";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <ParticleBackground />

      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <RecoveryJourney />
      <WhyChoose />
      <Conditions />
      <Doctors />
      <Reviews />
      <Coverage />
      <Testimonials />
      <RecoveryShowcase />
      <BookingCTA />
      <FAQ />
      <Contact />
      <FloatingButtons />
      <FloatingCall />
      <Footer />
    </>
  );
}