import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../Images/nelogoA2cn.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
            <div className="bg-hrcolor mt-8 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-[270px] flex justify-center mb-4 md:mb-0">
                <div>
                <div className="my-3">
                    <Link to="/">
                    <img className="w-[260px] h-[200px]" src={logo} alt="" />
                    </Link>
                </div>

                <div className="text-white flex gap-3 text-[35px] justify-center">
                    <Link to="https://www.facebook.com/a2cn.in">
                    <FaFacebookSquare />
                    </Link>
                    <Link to="">
                    <FaInstagramSquare />
                    </Link>
                    <Link to="">
                    <FaLinkedin />
                    </Link>
                    <Link to="">
                    <FaSquareXTwitter />
                    </Link>
                    <Link to="">
                    <FaWhatsappSquare />
                    </Link>
                </div>
                </div>
            </div>

            <div className="w-full md:w-1/3 h-[270px] gap-2 text-white">
                <div>
                <h1 className="font-bold text-[25px] mb-[10px] mt-[10px]">
                    Quick Links
                </h1>
                <Link to="/">
                    <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                    Home
                    </h1>
                </Link>
                <Link to="/">
                    <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                    About
                    </h1>
                </Link>
                <Link to="/">
                    <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                    Blogs
                    </h1>
                </Link>
                <Link to="/">
                    <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                    Services
                    </h1>
                </Link>
                <Link to="/">
                    <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                    Our Works
                    </h1>
                </Link>
               
                <Link to="/">
                    <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                    Contact us
                    </h1>
                </Link>
                </div>
            </div>

            <div className="w-full md:w-1/3 h-[270px] text-white">
                <h1 className="font-bold text-[25px] mb-[10px] mt-[10px] ">
                Locations
                </h1>
                <div className="gap-2">
                <h1 className="text-[20px] hover:text-light-blue-800">Patna</h1>
               
                <h1 className="text-[20px] hover:text-light-blue-800">Buxar</h1>
               
                <h1 className="text-[20px] hover:text-light-blue-800">
                    Belahari
                </h1>
                <h1 className="text-[20px] hover:text-light-blue-800">
                    Jehanabd
                </h1>
                </div>
            </div>
            </div>

            <hr/>

            <h1 className="text-white text-[20px] pb-5 bg-hrcolor text-center">
                All rights reserved © 2024 A2CN
            </h1>


       
        </div>
    </>
  );
}

export default Footer;
