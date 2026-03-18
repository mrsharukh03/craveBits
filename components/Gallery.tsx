import React from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
  ];

  return (
    <section className="bg-black py-20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Instagram</h2>
          <h3 className="text-3xl font-bold text-white">#FollowOurCravings</h3>
        </div>
        <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-xl transition-colors font-medium">
          Follow @cravebites
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 w-full">
        {images.map((src, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden group border border-black">
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 ease-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
