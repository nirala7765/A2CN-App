import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Button } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";

function Mobileapp() {
  return (
    <div className='bg-newbg'>

      <Header/>

      <div className="pb-6 md:h-auto bg-hrcolor">
            <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse md:flex-row bg-transparent">
              <div className="md:w-1/2 bg-transparent">
                <div className="mt-[10px] lg:mt-[200px] md:mb-[15px]">
                  <h1 className="text-start text-2xl md:text-6xl font-extrabold mt:-[20px] md:mt-[100px] ml-[30px]">
                    Apllication <br/>
                    <br/>
                    Development


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
                  className=""
                  src="https://lottie.host/3b64e75d-f43e-4265-9eee-567c722740b7/XavntMF7d0.json"
                  loop
                  autoplay
                  speed={0.5}
                />
              </div>
            </div>
          </div>
      <div className='h-[800px] text-white text-[35px] justify-center'>

        

        <h3>Under Construction.........</h3>

      </div>

      <Footer/>
    </div>
  )
}

export default Mobileapp;