import React from "react";
import heroimage from "../Images/heroImage.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div>
        <div className="h-[600px] md:h-auto bg-hrcolor ">
            <div className="w-5/6 h-full mx-auto flex flex-col md:flex-row bg-transparent ">
                <div className=" md:w-1/2 h-full bg-transparent ">

                    <div className="mt-[10px] md:mt-[200px]">

                        <h1 className="justify-start text-start text-2xl md:text-5xl font-extrabold mt-[100px] ml-[30px]">
                            A2CN:Your
                            <br/>
                            Development partner

                        </h1>

                        <div className=" justify-start text-start mt-4 md:mt-7 ">
                          <Link to="https://a2cn.vercel.app/contact-us">
                            <Button className="h-12 rounded-full hover:bg-black ml-[30px]">Get In Touch With us</Button>


                          </Link>
                            

                        </div>

                       
                    </div>


                    

                </div>

                <div className=" md:w-1/2 h-full bg-transparent">

                    <img className="w-[660px] h-[330] md:h-[550px] mt-[20px]  md:mt-0 md:ml-10"   src={heroimage } alt=""/>

                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
