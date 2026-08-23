import Navbar from "@/components/Navbar";
import ServicesPage from "@/components/ServicesPage";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#080711]">
      <Navbar />

      <div className="pt-20">
        <ServicesPage />
      </div>
      <Footer />
    </main>
  );
}