import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

import logo from "../Images/Maanc Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-hrcolor mt-8">
        <div className="flex flex-col md:flex-row text-sans">
          <div className="w-full md:w-1/3 h-[270px] flex justify-center mb-4 md:mb-0">
            <div>
              <div className="my-3">
                <Link to="/">
                  <img
                    className="w-[260px] h-[200px]"
                    src={logo}
                    alt="Maanc Logo"
                  />
                </Link>
              </div>

              <div className="text-white flex gap-3 text-[35px] justify-center">
                <Link to="https://www.facebook.com/a2cn.in">
                  <FaFacebookSquare />
                </Link>
                <Link to="https://www.instagram.com/a2cn.in/">
                  <FaInstagramSquare />
                </Link>
                <Link to="https://www.linkedin.com/company/100496029/admin/feed/posts/">
                  <FaLinkedin />
                </Link>
                <Link to="https://wa.link/a64rph">
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
              <Link to="/about-us">
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
              <Link to="/our-works">
                <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                  Our Works
                </h1>
              </Link>

              <Link to="/contact-us">
                <h1 className="cursor-pointer hover:text-blue-600 text-white text-[20px]">
                  Contact Us
                </h1>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 h-[270px] text-white">
            <h1 className="font-bold text-[25px] mb-[10px] mt-[10px] text-left">
              Locations
            </h1>
            <div className="gap-2">
              <h1 className="text-[20px] text-left">
                Perungalattur, Tambaram <br />
                Chennai-600063
              </h1>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 mt-4 mb-4" />

        <h1 className="text-white text-[18px] pb-5 bg-hrcolor text-center font-serif">
          &copy; 2024 MAANC Technology. All Rights Reserved.
        </h1>
      </div>
    </>
  );
}

export default Footer;
