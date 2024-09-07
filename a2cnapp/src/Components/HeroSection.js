import React, { useState, useEffect } from "react";
import heroimage from "../Images/heroImage.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function HeroSection() {
  const words = ["Your Development Partner", "Your Tech Innovator", "Your Business Solution", "Your Growth Catalyst"];
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
    <>
      <div>
        <div className="h-[600px] md:h-auto bg-hrcolor relative">
          <div className="w-5/6 h-full mx-auto flex flex-col md:flex-row bg-transparent">
            {/* Left Section */}
            <div className="md:w-1/2 h-full bg-transparent flex flex-col justify-center">
              <div className="mt-[10px] md:mt-[150px]">
                <h1 className="text-2xl md:text-5xl font-extrabold text-start ml-[30px] tracking-wide">
                  MAANC:{" "}
                  <span className={`animated-word ${animationClass}`}>
                    {words[currentWord]}
                  </span>
                </h1>

                {/* Animated button */}
                <div className="text-start mt-6 ml-[30px]">
                  <Link to="https://maanc.com/contact-us">
                    <Button className="h-12 px-8 rounded-full bg-newbg text-white hover:bg-black transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                      Get In Touch With Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/2 h-full bg-transparent flex justify-center items-center">
              <img
                className="w-[660px] h-[330px] md:h-[550px] mt-[20px] md:mt-0 md:ml-10 transition-transform duration-500 ease-in-out transform hover:scale-105"
                src={heroimage}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
