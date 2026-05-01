import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#050B1B] text-white py-10 md:py-16 px-5 md:px-12 lg:px-20 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/50 rounded-sm transform rotate-45"></div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                SkillSphere
              </h2>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
              Empowering learners worldwide with quality education.
            </p>
            <div className="flex gap-2 md:gap-3">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaInstagram,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800/40 hover:bg-indigo-600 rounded-full transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <h3 className="text-sm md:text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-white transition-colors"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h3 className="text-sm md:text-lg font-bold">Categories</h3>
            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h3 className="text-sm md:text-lg font-bold">Support</h3>
            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1 space-y-4">
            <h3 className="text-sm md:text-lg font-bold">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <MdEmail size={18} className="text-indigo-400 shrink-0" />
                <span className="break-all">support@skillsphere.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone size={18} className="text-indigo-400 shrink-0" />
                <span>+880 18********</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-widest">
            © 2024 SKILLSPHERE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
