import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import DirectorPhoto from "../Images/DirectorPhoto.png";
import COOPhoto from "../Images/Riz.JPG";
import CtoNewImage from "../Images/ctonewphoto.jpg";
import startup from "../Images/startups.svg";
import rescue from "../Images/rescue.svg";
import enterprises from "../Images/enterprises.svg";
import strategy from "../Images/strategy.svg";
import { useState, useEffect } from 'react';



function AboutPage() {

 


  return (
    <div className="bg-newbg">
      <Header />

      <main>
     
      <section className="pb-6 md:h-auto bg-hrcolor">
          <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse md:flex-row bg-transparent">
            <div className="md:w-1/2 bg-transparent">
              <div className="mt-[10px] lg:mt-[200px] md:mb-[15px]">
                <h1 className="text-start text-2xl md:text-6xl font-extrabold mt:-[20px] md:mt-[100px] ml-[30px]">
                  Building Apps That Make Life Better
                </h1>
                <div className="justify-start text-start mt-4 md:mt-7">
                <Link to="https://maanc.com/contact-us">
            <Button className="h-12 px-8 rounded-full shadow-teal-700 bg-newbg text-white hover:bg-black transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Contact Us Now
            </Button>
          </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-transparent lg:mt-0 md:mt-9 mt-0">
              <Player
                src="https://lottie.host/58c291d7-f5ca-40cc-aa03-d0afe5ab7b43/qvoZrHCI4z.json"
                loop
                autoplay
                speed={0.5}
              />
            </div>
          </div>
        </section>

        <section className="w-[75%] mx-auto text-white text-[20px] py-6 space-y-8 font-gtwalsheim font-arial font-gadget font-sansf font-bold">
          <p>
            We are a world-class digital product development company that
            specializes in mobile and web app development projects, but we are
            much more than your typical agency.
          </p>
          <p>
            Through a strategic development partner approach and our custom
            Agile development method, we put your business and users at the
            forefront of the development process.
          </p>
        </section>

        <section className="w-[85%] mx-auto text-white">
          <div className="w-full flex mt-6">
            <div className="w-1/3 md:w-1/3">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
            </div>
            <div className="w-1/3 md:w-1/3">
              <h2 className="text-[15px] md:text-[35px] font-bold mt-[15px] md:mt-3">
                Who We are?
              </h2>
            </div>
            <div className="w-1/3 md:w-1/3">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row lg:space-x-8 py-9">
            <div className="lg:w-1/2 text-start mx-auto text-white text-[15px] py-6 space-y-3 font-gtwalsheim font-arial font-gadget font-sansf font-bold">
              <p>
                Although we are a software development company that provides
                businesses worldwide with custom technology solutions, we see
                ourselves as strategic business partners. That is why we help
                clients through all of the Software Development Lifecycle
                (SDLC).
              </p>
              <p>
                For us, culture is very important, and that is why we make sure
                you enjoy every step of the process of bringing an app to life.
                We believe that a satisfied client has the power to create a
                positive impact on the lives of people across the world through
                technology.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                className="rounded-md"
                src="https://www.coworker.com/mag/wp-content/uploads/2018/04/1104x777-1104x640.png"
                alt="MAANC Technology team"
              />
            </div>
          </div>

          <div className="w-full flex mt-6">
            <div className="w-[20%] lg:w-1/3 md:w-[25%]">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
            </div>
            <div className="w-[60%] lg:w-1/3 md:w-[50%]">
              <h2 className="text-[15px] md:text-[35px] font-bold mt-[15px] md:mt-3">
                Our Leadership
              </h2>
            </div>
            <div className="w-[20%] lg:w-1/3 md:w-[25%]">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
            </div>
          </div>

          <div className="md:flex justify-between mt-6 w-[95%] mx-auto md:w-full md:mx-0 gap-5">
          
            <div className="lg:w-[350px] md:w-[250px] bg-blue-gray-800 border-[1px] border-white justify-center items-center py-5 rounded-md shadow-md my-3">
              <img
                className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover object-left-top rounded-full mx-auto"
                src={DirectorPhoto}
                alt="Amar Kumar Chaudhari"
              />
              <h3 className="mt-9 lg:text-[25px] font-bold">Amar Kumar Chaudhari</h3>
              <h4 className="mt-1 lg:text-[20px] font-bold">Founder & Director</h4>
              <p className="text-center w-[80%] mx-auto mt-9 font-bold">
                Mr. Amar, Founder and Director of MAANC, drives innovation and
                growth in software solutions.
              </p>
            </div>

            <div className="lg:w-[350px] md:w-[250px] bg-blue-gray-800 border-[1px] border-white justify-center items-center py-5 rounded-md shadow-md my-3 ">
              <img
                className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover object-left-top rounded-full mx-auto"
                src={CtoNewImage}
                alt="Mausham Singh"
              />
              <h3 className="mt-9 lg:text-[25px] font-bold">Mausham Singh</h3>
              <h4 className="mt-1 lg:text-[20px] font-bold">Founder & CTO</h4>
              <p className="text-center w-[80%] mx-auto mt-9 font-bold">
                Ms. Mausham, CTO at MAANC Innovations, blends
                tech and design for seamless, user-centric solutions.
              </p>
            </div>

            <div className="lg:w-[350px] md:w-[250px] bg-blue-gray-800 border-[1px] border-white justify-center items-center py-5 rounded-md shadow-md my-3">
              <img
                className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover object-left-top rounded-full mx-auto"
                src={COOPhoto}
                alt="Mohamed Rizwan R"
              />
              <h3 className="mt-9 lg:text-[25px] font-bold">Mohamed Rizwan R</h3>
              <h4 className="mt-1 lg:text-[20px] font-bold">Founder & COO</h4>
              <p className="text-center w-[80%] mx-auto mt-9 font-bold">
                Mr. Rizwan, COO and Founder of MAANC, leads with vision, driving
                innovation and strategic growth.
              </p>
            </div>
          </div>

          

          <div className="w-full flex mt-6">
            <div className="w-[20%] lg:w-1/3 md:w-[25%]">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[35px]"></div>
            </div>
            <div className="w-[60%] lg:w-1/3 md:w-[50%]">
              <h2 className="text-[25px] md:text-[35px] font-bold mt-[15px] md:mt-3">
                Our Focus
              </h2>
            </div>
            <div className="w-[20%] lg:w-1/3 md:w-[25%]">
              <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[35px]"></div>
            </div>
          </div>

          <div className="space-y-5 mt-8">
            <div className="flex flex-col md:flex-row w-full justify-between md:gap-3 gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex">
                  <img src={startup} alt="Startup Icon" />
                  <h3 className="md:text-[25px] font-bold md:mt-5 md:ml-7 text-[15px] mt-7">
                    App Development for Startups
                  </h3>
                </div>
                <div className="md:ml-[120px] md:mt-0 mt-5">
                  <p className="text-start text-[15px] font-semibold">
                    Our team understands the challenges faced by early-stage
                    companies. We’ve built top-ranking apps for a variety of
                    startups, that’s why we take a unique approach that combines
                    traditional and new methods to develop quality startup apps.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex">
                  <img src={rescue} alt="Rescue Icon" />
                  <h3 className="md:text-[25px] font-bold mt-5 ml-7 text-[15px]">
                    Rescue Projects
                  </h3>
                </div>
                <div className="md:ml-[120px] md:mt-0 mt-5">
                  <p className="text-start text-[15px] font-semibold">
                    Successfully rescuing projects on the verge of failure
                    is something we’ve done many times in the past. Combining
                    our qualified expertise with a documented process, we
                    quickly address underlying development problems,
                    bottlenecks, and performance & usability issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between md:gap-3 md:mt-9 gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex">
                  <img src={enterprises} alt="Enterprise Icon" />
                  <h3 className="md:text-[25px] font-bold md:mt-5 md:ml-7 text-[15px] mt-7">
                    Enterprise App Development
                  </h3>
                </div>
                <div className="md:ml-[120px] md:mt-0 mt-5">
                  <p className="text-start text-[15px] font-semibold">
                    We know how enterprise apps differ from off-the-shelf
                    software. We've customized and launched unique web and
                    mobile solutions that meet enterprise-level needs. Our
                    portfolio demonstrates our high-quality standards
                    regardless of the product.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex">
                  <img src={strategy} alt="Strategy Icon" />
                  <h3 className="md:text-[25px] font-bold md:mt-5 md:ml-7 text-[15px] mt-7">
                    Product Planning & Strategy
                  </h3>
                </div>
                <div className="md:ml-[120px] md:mt-0 mt-5">
                  <p className="text-start text-[15px] font-semibold">
                    We offer a full-service product development and strategy
                    team that dives deep to identify market opportunities,
                    create a long-term mobile strategy, and develop product
                    roadmaps. These elements help drive your ROI, setting us
                    apart from other mobile and web app development companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
