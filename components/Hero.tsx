import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
          alt="Delicious Food Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Superior dark gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-start lg:items-center text-left lg:text-center mt-20">
        <div className="inline-block px-5 py-2.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary font-bold text-sm mb-6 animate-fade-in shadow-lg shadow-primary/20" style={{ animationDelay: '0.1s' }}>
          🔥 Freshly Made. Always Premium.
        </div>
        
        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 max-w-5xl animate-fade-in leading-[1.1]" style={{ animationDelay: '0.2s' }}>
          Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff8c3a] to-accent">Extraordinary</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-12 animate-fade-in font-medium leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Order your favorite meals directly on WhatsApp for instant support, or find us exclusively on Swiggy and Zomato for lightning-fast delivery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {/* WhatsApp Order Button */}
          <Link href="/menu" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fbc5b] text-white px-8 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_4px_25px_0_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Order via WhatsApp
          </Link>
          
          <Link href="/menu" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-xl">
            Explore Menu
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Floating Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-start lg:justify-center gap-6 animate-fade-in opacity-80" style={{ animationDelay: '0.6s' }}>
           <p className="text-gray-400 font-medium uppercase tracking-widest text-sm w-full lg:w-auto">Available on</p>
           <div className="flex gap-4">
             <div className="bg-white/10 border border-white/5 backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
               <span className="bg-[#fc8019] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-black italic tracking-tighter">S</span>
               <span className="text-white font-bold tracking-tight">Swiggy</span>
             </div>
             <div className="bg-white/10 border border-white/5 backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
               <span className="bg-[#cb202d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-black italic tracking-tighter">Z</span>
               <span className="text-white font-bold tracking-tight">Zomato</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
