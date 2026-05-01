import CourseCard from '@/components/CourseCard';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const AllCoursesPage = async () => {
    const res = await fetch('https://skill-sphere-online-learning-platfo-seven.vercel.app/data.json');
    const courses = await res.json();
   


    return (
        <div className="container mx-auto px-4 py-8 " >

            <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
  <h2 className="text-xl font-extrabold flex items-center gap-2">
    <Lightbulb className="text-orange-500 fill-orange-500" size={20} />
    All Courses
  </h2>


  <div className="relative w-full sm:w-64">
    <input
      type="text"
      placeholder="Search courses..."
      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
    />
    

    <svg
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >

    </svg>
  </div>
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {courses.map((course)=>(<CourseCard key={course.id} course={course} ></CourseCard>))}
            </div>
            
        </div>

    );
};

export default AllCoursesPage;