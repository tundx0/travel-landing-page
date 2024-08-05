import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogo";
import Services from "@/components/Services";
import SubscriptionForm from "@/components/Subscription";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-r from-purple-300 to-yellow-100 min-h-[80vh]">
        <Header />
        <Hero />
      </div>
      <Services />
      <Destinations />
      <Testimonials />
      <PartnerLogos />
      <SubscriptionForm />
      <Footer />
    </main>
  );
}
