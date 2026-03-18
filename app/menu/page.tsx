"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Search } from "lucide-react";
import { MENU_ITEMS, CATEGORIES } from "@/data/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-dark-bg min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header & Search */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Full Menu</h1>
          <p className="text-gray-400 text-lg mb-8">
            Explore our vast variety of dishes. From hot beverages to spicy pizzas, we have something to satisfy every craving.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for your favorite food (e.g., Burger, Soup...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-card border border-dark-border text-white px-6 py-4 rounded-full pl-14 focus:outline-none focus:border-primary transition-colors shadow-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-10 pb-4 snap-x">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-bold whitespace-nowrap snap-center transition-all ${
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
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <h3 className="text-2xl font-bold mb-2">No items found</h3>
            <p>Try searching for something else or changing the category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-dark-card border border-dark-border rounded-3xl overflow-hidden group hover:border-primary/30 transition-colors flex flex-col h-full shadow-lg shadow-black/40"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-dark-border">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-50" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white font-bold text-xs uppercase px-3 py-1 rounded-full border border-white/10">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1 bg-gradient-to-b from-dark-card to-dark-bg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white pr-2 leading-tight">{item.name}</h4>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">₹{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-5 flex-1">{item.description}</p>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    {/* Highlighted WhatsApp Add to Cart */}
                    <button
                      onClick={(e) => { e.stopPropagation(); addToCart({ id: item.id, name: item.name, price: item.price, image: item.image }); }}
                      className="w-full bg-[#25D366] hover:bg-[#1fbc5b] text-white font-bold py-3 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn relative overflow-hidden z-10"
                    >
                      <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span className="text-sm">Add (WhatsApp)</span>
                    </button>
                    
                    {/* Swiggy and Zomato Row */}
                    <div className="flex gap-2">
                      <a 
                        href={item.swiggyLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 bg-[#1a1a1a] hover:bg-[#fc8019] text-gray-300 hover:text-white border border-white/5 hover:border-[#fc8019] py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 group/swiggy text-xs font-bold shadow-sm"
                      >
                        <span className="bg-[#fc8019] text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black italic tracking-tighter group-hover/swiggy:bg-white group-hover/swiggy:text-[#fc8019] transition-colors">S</span> 
                        Swiggy
                      </a>
                      <a 
                        href={item.zomatoLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 bg-[#1a1a1a] hover:bg-[#cb202d] text-gray-300 hover:text-white border border-white/5 hover:border-[#cb202d] py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 group/zom text-xs font-bold shadow-sm"
                      >
                        <span className="bg-[#cb202d] text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black italic tracking-tighter group-hover/zom:bg-white group-hover/zom:text-[#cb202d] transition-colors">Z</span> 
                        Zomato
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
