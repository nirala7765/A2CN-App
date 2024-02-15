import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "@material-tailwind/react";
import DirectorPhoto from "../Images/DirectorPhoto.png"
import CEOPhoto from "../Images/CEOPHoto.png";
import { Player } from "@lottiefiles/react-lottie-player";

import startup from "../Images/startups.svg";

import rescue  from "../Images/rescue.svg";
import eterprises from "../Images/enterprises.svg";
import strategy from "../Images/strategy.svg";




function AboutPage() {
  return (
    <div className="bg-newbg">
      <Header />

      <div>
        <div>
          <div className=" pb-6  md:h-auto bg-hrcolor ">
            <div className="w-5/6 h-full mx-auto flex flex-col-reverse md:flex-row bg-transparent ">
              <div className=" md:w-1/2 h-full bg-transparent ">
                <div className="mt-[10px] lg:mt-[200px] md:mb-[15px]">
                  <h1 className=" text-start text-2xl md:text-6xl font-extrabold mt:-[20px] md:mt-[100px] ml-[30px]">
                    Building Apps That Make Life Better
                  </h1>

                  <div className=" justify-start text-start mt-4 md:mt-7 ">
                    <Button className="h-12 rounded-full hover:bg-black ml-[30px]">
                      Get In Touch With us
                    </Button>
                  </div>
                </div>
              </div>

              <div className=" md:w-1/2 h-full bg-transparent lg:mt-0 md:mt-9 mt-0">
                <Player
                  className=""
                  src="https://lottie.host/58c291d7-f5ca-40cc-aa03-d0afe5ab7b43/qvoZrHCI4z.json"
                  loop
                  autoplay
                  speed={0.5}
                />
              </div>
            </div>
          </div>

          <div className="w-[75%] mx-auto text-white text-[20px]  py-6 space-y-8 font-gtwalsheim font-arial font-gadget font-sansf font-bold">
            <p className="">
              We are a world-class digital product development company that
              specializes in mobile and web app development projects, but we are
              much more than your typical agency.
            </p>
            <p>
              Through a strategic development partner approach and our custom
              Agile development method, we put your business and users at the
              forefront of the development process.
            </p>
          </div>

          <div className="w-[85%] mx-auto text-white">
            <div className="w-full flex mt-6">
              <div className="w-1/3 md:w-1/3  ">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
              </div>

              <div className="w-1/3 md:w-1/3 ">
                <h1 className="text-[15px] md:text-[35px] font-bold mt-[15px] md:mt-3 ">
                  Our Values
                </h1>

                <div></div>
              </div>

              <div className="w-1/3 md:w-1/3 ">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
              </div>
            </div>
          </div>

          <div className="w-[85%] mx-auto text-white">
            <div className="w-full flex mt-6">
              <div className="w-1/3 md:w-1/3  ">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
              </div>

              <div className="w-1/3 md:w-1/3 ">
                <h1 className="text-[15px] md:text-[35px] font-bold mt-[15px] md:mt-3 ">
                  Who We are?
                </h1>
              </div>

              <div className="w-1/3 md:w-1/3 ">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:space-x-8 py-9">
              <div className=" lg:w-1/2  text-start mx-auto text-white text-[15px]  py-6 space-y-3 font-gtwalsheim font-arial font-gadget font-sansf font-bold">
                <p>
                  Although we are a software development company that provides
                  businesses worldwide with custom technology solutions, we see
                  ourselves as strategic business partners. That is why we help
                  clients through all of the Software Development Lifecycle
                  (SDLC).
                </p>
                <p>
                  For us, culture is very important, and that is why we make
                  sure you enjoy every step of the process of bringing an app to
                  life. We believe that a satisfied client has the power to
                  create a positive impact on the lives of people across the
                  world through technology.
                </p>
              </div>

              <div className="lg:w-1/2 w-full">
                <img
                  className="rounded-md "
                  src="https://www.coworker.com/mag/wp-content/uploads/2018/04/1104x777-1104x640.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full flex mt-6">
              <div className="w-[20%] lg:w-1/3 md:w-[25%]  ">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
              </div>

              <div className="w-[60%] lg:w-1/3 md:w-[50%] ">
                <h1 className="text-[15px] md:text-[35px] font-bold mt-[15px] md:mt-3 ">
                  Our Leadership
                </h1>
              </div>

              <div className="w-[20%] lg:w-1/3 md:w-[25%]">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[25px]"></div>
              </div>

            </div>


            <div className="lg:flex justify-between mt-6 ">

              <div className="lg:w-[350px] md:w-[250px] bg-blue-gray-800 border-[1px] border-white justify-center items-center py-5 rounded-md shadow-md">
                <img className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover object-left-top   rounded-full mx-auto  " src={DirectorPhoto} alt=""/>
                <h1 className="mt-9 lg:text-[25px] font-bold">Amar Kumar Chaudhari</h1>

                <h1 className="mt-1 lg:text-[20px] font-bold" >Founder & Director</h1>

                <p className="text-center w-[80%] mx-auto mt-9 font-bold"> Mr.Amar, Founder and Director of A2CN , drives innovation and growth in software solutions.</p>

                
              </div>

              <div className="lg:w-[350px] md:w-[250px] bg-blue-gray-800 border-[1px] border-white justify-center items-center py-5 rounded-md shadow-md">
                <img className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover object-left-top   rounded-full mx-auto  " src={DirectorPhoto} alt=""/>
                <h1 className="mt-9 lg:text-[25px] font-bold">Mausham Singh</h1>

                <h1 className="mt-1 lg:text-[20px] font-bold" >CTO & UI Designer</h1>

                <p className="text-center w-[80%] mx-auto mt-9 font-bold">Ms.Mausham, CTO and UI Designer at A2CN Innovations, blends tech and design for seamless, user-centric solutions.</p>

                
              </div>


              <div className="lg:w-[350px] md:w-[250px] bg-blue-gray-800 border-[1px] border-white justify-center items-center py-5 rounded-md shadow-md">
                <img className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover object-left-top   rounded-full mx-auto  " src={CEOPhoto} alt=""/>
                <h1 className="mt-9 lg:text-[25px] font-bold">Arun Kumar</h1>

                <h1 className="mt-1 lg:text-[20px] font-bold" >Founder & CEO</h1>

                <p className="text-center w-[80%] mx-auto mt-9 font-bold">Arun, CEO and Founder of A2CN, leads with vision, driving innovation and strategic growth.</p>

                
              </div>


            </div>




            <div className="w-full flex mt-6">
              <div className="w-[20%] lg:w-1/3 md:w-[25%]  ">
                <div className="w-full md:w-full md:mt-[40px]  bg-hrcolor h-[2px] mt-[35px]"></div>
              </div>

              <div className="w-[60%] lg:w-1/3 md:w-[50%] ">
                <h1 className="text-[25px] md:text-[35px] font-bold mt-[15px] md:mt-3 ">
                  Our Focus
                </h1>
              </div>

              <div className="w-[20%] lg:w-1/3 md:w-[25%]">
                <div className="w-full md:w-full md:mt-[40px] bg-hrcolor h-[2px] mt-[35px]"></div>
              </div>

            </div>


            <div className="space-y-5 mt-8">

              <div className="flex flex-col md:flex-row w-full justify-between md:gap-3 gap-6">
                <div className="w-full md:w-1/2">

                  <div className="flex">
                    <img src={startup}  alt=""/>
                    <h1 className="md:text-[25px] font-bold md:mt-5  md:ml-7 text-[15px] mt-7">App Development for Startups</h1>
                  </div>

                  <div className=" md:ml-[120px] md:mt-0  mt-5">
                    <p className="text-start text-[15px] font-semibold">Our team understands the challenges faced by early-stage companies. We’ve built top-ranking apps for a variety of startups, that’s why we take a unique approach that combines traditional and new methods to develop quality startup apps.</p>
                  </div>

                </div>
                <div className="w-full md:w-1/2">
                <div className="flex">
                    <img src={rescue}  alt=""/>
                    <h1 className="md:text-[25px] font-bold mt-5 ml-7 text-[15px]">Rescue Projects</h1>
                  </div>

                  <div className="md:ml-[120px] md:mt-0  mt-5">
                    <p className="text-start text-[15px] font-semibold">Successfully rescuing projects on the verge of failure is something we’ve done many times in the past. Combining our qualified expertise with a documented process, we quickly address underlying development problems, bottlenecks, and performance & usability issues.</p>
                  </div>
                </div>
                
                
              </div>

              <div className="flex flex-col md:flex-row w-full  justify-between md:gap-3 md:mt-9 gap-6 " >

                <div className="w-full md:w-1/2 ">
                <div className="flex">
                    <img src={eterprises}  alt=""/>
                    <h1 className="md:text-[25px] font-bold md:mt-5  md:ml-7 text-[15px] mt-7">Enterprise App Development</h1>
                  </div>

                  <div className="md:ml-[120px] md:mt-0  mt-5">
                    <p className="text-start text-[15px] font-semibold">We know how enterprise apps differ from off-the-shelf software. We've customized and launched unique web and mobile solutions that meet enterprise-level needs. Our portfolio demonstrates our high-quality standards regardless of the product.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 ">
                <div className="flex">
                    <img src={strategy}  alt=""/>
                    <h1 className="md:text-[25px] font-bold md:mt-5  md:ml-7 text-[15px] mt-7">Product Planning & Strategy</h1>
                  </div>

                  <div className=" md:ml-[120px] md:mt-0  mt-5">
                    <p className="text-start text-[15px] font-semibold">We offer a full-service product development and strategy team that dives deep to identify market opportunities, create a long-term mobile strategy, and develop product roadmaps. These elements help drive your ROI, setting us apart from other mobile and web app development companies.</p>
                  </div>
                </div>


              </div>
              

            </div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
