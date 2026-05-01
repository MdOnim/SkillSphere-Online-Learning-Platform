import React from "react";
import {
  Flame,
  Lightbulb,
  Trophy,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import CourseCard from "./CourseCard";

const TopCourse = async () => {
    const res = await fetch('https://skill-sphere-online-learning-platfo-seven.vercel.app/data.json');
    const courses = await res.json();
    console.log(courses," courses data");
    const allPopularCourses = courses.filter(course => course.rating >= 4.5);
    const popularCourses = allPopularCourses.slice(0, 4);
    console.log(popularCourses, " top 4 popular courses");


  return (
    <div className="bg-[#F8FAFC] min-h-screen p-8 font-sans text-slate-900">
      {/* Popular Courses Section */}
      <section className="mb-12 container mx-auto ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold flex items-center gap-2">
            <Flame className="text-orange-500 fill-orange-500" size={20} />{" "}
            Popular Courses
          </h2>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            View All
          </button>
        </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {popularCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
        
      </section>





      {/* Learning Tips Section */}
      <section className="mb-12 container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold flex items-center gap-2">
            <Lightbulb className="text-amber-400 fill-amber-400" size={20} />{" "}
            Learning Tips
          </h2>
          <button className="text-sm font-semibold text-indigo-600">
            View All
          </button>
        </div>

        <div className="bg-indigo-50/40 border border-indigo-100/50 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
         

         {/* item-1 */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <Clock className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 text-sm">
                Time Management
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Plan your study time and stick to it.
              </p>
            </div>
          </div>

        {/* item-2 */}
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-indigo-100 pt-8 md:pt-0 md:pl-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <Target className="text-emerald-500" />
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 text-sm">
                Active Practice
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Practice more to remember better.
              </p>
            </div>
          </div>

          {/* item-3 */}
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-indigo-100 pt-8 md:pt-0 md:pl-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <TrendingUp className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 text-sm">
                Stay Consistent
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Consistency is the key to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Instructors Section */}
      <section className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold flex items-center gap-2">
            <Trophy className="text-amber-500 fill-amber-500" size={20} /> Top
            Instructors
          </h2>
          <button className="text-sm font-semibold text-indigo-600">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Instructor 1 */}
          <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer">
            <img
              src="/images/inst1.jpg"
              alt="Instructor"
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">John Doe</h4>
              <p className="text-[11px] font-medium text-indigo-600">
                Web Developer
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">1200 Students</p>
            </div>
          </div>

          {/* Instructor 2 */}
          <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer">
            <img
              src="/images/inst2.jpg"
              alt="Instructor"
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Sarah Khan</h4>
              <p className="text-[11px] font-medium text-indigo-600">
                UI/UX Designer
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">950 Students</p>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer">
            <img
              src="/images/inst3.jpg"
              alt="Instructor"
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Alex Smith</h4>
              <p className="text-[11px] font-medium text-indigo-600">
                Digital Marketer
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">800 Students</p>
            </div>
          </div>

          {/* Instructor 4 */}
          <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer">
            <img
              src="/images/inst4.jpg"
              alt="Instructor"
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Emily Clark</h4>
              <p className="text-[11px] font-medium text-indigo-600">
                Data Analyst
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">670 Students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCourse;
