import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Button } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correct image imports
import DM from "../Images/DM.jpeg";
import MBC from "../Images/mbc.jpeg";
import ECM from "../Images/ecm.jpg";
import HC from "../Images/HC.png";

function OurWork() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 slides on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
          dots: false, // Keep dots visible on mobile
        },
      },
    ],
  };
  

  // Project data


  
  
  const projects = [
    {
      title: "My Bike Clinic",
      description: "A complete digital solution for managing bike services and customer appointments.",
      technologies: "React, Node.js, Express, MongoDB",
      image: MBC, // Use the imported image directly
    },
    {
      title: "E-commerce Platform",
      description: "Developed a fully functional e-commerce platform with secure payment integration.",
      technologies: "Shopify, React, TailwindCSS",
      image: ECM, // Use the imported image directly
    },
    {
      title: "Digital Marketing Dashboard",
      description: "A dashboard to track and optimize marketing campaigns for better performance.",
      technologies: "React, Firebase, Google Analytics API",
      image: DM, // Use the imported image directly
    },
    {
      title: "Mobile App for Healthcare",
      description: "An intuitive mobile app for booking appointments and tracking health records.",
      technologies: "React Native, Firebase, Stripe API",
      image: HC, // Use the imported image directly
    },
  ];

  // Word animation logic
  const words = ["Innovative Solutions", "Tailored Technologies", "Scalable Platforms", "Cutting-Edge Tools"];
  const [currentWord, setCurrentWord] = useState(0);
  const [nextWord, setNextWord] = useState(1);
  const [animationClass, setAnimationClass] = useState("grow");

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setAnimationClass("shrink"); // Shrinking current word first
      setTimeout(() => {
        setCurrentWord(nextWord);
        setNextWord((nextWord + 1) % words.length);
        setAnimationClass("grow"); // Growing new word
      }, 1000); // Timing for the shrink before grow happens
    }, 4000); // Total cycle for word change

    return () => clearInterval(wordChangeInterval);
  }, [nextWord]);

  return (
    <div className='bg-newbg'>
      <Header />

      {/* Top Hero Section */}
      <section className="pb-6 md:h-auto bg-hrcolor">
        <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse md:flex-row bg-transparent">
          <div className="md:w-1/2 bg-transparent">
            <div className="mt-[10px] lg:mt-[200px] md:mb-[15px]">
              <h1 className="text-start text-2xl md:text-6xl text-white font-extrabold mt:-[20px] md:mt-[100px] ml-[30px]">
                {/* Word animation in the hero section */}
                <span className={`transition-all duration-1000 ease-in-out ${animationClass}`}>
                  {words[currentWord]}
                </span>
              </h1>
              <p className="text-start text-lg md:text-xl mt-4 ml-[30px] text-gray-200">
                We build <span className="font-bold text-teal-900">{words[currentWord]}</span> to drive business success, ensuring long-term growth and sustainability.
              </p>

              <div className="justify-start text-start mt-4 md:mt-7">
                <Link to="https://maanc.com/contact-us">
                  <Button className="h-12 px-8 rounded-full bg-newbg text-white hover:bg-black transition duration-300 ease-in-out transform hover:scale-105 shadow-lg ml-9">
                    Get In Touch With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-transparent lg:mt-0 md:mt-9 mt-0">
            <Player
              className=""
              src="https://lottie.host/0d7ac3b4-3037-474e-8ed7-76a5229655e1/DiWpVNkxF1.json"
              loop
              autoplay
              speed={0.5}
            />
          </div>
        </div>
      </section>

      {/* Main Slider Section */}
      <main className="py-8 md:py-16">
  {/* Wrapper with margin for mobile and larger screens */}
  <div className="w-full md:w-4/5 mx-auto px-4 md:px-0">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4 md:mb-6">
      Delivering Innovation Across Every Industry
    </h2>
    <p className="text-center text-base md:text-lg text-gray-300 mb-8 md:mb-12">
      Our portfolio spans multiple industries, from healthcare to e-commerce, demonstrating our ability to adapt and innovate. With a focus on user experience and modern technology, we aim to solve real-world problems through our software solutions.
    </p>

    {/* Slider with responsive project display */}
    <Slider {...settings} className='mx-6'>
      {projects.map((project, index) => (
        <div key={index} className="p-2 md:p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <p className="text-gray-500">Technologies: {project.technologies}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  {/* Bottom Call-to-Action Section */}
  <div className="w-full text-center text-gray-300 py-8 md:py-12 px-4 md:px-0">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Next Project?</h3>
    <p className="text-base md:text-lg mb-6">
      Let Maanc Technology help you turn your vision into reality. Get in touch with us today to discuss your project requirements.
    </p>
    <Link to="https://maanc.com/contact-us">
      <Button className="h-12 px-8 rounded-full shadow-teal-700 bg-newbg text-white hover:bg-black transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
        Contact Us Now
      </Button>
    </Link>
  </div>
</main>


      <Footer />
    </div>
  );
}

export default OurWork;
