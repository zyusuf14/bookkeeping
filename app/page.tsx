import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HomeServices />
      <Footer />
    </main>
  );
}