import React from "react";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";

const Enquiry = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBarTop />
        <NavBarMain />
      </div>

      <div
  className="relative w-full h-[350px] bg-cover bg-center"
  style={{ backgroundImage: "url('/enquiry-1.webp')" }} 
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-12">

    <h1 className="text-5xl md:text-6xl font-bold fade-in-up">Enquiry</h1>
  </div>
</div>

      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Enquiry;
