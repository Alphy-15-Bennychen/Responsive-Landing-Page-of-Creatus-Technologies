import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Features from "../components/Features";
import Industries from "../components/Industries";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <Industries />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}