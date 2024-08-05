import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex items-center overflow-hidden">
      <div className="hero-left flex-1 flex flex-col justify-center gap-5 pl-[50px] md:pl-[80px] leading-[1.1]">
        <h2 className="text-[#090909] text-[26px] md:text-[32px] font-semibold mb-4">
          NEW ARRIVALS ONLY
        </h2>
        <div className="flex flex-col items-start gap-5 mb-6">
          <div className="flex items-center gap-4">
            <p className="text-[#171717] text-[2rem] md:text-[4rem] font-bold leading-tight">new</p>
            <img src={hand_icon} alt="Hand Icon" className="w-[50px] md:w-[100px]" />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#171717] text-[2rem] md:text-[4rem] font-bold leading-tight">collections</p>
            <p className="text-[#171717] text-[2rem] md:text-[4rem] font-bold leading-tight">for everyone</p>
          </div>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-full mt-[30px] bg-red-600 text-white text-[22px] font-medium">
          <span>Latest collection</span>
          <img src={arrow_icon} alt="Arrow Icon" className="w-5 h-5" />
        </div>
      </div>

      <div className="hero-right flex items-center justify-center flex-1 max-h-full overflow-hidden">
        <img src={hero_image} alt="Hero" className="max-w-full h-auto object-contain max-h-[80vh]" />
      </div>
    </div>
  );
}

export default Hero;
