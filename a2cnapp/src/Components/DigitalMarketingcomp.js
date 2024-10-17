import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const DigitalMarketingcomp = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center my-9">
        <div className="w-full max-w-4xl lg:max-w-[90%] space-y-6 px-6 md:px-12 lg:px-20 text-justify">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            At Maanc Technology, we offer comprehensive digital marketing
            services designed to grow your online presence and drive measurable
            results. From SEO and PPC to social media management, we provide
            tailored strategies that align with your business objectives and
            target audience.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            Our data-driven approach ensures that every marketing campaign we
            execute is optimized for maximum return on investment. We leverage
            cutting-edge tools and techniques to improve visibility, generate
            leads, and increase conversions, helping you stay ahead in a
            competitive digital landscape.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            From strategy development to execution, our digital marketing
            services cover all aspects, including content creation, performance
            analytics, and ongoing optimization. At Maanc Technology, we are
            committed to helping you achieve long-term success in the digital
            space.
          </p>
        </div>
      </div>

      <div className="w-5/6 mx-auto">
        <div className="w-full flex">
          <div className="w-[25%] md:w-1/3 h-[200px] md:h-[100px]">
            <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
          </div>

          <div className="w-[100%] md:w-1/3 h-[200px] md:h-[100px]">
            <h2 className="text-[20px] md:text-[25px] font-bold mt-4 text-white">
              Digital Marketing Solution
            </h2>
          </div>

          <div className="w-[25%] md:w-1/3 h-[200px] md:h-[100px]">
            <div className="w-[100%] md:w-full mt-[40px] bg-hrcolor h-[2px]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row text-white text-xl">
          {/* Lottie Animation Section */}
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <div className="bg-transparent">
              <Player
                className=""
                src="https://lottie.host/bac969cd-64e6-4cd6-95ae-1d2aecb8e534/DSkmVGusS5.json"
                loop
                autoplay
                speed={0.5}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-7 text-justify mb-5">
            <p>
              Digital Marketing: Maanc Technology provides data-driven digital
              marketing solutions that help businesses thrive online. From SEO
              and PPC to social media management, our tailored strategies focus
              on increasing visibility, driving traffic, and improving
              conversions. Our team leverages cutting-edge tools and techniques
              to ensure your brand's message reaches the right audience,
              delivering measurable results that fuel long-term growth.
            </p>
            <p>
              In today’s digital-first world, a strong online presence is
              essential for business success. At Maanc Technology, our digital
              marketing services are designed to create meaningful connections
              with your target audience and convert those interactions into
              loyal customers.
            </p>

            <p>
              Our team of digital marketing experts works with businesses of all
              sizes to develop strategies that align with their goals. From
              social media marketing to content marketing, SEO, and paid
              advertising, we offer solutions that drive real results and
              sustainable growth.
            </p>

            <p>
              Ready to elevate your brand’s online presence? Contact us today
              for a free consultation. We’ll assess your current digital
              footprint, discuss your goals, and create a tailored digital
              marketing strategy that sets you on the path to success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingcomp;
