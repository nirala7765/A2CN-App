import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Button } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";

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
                src="https://lottie.host/0d7ac3b4-3037-474e-8ed7-76a5229655e1/DiWpVNkxF1.json"
                loop
                autoplay
                speed={0.5}
                alt="Digital marketing animation"
              />
            </div>
          </div>
        </section>

        <section className='h-[800px] text-white text-[35px] flex items-center justify-center'>
          <h2>Under Construction...</h2>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DigitalMarketing;
