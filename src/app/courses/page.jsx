"use client";

import CourseCard from '@/components/CourseCard';
import { Lightbulb } from 'lucide-react';
import React, { useEffect, useState } from 'react';



const AllCoursesPage =  () => {



const [search, setSearch] = useState('');
const [courses, setCourses] = useState([]);

   
useEffect(() => {

const dataFecth = async  ()=>{
const res = await fetch('https://skill-sphere-online-learning-platfo-seven.vercel.app/data.json');
const courses = await res.json();
setCourses(courses);
}
dataFecth();
}, []);


  
const handleSearch = (event) => {
   setSearch(event.target.value);
  
};

const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(search.toLocaleLowerCase()));






 return (
        <div className="container mx-auto px-4 py-8 " >

            <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
  <h2 className="text-xl font-extrabold flex items-center gap-2">
    <Lightbulb className="text-orange-500 fill-orange-500" size={20} />
    All Courses
  </h2>

{/* Search Bar */}
 <div className="relative w-full sm:w-64">
  <input
    type="text"
    value={search}
    onChange={handleSearch}
    placeholder="Search courses..."
    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
  />
  
  <svg
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
</div>









</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
         
  <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 border border-dashed border-gray-200 rounded-3xl bg-gray-50/20">
  <div className="bg-white p-6 rounded-full shadow-sm mb-6">
    <Lightbulb className="text-gray-200" size={50} />
  </div>
  
  <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
    No Results Found
  </h3>

  <button 
    onClick={() => setSearch("")} 
    className="px-10 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 transition-all active:scale-95 shadow-md"
  >
    View All Courses
  </button>
</div>


        )}
      </div>
            
        </div>

    );
};

export default AllCoursesPage;