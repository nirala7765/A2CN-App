import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const MobileAppDevelopment = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center my-9">
        <div className="w-full max-w-4xl lg:max-w-[90%] space-y-6 px-6 md:px-12 lg:px-20 text-justify">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            At Maanc Technology, we specialize in creating mobile applications
            that offer seamless user experiences. Using the latest technologies
            like React Native and Flutter, we build high-performance apps that
            work flawlessly across all platforms, including Android and iOS.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            Our solutions are tailored to your business needs, focusing on
            speed, scalability, and security. Whether you're developing an
            enterprise-level app or an MVP for a startup, we ensure your
            application is optimized for both performance and usability.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            We offer end-to-end mobile development services, from idea
            conceptualization to deployment and ongoing support. At Maanc
            Technology, we are dedicated to bringing your vision to life and
            delivering mobile apps that enhance your business's digital
            presence.
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
              Mobile App Development Solution
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
                src="https://lottie.host/909ffa69-1ad2-48b6-bceb-c60b37a0f71c/CeQpEog1xV.json"
                loop
                autoplay
                speed={0.5}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-7 text-justify mb-5">
            <p>
              Mobile App Development: At Maanc Technology, we specialize in
              developing mobile applications that offer seamless and engaging
              user experiences. Utilizing the latest technologies like React
              Native and Flutter, we build high-performance, cross-platform apps
              tailored to your business needs. Whether it's for Android or iOS,
              our mobile solutions prioritize scalability, security, and
              performance, ensuring your app stands out in a competitive digital
              landscape.
            </p>
            <p>
              As the mobile landscape continues to grow, having a robust and
              engaging mobile app is crucial for business success. At Maanc
              Technology, we understand the importance of delivering
              high-quality mobile apps that keep users engaged and drive
              business growth.
            </p>

            <p>
              Our team is equipped with expertise across a wide range of
              industries, providing custom mobile app solutions for startups,
              SMBs, and large enterprises alike. From simple mobile apps to
              complex, feature-rich applications, we have the tools and
              experience to bring your ideas to life.
            </p>

            <p>
              Ready to take the first step in developing your mobile app?
              Contact us today for a free consultation. We’ll discuss your
              vision, offer expert advice, and guide you on the best way
              forward, ensuring that your mobile app aligns with your business
              goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;
