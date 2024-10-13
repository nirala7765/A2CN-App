import React, { useState } from "react";
import axios from "axios";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

function ContactLeads() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const { name, email,phone,company, message } = formData

  const handleChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("https://v1.nocodeapi.com/a2cn/google_sheets/WxWgTVqpvVCHFsqr?tabId=Leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, phone,company,message,new Date().toLocaleDateString()]]),
      })

      setFormData({...formData,name:"",email:"",phone:"",company:"",message:""})

      alert("Your Message Sent Successfully! to the Team, They will Contact you soon")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-newbg" id="contactusForm">
      <h1 className="text-[#09D8A1] text-[35px] font-bold">Contact Us</h1>

      <h1 className="text-white md:text-[21px] text-[15px]">Any questions or remarks? Just write us a message!</h1>

      <div className="bg-[#09D8A1] w-[90%] rounded-md mx-auto lg:h-[600px] mt-[30px] relative md:flex  gap-4 py-10">
        <div className="bg-newbg lg:w-[45%] w-[90%] mx-auto lg:h-[400px] lg:mt-[55px] mt-[20px] lg:ml-5 rounded-md text-white gap-5">
          <h1 className="text-[30px]  text-[#09D8A1] mt-[10px] mb-8">Contact Information</h1>
          <div className="flex items-center text-[20px] gap-3 mt-2 lg:ml-[80px] ml-[50px]">
            <LuPhoneCall className="items-start mt-[6px]" />
            <h1>+91 9608923255</h1>
          </div>

          <div className="flex items-center text-[20px] gap-3 mt-2  lg:ml-[80px] ml-[50px]">
            <MdOutlineMailOutline className="items-start mt-[6px]" />
            <h1>info.maanc@gmail.com</h1>
          </div>

          <div className="flex items-center text-[20px] gap-3 mt-2 lg:ml-[80px] ml-[50px]">
            <MdOutlineLocationOn className="items-start mt-[6px]" />
            <h1>Chennai</h1>
          </div>

          <div className="text-white flex gap-3 text-[35px] justify-center lg:mt-[50px] my-[30px] pb-[30px] lg:pb-0">
            <a href="https://www.facebook.com/a2cn.in" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/a2cn.in/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/company/100496029/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://wa.link/6yj9sy" target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare />
            </a>
          </div>
        </div>

        <div className="bg-transparent lg:w-[50%] p-5 rounded-md">
          <form onSubmit={handleSubmit} className="">
            <h1 className="text-[30px] font-bold mb-5">Get in Touch</h1>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company (optional)"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="bg-newbg  text-white font-bold py-3 px-11 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </Button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactLeads;
