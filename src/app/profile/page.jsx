"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import React from 'react';
import { Mail, User, Image as ImageIcon, BookOpen, Edit } from "lucide-react";
import { ModalUser, UpdateUserModal } from '@/components/ModalUser';






const ProfilePage = () => {


  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });



const userData = authClient.useSession();
const user = userData.data?.user;
console.log(user,"user profile data");




  return (
<div className="p-4 sm:p-6">
  <Card className="max-w-6xl mx-auto bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-xl rounded-2xl overflow-hidden">
    
    {/* Top Header Section */}
    <div className="p-5 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-100 dark:border-zinc-800 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <Avatar className="h-20 w-20 md:h-32 md:w-32 border-2 border-zinc-100 dark:border-zinc-800 shadow-sm">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="bg-zinc-100 dark:bg-zinc-800 text-xl font-bold">
            {user?.name?.[0]}
          </Avatar.Fallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {user?.name}
          </h2>
          <p className="text-purple-600 dark:text-purple-400 text-sm md:text-base font-medium break-all">
            {user?.email}
          </p>
          <p className="text-zinc-500 text-xs mt-1">
        Member Since: {formattedDate}
      </p>
        </div>
      </div>
      

        {/* modal button */}
       <ModalUser />
       
      



    </div>

    {/* Bottom Content Section */}
    <div className="p-5 md:p-10 flex flex-col lg:flex-row gap-8">
      
      {/* Information List */}
      <div className="flex-1 w-full space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-50 dark:border-zinc-900 pb-3 gap-1">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <User size={16} />
            <span className="text-sm font-medium">Full Name</span>
          </div>
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm sm:text-base">{user?.name}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-50 dark:border-zinc-900 pb-3 gap-1">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <Mail size={16} />
            <span className="text-sm font-medium">Email Address</span>
          </div>
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm sm:text-base break-all">{user?.email}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-50 dark:border-zinc-900 pb-3 gap-1">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <ImageIcon size={16} />
            <span className="text-sm font-medium">Photo URL</span>
          </div>
          <span className="text-zinc-400 dark:text-zinc-500 text-xs truncate max-w-full sm:max-w-[200px]">
            {user?.image}
          </span>
        </div>
      </div>

     

    </div>
  </Card>
</div>
    );
};

export default ProfilePage;