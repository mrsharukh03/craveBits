"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md py-3 border-b border-dark-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-dark transition-colors">
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
          <span className="text-xl font-bold text-white tracking-tight">
            Crave<span className="text-primary">Bites</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/menu" className="text-gray-300 hover:text-white transition-colors font-medium">
            Full Menu
          </Link>
          <Link href="/#reservation" className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-1">
            Reservations <span className="relative flex h-2 w-2 ml-1"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span>
          </Link>
          <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors font-medium">
            Gallery
          </Link>
          <Link href="/#offers" className="text-gray-300 hover:text-white transition-colors font-medium">
            Offers
          </Link>
          <Link href="/admin" target="_blank" className="text-primary hover:text-primary-dark transition-colors font-bold flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-lg">
            Live Admin Dshbd
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors text-sm font-medium">
            <Phone size={16} className="text-primary" />
            <span>+1 (555) 123-4567</span>
          </button>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/98 z-[110] flex flex-col items-center justify-center backdrop-blur-xl md:hidden animate-fade-in">
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center gap-8 text-2xl font-medium w-full px-8">
            <Link
              href="/menu"
              className="text-white hover:text-primary transition-colors py-3 border-b border-white/5 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Full Menu
            </Link>
            <Link
              href="/#reservation"
              className="text-white hover:text-primary transition-colors py-3 border-b border-white/5 w-full text-center flex justify-center items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservations
              <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-primary transition-colors py-3 border-b border-white/5 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/#offers"
              className="text-white hover:text-primary transition-colors py-3 border-b border-white/5 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Special Offers
            </Link>
            <Link
              href="/admin"
              className="text-primary hover:text-primary-dark font-bold transition-colors py-3 w-full text-center flex justify-center items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Admin Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
