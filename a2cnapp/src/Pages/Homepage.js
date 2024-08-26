import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import imagesalute from "../Images/imagesalute.webp";
import cybersecurityimage from "../Images/cybersecurity.webp";
import { Button } from "@material-tailwind/react";
import cellphoneDesignImage from "../Images/cellphonrlayout.webp";
import Puzzlephoto from "../Images/puzzle.webp";
import puzzleonHand from "../Images/puzzleonhand.svg";
import websettingmage from "../Images/websetting.svg";
import ProductDesignImage from "../Images/productdesign.svg";

import EdTechImage from "../Images/education.webp";
import FintechImage from "../Images/fintech.webp";
import MedTechImage from "../Images/medtech.webp";
import HitechImage from "../Images/hitech.webp";
import reatilImage from "../Images/retailTech.webp";
import IotImage from "../Images/iot.webp";

import NiralaImage from "../Images/CEOPHoto.png";
import { Link } from "react-router-dom";

function Homepage() {

  return (
    <div className="bg-newbg text-white">
      <Header />
      <HeroSection />

      <div className="w-full">
        <div className="w-5/6 h-[600px] mx-auto md:h-[400px]">
          <div className="w-full flex mt-6">
            <div className="w-1/3 md:w-1/3  ">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
            </div>

            <div className="w-1/3 md:w-1/3 ">
              <h2 className="text-[15px] md:text-[35px] font-bold mt-[15px] md:mt-3 ">
                What We Do?
              </h2>
            </div>

            <div className="w-1/3 md:w-1/3 ">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
            </div>
          </div>

          <div className="mt-11 gap-5 md:w-[70%] md:mx-auto md:mt-9">
            <p className="w-4/6 md:w-full mx-auto text-[20px] md:text-[18px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-start">
              Through our custom Agile development method, we bring your mobile
              and web app ideas to reality.
            </p>

            <p className="w-4/6 md:w-full mx-auto text-[20px] md:text-[18px] font-gtwalsheim font-arial font-gadget font-sans font-bold text-start mt-8">
              We stand out for our top development skills but we are much more
              than that. We are a genuine strategic business partner.
            </p>
          </div>
        </div>

        <div className="w-5/6 mx-auto">
          <div className="w-full flex">
            <div className="w-[25%] md:w-1/3 h-[200px] md:h-[100px] ">
              <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
            </div>

            <div className="w-[100%] md:w-1/3 h-[200px] md:h-[100px]">
              <h2 className="text-[20px] md:text-[25px] font-bold mt-4 ">
                End-to-End Development
              </h2>
            </div>

            <div className="w-[25%] md:w-1/3 h-[200px] md:h-[100px]">
              <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
            </div>
          </div>

          <div className="mt-9 gap-5 flex flex-col md:flex-row">
            <div className="">
              {/* Update image width for responsiveness */}
              <img
                className="w-full md:w-[400px] h-[450px]"
                src={imagesalute}
                alt="Image Salute"
              />
            </div>

            <div className="w-full md:w-[500px] md:ml-[250px] mt-5 md:mt-11">
              <h2 className="text-start text-[30px] md:text-[25px] font-gtwalsheim font-arial font-gadget font-sansf font-bold">
                You Manage The Business,
                <br /> We Handle The Application
              </h2>

              <p className="w-full text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                We cover all the bits and pieces needed to develop top-notch,
                innovative digital products. From strategy to product design,
                including Front-end and Back-end services, we got your back. We
                code to very high standards and test continuously, which creates
                easy to maintain high-quality products.
              </p>
            </div>
          </div>

          <div className="mt-9 gap-5 flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-[500px]  md:mt-[60px]">
              <h2 className="text-start text-[30px] md:text-[25px] font-gtwalsheim font-arial font-gadget font-sansf font-bold">
                Mobile and Web Apps for Startups and Enterprises
              </h2>

              <p className="w-full text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                Transform your business landscape by embracing the power of
                cutting-edge mobile and web applications. Our tailored solutions
                cater to the unique needs of startups and enterprises, ensuring
                a seamless journey towards innovation, growth, and sustainable
                success in the digital realm.
              </p>
            </div>

            <div className="md:ml-[300px]">
              {/* Update image width for responsiveness */}
              <img
                className="w-full md:w-[550px] h-[450px]"
                src={cybersecurityimage}
                alt="Cyber Security Image"
              />
            </div>
          </div>
        </div>

        <div className="mt-[20px] md:mt-0">
          <Button className="bg-hrcolor text-black font-bold text-sm md:text-base hover:text-white px-6 md:px-[50px] rounded-full">
            Our Services
          </Button>
        </div>

        <hr className="mt-8 md:mt-[80px]"></hr>

        <div className="w-5/6 mx-auto">
          <div className="mt-9 gap-5 flex flex-col-reverse md:flex-row">
            <div className="md:mt-11 md:w-[60%]">
              <h2 className="text-start text-[40px] md:text-[50px] font-gtwalsheim font-arial font-gadget font-sansf font-bold">
                Explore Our Work
              </h2>

              <h2 className="text-start text-[25px] md:text-[30px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-tg">
                Results for Innovative Companies
              </h2>

              <p className="w-full text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                As a product development company, we help businesses ideate,
                strategize, iterate, and launch their mobile and web apps while
                keeping cost, timelines, and objectives in mind.
              </p>

              <div className="mt-8 md:mt-11 text-start">
                <Link to="https://www.maanc.com/our-works">
                  <Button className="bg-hrcolor text-black font-bold text-sm md:text-base hover:text-white px-6 md:px-[50px] rounded-full">
                    Explore Our Works
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:ml-[50px]">
              {/* Update image width for responsiveness */}
              <img
                className="w-full md:w-[550px] h-[450px]"
                src={cellphoneDesignImage}
                alt="Cellphone Design Image"
              />
            </div>
          </div>

          <div className="w-full md:w-[800px] mx-auto mt-5">
            <div className="w-full md:w-[800px] mx-auto mt-5">
              <img
                className="w-full md:w-[100%] h-[auto]"
                src={Puzzlephoto}
                alt="Puzzle Photo"
              />

              <h2 className="text-[45px] md:text-[35px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-white mt-5">
                Collaborative & Scientific Approach
              </h2>

              <p className="ml-3 text-[20px] md:text-[18px] text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                Our custom Agile development method puts you in control,
                reducing risks and increasing transparency between our team and
                yours. This allows you to hit even aggressive timelines.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-8 mt-8 md:mt-[80px]">
            {/* ... Existing Code ... */}

            <div className="w-full flex flex-col md:flex-row gap-8 mt-[80px]">
              <div className="w-full md:w-1/3 space-y-4">
                <img
                  className="w-[50%] md:w-[50%] h-[auto]"
                  src={puzzleonHand}
                  alt="Puzzle on Hand"
                />
                <h2 className="text-start text-[25px] md:text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-white mt-3">
                  Solutions for Startups and Enterprises
                </h2>
                <p className="w-full text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold ">
                  We address all design and technical challenges, identify any
                  risk areas, and create a sound foundation for your product
                  based on budget, timeline, and technology. We deliver your
                  product blueprint, complete with the app's architecture.
                </p>
              </div>

              <div className="w-full md:w-1/3  space-y-4">

                <img
                  className="w-[50%] md:w-[50%] h-[auto]"
                  src={websettingmage}
                  alt="Web Setting Image"
                />
                
                <h2 className="text-start text-[25px] md:text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-white mt-3">
                  Web & Mobile App Development
                </h2>
                <p className="w-full text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold ">
                  Whether your app needs to be built using Ruby on Rails,
                  Kotlin, Swift, or some other programming language, we hit
                  sprint deadlines on time and according to your technical
                  requirements. We focus on building scalable apps that
                  facilitate incremental improvements to your product.
                </p>
              </div>

              <div className="w-full md:w-1/3 space-y-4">
                <img
                  className="w-[40%] md:w-[50%] h-[auto]"
                  src={ProductDesignImage}
                  alt="Product Design Image"
                />
                <h2 className="text-start text-[25px] md:text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-white mt-3">
                  Product Design
                </h2>
                <p className="w-full text-start font-gtwalsheim font-arial font-gadget font-sansf font-bold ">
                  Our app development approach uses design as a means of
                  crafting innovative digital experiences. We rigorously use
                  wireframes, user flows, and prototyping to deliver a powerful
                  User Experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link to="https://www.maanc.com/contact-us">
              <Button
                
                className="bg-hrcolor text-black font-bold text-sm md:text-base hover:text-white px-6 md:px-[50px] rounded-full">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        <hr className="mt-8 md:mt-[80px]"></hr>

        <div className="w-5/6 mx-auto mt-11">
          <div>
            <h2 className="text-[35px] font-gtwalsheim font-arial font-gadget font-sansf font-bold">
              Some of the Industries We Currently Serve
            </h2>
          </div>

          <div className="w-full flex flex-wrap lg:gap-4 md:gap-8 md:space-y-2  space-y-2">
            <div className="w-full md:w-[30%] lg:w-[15%] py-4 rounded-md hover:bg-hoverbg cursor-pointer ">
              <img className="w-full" src={EdTechImage} alt="EdTech Image" />
              <h2 className="text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                EdTech
              </h2>
            </div>

            {/* Repeat this block for each item */}
            <div className="w-full md:w-[30%] lg:w-[15%] py-4 rounded-md hover:bg-hoverbg cursor-pointer">
              <img className="w-full" src={FintechImage} alt="FinTech Image" />
              <h2 className="text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                FinTech
              </h2>
            </div>

            {/* Repeat this block for each item */}
            <div className="w-full md:w-[30%] lg:w-[15%] py-4 rounded-md hover:bg-hoverbg cursor-pointer">
              <img className="w-full" src={MedTechImage} alt="Med Tech Image" />
              <h2 className="text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                MedTech
              </h2>
            </div>

            {/* Repeat this block for each item */}
            <div className="w-full md:w-[30%] lg:w-[15%] py-4 rounded-md hover:bg-hoverbg cursor-pointer">
              <img className="w-full" src={HitechImage} alt="Hi Tech Image" />
              <h2 className="text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                HiTech
              </h2>
            </div>

            {/* Repeat this block for each item */}
            <div className="w-full md:w-[30%] lg:w-[15%] py-4 rounded-md hover:bg-hoverbg cursor-pointer">
              <img className="w-full" src={reatilImage} alt="Reatil Image" />
              <h2 className="text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                Reatil
              </h2>
            </div>

            {/* Repeat this block for each item */}
            <div className="w-full md:w-[30%] lg:w-[15%] py-4 rounded-md hover:bg-hoverbg cursor-pointer">
              <img className="w-full" src={IotImage} alt="Iot Image" />
              <h2 className="text-[20px] font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5">
                IOT
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div className="w-5/6 mx-auto mt-6">
            <div className="w-full flex">
              <div className="w-[25%] lg:w-1/3  ">
                <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
              </div>

              <div className="w-[100%] lg:w-1/3 ">
                <h2 className="text-[15px] lg:text-[25px] md:text-[30px] font-bold mt-7 md:mt-4 lg:mt-5 ">
                  A Message From Our CEO
                </h2>
              </div>

              <div className="w-[25%] md:w-1/3 ">
                <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
              </div>
            </div>

            <div className="mt-8">
              <img
                className="w-[150px] h-[150px]  rounded-full object-cover object-top justify-center mx-auto"
                src={NiralaImage}
                alt="CEO Image"
              />

              <p className="ml-3 text-[20px] md:text-[18px]  font-gtwalsheim font-arial font-gadget font-sansf font-bold mt-5 md:w-[80%] md:mx-auto">
                Welcome to MAANC – where innovation meets excellence in Software
                Development and IT Consulting. Explore our digital space to
                witness cutting-edge solutions and tailored consulting services.
                Join us in shaping the future of technology.
              </p>
              <h2 className="text-[25px] md:text-[25px] font-gtwalsheim font-arial font-gadget font-sansf font-bold text-white mt-5">
                Arun Kumar Nirala
              </h2>
              <h2 className="text-[25px] md:text-[25px] font-gtwalsheim font-arial font-gadget font-sansf  text-white">
                Founder & CEO
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
