import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Card } from '@heroui/react';

const CourseCard = ({ course }) => {
  return (
    <Card className="flex flex-col h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      
      
      {/* Thumbnail Section */}
      <div className="relative w-full aspect-video mb-4 flex-shrink-0">
        <Image
          src={course.image}
          alt={course.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {/* Title Container */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[3rem]">
            {course.title}
          </h3>
        </div>

        {/* Rating and Duration Section */}
        <div className="flex items-center justify-between py-4 mt-2 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              <p>{course.duration}</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {course.rating}
              </span>
            </div>
            <span className="text-[10px] text-zinc-500">
              ({course.reviewsCount} reviews)
            </span>
          </div>
        </div>

        {/* View Button Section */}
        <div className="mt-auto">
          <Link href={`/courses/${course.id}`} className="block w-full">
            <button className="w-full py-2.5 text-sm font-semibold rounded-xl border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;