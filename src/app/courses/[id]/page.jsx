import React from 'react';
import { Star, User, Clock, BookOpen, Globe, Award, Heart } from 'lucide-react';
import Link from 'next/link';
const PhotoDetailsPage = async ({params}) => {
    const {id} = await params
    console.log(id, "id");

    const res = await fetch('https://skill-sphere-online-learning-platfo-seven.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(course => course.id === Number(id));
  
    return (
        

<div  className="bg-[#F8FAFC] p-2">
    <div className="max-w-5xl mx-auto bg-white border border-zinc-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col md:flex-row p-4 sm:p-6 md:p-8 font-sans">
  

  <div className="w-full md:w-[45%] shrink-0 relative aspect-[4/3] md:aspect-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#0a1222]">
    <img 
      src={course.image}
      alt={course.title} 
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />
  </div>



  <div className="flex-1 md:pl-8 lg:pl-10 flex flex-col justify-between py-4">
    
    <div className="space-y-5 md:space-y-6">
      

      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight">
          {course.title}
        </h2>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
          <p className="text-sm sm:text-base text-zinc-500">
            by <span className="text-blue-600 font-semibold">{course.instructor}</span>
          </p>
          <span className="text-[10px] sm:text-[11px] bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full border border-blue-100 font-bold uppercase tracking-wider">
            {course.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-3 border-y border-zinc-50">
        
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="text-lg sm:text-xl font-bold text-zinc-900">{course.rating}</span>
          <span className="text-zinc-400 text-xs sm:text-sm font-medium">
            ({course.reviews} Reviews)
          </span>
        </div>

        <div className="flex items-center gap-2 text-zinc-600">
          <User className="w-5 h-5 text-zinc-400" />
          <span className="text-xs sm:text-sm font-semibold">
            20,000+ Students
          </span>
        </div>
      </div>


      <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
        {course.description}
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 pt-2 sm:pt-4">
        
        <div className="flex justify-between items-center text-sm sm:text-base">
          <div className="flex items-center gap-2 text-zinc-400">
            <Award className="w-4 h-4" />
            <span>{course.level}</span>
          </div>
          <span className="text-zinc-900 font-bold">Beginner</span>
        </div>

        <div className="flex justify-between items-center text-sm sm:text-base">
          <div className="flex items-center gap-2 text-zinc-400">
            <Clock className="w-4 h-4" />
            <span>Duration</span>
          </div>
          <span className="text-zinc-900 font-bold">{course.duration}</span>
        </div>

        <div className="flex justify-between items-center text-sm sm:text-base">
          <div className="flex items-center gap-2 text-zinc-400">
            <BookOpen className="w-4 h-4" />
            <span>Lessons</span>
          </div>
          <span className="text-zinc-900 font-bold">120</span>
        </div>

        <div className="flex justify-between items-center text-sm sm:text-base">
          <div className="flex items-center gap-2 text-zinc-400">
            <Globe className="w-4 h-4" />
            <span>Language</span>
          </div>
          <span className="text-zinc-900 font-bold">English</span>
        </div>
      </div>
    </div>


    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
      
     <Link href="/courses" className="w-full sm:flex-1"  >
      <button className="w-full sm:flex-[2] bg-zinc-950 text-white text-sm sm:text-base font-bold py-4 sm:py-5 rounded-2xl shadow-lg shadow-zinc-200 active:scale-[0.98] transition-transform">
        Enroll Now
      </button>
     </Link>

      <button className="w-full sm:flex-1 border-2 border-zinc-100 rounded-2xl text-zinc-500 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold hover:bg-zinc-50 transition-colors py-4 sm:py-0">
        <Heart className="w-5 h-5" />
        Add to Wishlist
      </button>

    </div>
  </div>
</div>
</div>

);
};

export default PhotoDetailsPage;