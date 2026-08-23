import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0d0b16]">
      <Navbar />

      <div className="pt-20">
        <AboutPage />
      </div>
      <Footer />
    </main>
  );
}