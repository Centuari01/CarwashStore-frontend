import Image from "next/image";
import { Header, Body, About, Reviews, Contact, Footer } from "@/containers";

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
