"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { MENU_ITEMS } from "@/data/menuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const { addToCart } = useCart();

  const categories = ["Popular", "BURGERS", "PIZZAS", "HOT BEVERAGES"];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === "Popular") return item.isPopular;
    return item.category === activeCategory;
  }).slice(0, 6); // Only show 6 items on the home page

  return (
    <section id="menu" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Menu Preview</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Explore Delicious Options</h3>
          <p className="text-gray-400 text-lg">
            A sneak peek into our best sellers and most loved dishes.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]"
                  : "bg-dark-card text-gray-400 hover:text-white border border-dark-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-none">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-dark-card border border-dark-border rounded-3xl overflow-hidden group hover:border-primary/30 transition-colors animate-fade-in flex flex-col h-full shadow-lg shadow-black/40"
            >
              <div className="relative h-64 w-full overflow-hidden border-b border-dark-border">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-50" />
                {item.isPopular && (
                  <div className="absolute top-4 left-4 bg-accent text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-lg">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-dark-card to-dark-bg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white pr-2">{item.name}</h4>
                  <span className="text-xl font-bold text-primary whitespace-nowrap">₹{item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-1">{item.description}</p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  {/* Highlighted WhatsApp Add to Cart */}
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart({ id: item.id, name: item.name, price: item.price, image: item.image }); }}
                    className="w-full bg-[#25D366] hover:bg-[#1fbc5b] text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn relative overflow-hidden z-10"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>Add to Cart (WhatsApp)</span>
                  </button>
                  
                  {/* Swiggy and Zomato Row */}
                  <div className="flex gap-3">
                    <a 
                      href={item.swiggyLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 bg-[#1a1a1a] hover:bg-[#fc8019] text-gray-300 hover:text-white border border-white/5 hover:border-[#fc8019] py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 group/swiggy text-sm font-bold shadow-sm"
                    >
                      <span className="bg-[#fc8019] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black italic tracking-tighter group-hover/swiggy:bg-white group-hover/swiggy:text-[#fc8019] transition-colors">S</span> 
                      Swiggy
                    </a>
                    <a 
                      href={item.zomatoLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 bg-[#1a1a1a] hover:bg-[#cb202d] text-gray-300 hover:text-white border border-white/5 hover:border-[#cb202d] py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 group/zom text-sm font-bold shadow-sm"
                    >
                      <span className="bg-[#cb202d] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black italic tracking-tighter group-hover/zom:bg-white group-hover/zom:text-[#cb202d] transition-colors">Z</span> 
                      Zomato
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/menu" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] flex items-center gap-2">
            View Full Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
