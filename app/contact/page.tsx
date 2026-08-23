import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#080711]">
      <Navbar />

      <div className="pt-20">
        <ContactPage />
      </div>
      <Footer />
    </main>
  );
}