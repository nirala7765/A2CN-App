import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Button } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import MobileAppDevelopment from '../Components/MobileAppDevelopment';
import DigitalMarketingcomp from '../Components/DigitalMarketingcomp';

function DigitalMarketing() {
  return (
    <div className='bg-newbg'>
      <Header />

      <main>
        <section className="pb-6 md:h-auto bg-hrcolor">
          <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse md:flex-row bg-transparent">
            <div className="md:w-1/2 bg-transparent">
              <div className="mt-[10px] lg:mt-[200px] md:mb-[15px]">
                <h1 className="text-start text-2xl md:text-6xl font-extrabold mt:-[20px] md:mt-[100px] ml-[30px]">
                  Digital <br />
                  <br />
                  Marketing
                </h1>
                <div className="justify-start text-start mt-4 md:mt-7">
                  <Button className="h-12 rounded-full hover:bg-black ml-[30px]">
                    Get In Touch With us
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-transparent lg:mt-0 md:mt-9 mt-0">
              <Player
                src="https://lottie.host/3d6d4a90-1cc4-4656-8bb6-e43bcb7f451a/yQJ7aKG2VY.json"
                loop
                autoplay
                speed={0.5}
                alt="Digital marketing animation"
              />
            </div>
          </div>
        </section>

       <div>
        <DigitalMarketingcomp/>
       </div>

        
      </main>

      <Footer />
    </div>
  );
}

export default DigitalMarketing;
