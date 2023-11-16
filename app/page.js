import Image from "next/image";
import Header from "../containers/Header/Header";
import Body from "../containers/Body/Body";
import About from "../containers/About/About";
import Reviews from "../containers/Reviews/Reviews";
import Contact from "../containers/Contact/Contact";
import Footer from "../containers/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
