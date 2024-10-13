import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const WebDevelopment = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center  my-9">
        <div className="w-full max-w-4xl lg:max-w-[90%] space-y-6 px-6 md:px-12 lg:px-20 text-justify">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            At Maanc Technology, we offer expert web development services
            designed to help businesses thrive online. Using cutting-edge
            frameworks like Next.js and React, we build fast, scalable, and
            visually appealing websites tailored to your specific needs.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            Our web solutions focus on creating seamless user experiences across
            all devices. From e-commerce platforms to corporate websites, we
            ensure every project is responsive, secure, and optimized for
            performance.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            We provide end-to-end services, including design, development, and
            ongoing support. With a focus on quality and timely delivery, Maanc
            Technology is committed to helping businesses succeed in the digital
            space.
          </p>
        </div>
      </div>

      <div className="w-5/6 mx-auto">
        <div className="w-full flex">
          <div className="w-[25%] md:w-1/3 h-[200px] md:h-[100px] ">
            <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
          </div>

          <div className="w-[100%] md:w-1/3 h-[200px] md:h-[100px]">
            <h2 className="text-[20px] md:text-[25px] font-bold mt-4 text-white">
              Web-Development Solution
            </h2>
          </div>

          <div className="w-[25%] md:w-1/3 h-[200px] md:h-[100px]">
            <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row text-white text-xl">
         
          {/* Lottie Animation Section */}
          <div className="w-full lg:w-1/2  mt-5 lg:mt-0">
            <div className="bg-transparent">
              <Player
                className=""
                src="https://lottie.host/3132eb43-d812-4c2d-bab1-08a62ab285a4/kFDTLkgg4a.json"
                loop
                autoplay
                speed={0.5}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-7 text-justify mb-5">
            <p>
              Modern web development has evolved to focus on creating dynamic
              web applications, offering users an immersive, app-like experience
              directly in their browsers. As mobile apps and devices dominate,
              businesses and users alike have shifted from static websites to
              interactive web apps. At Maanc Technology, we recognize the
              importance of a mobile-first world and incorporate these
              principles into every web application we develop.
            </p>

            <p>
              We provide a comprehensive range of web application development
              services designed to meet the diverse needs of businesses. Our
              experienced team has successfully delivered projects for companies
              of all sizes, from startups to established enterprises. Whether
              you’re looking to create a simple web app or a complex,
              feature-rich solution, we are equipped to bring your ideas to life
              with the latest technologies and industry best practices.
            </p>

            <p>
              If you’re unsure where to begin, our team is here to help.
              Schedule a free consultation with one of our web development
              experts to discuss your project in detail. We’ll guide you through
              our service offerings, listen to your ideas, and provide honest
              feedback on the best path forward to ensure your project aligns
              with your business goals. At Maanc Technology, we are committed to
              delivering solutions that drive success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
