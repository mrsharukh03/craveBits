import React from "react";
import Image from "next/image";

export default function GalleryPage() {
  const collections = [
    {
      title: "Signature Burgers",
      description: "Our juiciest creations.",
      images: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
      ]
    },
    {
      title: "Authentic Pizzas",
      description: "Hand-tossed and stone-baked perfection.",
      images: [
        "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
      ]
    },
    {
      title: "Hot Beverages",
      description: "Warmth in every cup.",
      images: [
        "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1782&auto=format&fit=crop",
      ]
    },
    {
      title: "Sizzling Momos & Sides",
      description: "Bite-sized happiness.",
      images: [
        "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop",
      ]
    }
  ];

  return (
    <div className="bg-dark-bg min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Culinary Gallery</h1>
          <p className="text-gray-400 text-lg">
            Take a visual journey through our diverse menu. We believe that we eat with our eyes first!
          </p>
        </div>

        <div className="space-y-20">
          {collections.map((collection, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">{collection.title}</h2>
                  <p className="text-primary mt-1">{collection.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {collection.images.map((src, imgIdx) => (
                  <div key={imgIdx} className="relative aspect-square overflow-hidden rounded-3xl group shadow-2xl border border-dark-border">
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-black/80 px-4 py-2 rounded-full text-white font-bold tracking-widest text-sm uppercase">
                        View Item
                      </div>
                    </div>
                    <Image
                      src={src}
                      alt={`${collection.title} image ${imgIdx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
