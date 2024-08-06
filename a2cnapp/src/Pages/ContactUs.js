import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Conatctleads from "../Components/Conatctleads";
import AnotherCard from "../Components/AnotherCard";


function ContactUs() {
  return (
    <div className="bg-newbg">
      <Header />
     

      <div className="">
        <Conatctleads />
      </div>

      

      <Footer />
    </div>
  );
}

export default ContactUs;
