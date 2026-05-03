"use client"
import React from 'react';
import { Clock, Users, Award, ShieldCheck, Rocket } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroBanner = () => {
  return (
    <section className="bg-[#f8fafc] min-h-screen flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 font-sans py-10">
      <div className="max-w-7xl mx-auto w-full">
        
       
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-12">
          
        
<div className="flex-1 space-y-6 text-center lg:text-left">
      <h1 className="text-[#1A1A1A] text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Upgrade Your <br />
        <span className="relative inline-flex items-center gap-3">
                Skills Today
                <Rocket className="w-10 h-10 md:w-14 md:h-14 text-orange-500" />
              </span>
            </h1>
            
            <p className="text-[#4A4A4A] text-lg md:text-xl font-medium max-w-md mx-auto lg:mx-0">
              Learn from industry experts and take your career to the next level.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#4338CA] transition-all">
                Explore Courses
              </button>
              <button className="bg-white text-[#1A1A1A] border-2 border-[#D1D5DB] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                Get Started
              </button>
            </div>
          </div>

         
          <div className="flex-1 w-full max-w-[650px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="rounded-3xl shadow-2xl overflow-hidden"
            >
       
              <SwiperSlide>
                <img 
                  src={"https://i.ibb.co.com/YTYLDm0R/Gemini-Generated-Image-xuumadxuumadxuum.png"} 
                  alt="Banner 1" 
                  className="w-full h-auto object-contain bg-white"
                />
              </SwiperSlide>

         
              <SwiperSlide>
                <img 
                  src={"https://i.ibb.co.com/Kc6s8wby/Gemini-Generated-Image-98bpb798bpb798bp.png"} 
                  alt="Banner 2" 
                  className="w-full h-auto object-contain bg-white"
                />
              </SwiperSlide>

            
              <SwiperSlide>
                <img 
                  src={"https://i.ibb.co.com/jv3nYmP5/Gemini-Generated-Image-8jjiqd8jjiqd8jji.png"} 
                  alt="Banner 3" 
                  className="w-full h-auto object-contain bg-white"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-white mt-8 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-2xl text-[#4F46E5]">
              <Clock size={28} />
            </div>
            <span className="text-[#1A1A1A] text-lg font-semibold">Learn at your pace</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-2xl text-[#4F46E5]">
              <Users size={28} />
            </div>
            <span className="text-[#1A1A1A] text-lg font-semibold">Industry Experts</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-2xl text-[#4F46E5]">
              <Award size={28} />
            </div>
            <span className="text-[#1A1A1A] text-lg font-semibold">Certificates</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-2xl text-[#4F46E5]">
              <ShieldCheck size={28} />
            </div>
            <span className="text-[#1A1A1A] text-lg font-semibold">Lifetime Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;