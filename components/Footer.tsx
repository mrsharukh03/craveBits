import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="bg-primary text-white p-2 rounded-lg inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight ml-2">
                Crave<span className="text-primary">Bites</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Premium quality fast food delivered straight to your door. Experience
              taste like never before with our carefully crafted menu.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#menu" className="text-gray-400 hover:text-primary transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link href="#offers" className="text-gray-400 hover:text-primary transition-colors">Special Offers</Link>
              </li>
              <li>
                <Link href="#reviews" className="text-gray-400 hover:text-primary transition-colors">Customer Reviews</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Food Street, Culinary City, FC 12345</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="text-primary shrink-0" size={20} />
                <span>hello@cravebites.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400 pb-2 border-b border-dark-border">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400 pb-2 border-b border-dark-border">
                <span>Saturday</span>
                <span className="text-white font-medium">10:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400 pb-2 border-b border-dark-border">
                <span>Sunday</span>
                <span className="text-primary font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-border md:flex items-center justify-between">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CraveBites. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
