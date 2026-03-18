import React from "react";
import Image from "next/image";
import { Tag } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "Buy 2 Get 1 Free",
      description: "On all Medium & Large Pizzas. Valid till weekend.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      code: "B2G1FREE",
      bgColor: "from-orange-600/20 to-orange-900/40"
    },
    {
      id: 2,
      title: "Combo Meal Saver",
      description: "Burger + Fries + Drink for just $12.99",
      image: "https://images.unsplash.com/photo-1594212848116-b8dbbd501f2f?q=80&w=2070&auto=format&fit=crop",
      code: "COMBO20",
      bgColor: "from-red-600/20 to-red-900/40"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Special Deals</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Exclusive Offers & Combos</h3>
          </div>
          <button className="text-white hover:text-accent font-medium underline transition-colors shrink-0">
            View All Offers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className={`relative rounded-3xl overflow-hidden group border border-white/5 bg-gradient-to-br ${offer.bgColor}`}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={offer.image} 
                  alt={offer.title} 
                  fill 
                  className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end min-h-[300px]">
                <div className="bg-accent text-white font-bold text-xs uppercase px-3 py-1 rounded-full w-max mb-4 flex items-center gap-1">
                  <Tag size={12} />
                  Limited Time
                </div>
                <h4 className="text-3xl font-bold text-white mb-3">{offer.title}</h4>
                <p className="text-gray-300 mb-6 text-lg">{offer.description}</p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-bold transition-colors">
                    Claim Offer
                  </button>
                  <div className="border border-white/20 border-dashed rounded-xl px-4 py-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-gray-300">
                    <span className="text-sm uppercase tracking-wide">Use Code:</span>
                    <span className="font-mono font-bold text-white">{offer.code}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
