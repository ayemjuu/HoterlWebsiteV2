import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


import Navigation from "../components/Navigation";
import Testimonials from "~/components/HomePage/Testimonials";
import Tagline from "~/components/HomePage/Tagline";
import WellcomeMessage from "~/components/HomePage/WellcomeMessage";
import Accommodation from "~/components/HomePage/Accommodation";
import InstagramFollow from "~/components/HomePage/InstagramFollow";
import Contact from "~/components/HomePage/Contact";
import Footer from "~/components/HomePage/Footer";



export default function Index() {
  return (
    <div className="max-h-screen overflow-y-auto">
      <div className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="bg-[url('./images/bgHotel.jpg')] h-full bg-cover bg-center z-0">
        <nav className="relative z-20">
          <Navigation />
        </nav>
        <div className="relative z-20">
        <Tagline></Tagline>
      
        </div>

     
      </div>
    </div>

    <div>

      <WellcomeMessage></WellcomeMessage>

      <Accommodation></Accommodation>

      <Testimonials></Testimonials>

    <InstagramFollow></InstagramFollow>

    <Contact></Contact>
    
    <Footer />

    </div>

  
  </div>
  
  );


}
