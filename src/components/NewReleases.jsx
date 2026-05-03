import { Card } from "@heroui/react";
import { Flame, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const NewReleases = () => {
  return (
    <div>
      <section className="mb-12 container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold flex items-center gap-2">
            <Flame className="text-orange-500 fill-orange-500" size={20} /> New
            Releases
          </h2>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            View All
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            

            <Card className="flex flex-col h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video mb-4 flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg"
                  alt="Mastering Mobile App Development"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[3rem]">
                    Mastering Mobile App Development
                  </h3>
                </div>
                <div className="flex items-center justify-between py-4 mt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    <p>22 hours</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        4.8
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      (Intermediate)
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="w-full py-2.5 text-sm font-semibold rounded-xl border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </Card>






            <Card className="flex flex-col h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video mb-4 flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/13451104/pexels-photo-13451104.jpeg"
                  alt="Graphic Design Theory"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[3rem]">
                    Graphic Design Theory
                  </h3>
                </div>
                <div className="flex items-center justify-between py-4 mt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    <p>18 hours</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        4.7
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      (Beginner)
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="w-full py-2.5 text-sm font-semibold rounded-xl border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </Card>








            <Card className="flex flex-col h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video mb-4 flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
                  alt="Cybersecurity Essentials"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[3rem]">
                    Cybersecurity Essentials
                  </h3>
                </div>
                <div className="flex items-center justify-between py-4 mt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    <p>28 hours</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        4.9
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      (All Levels)
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="w-full py-2.5 text-sm font-semibold rounded-xl border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </Card>

         






            <Card className="flex flex-col h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video mb-4 flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Business Communication Skills"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[3rem]">
                    Business Communication Skills
                  </h3>
                </div>
                <div className="flex items-center justify-between py-4 mt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    <p>8 hours</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        4.6
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      (Beginner)
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="w-full py-2.5 text-sm font-semibold rounded-xl border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NewReleases;