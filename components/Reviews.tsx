import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Local Foodie",
      image: "https://i.pravatar.cc/150?img=47",
      content: "The best burger I've had in a long time! The ingredients tasted incredibly fresh, and the delivery was super fast. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      image: "https://i.pravatar.cc/150?img=11",
      content: "Ordering via WhatsApp is a game-changer. So simple, no hidden fees, and the pizza arrived piping hot. CraveBites never disappoints.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Food Blogger",
      image: "https://i.pravatar.cc/150?img=5",
      content: "Beautiful presentation even for takeout. The flavors are balanced perfectly, and the portions are very generous for the price.",
      rating: 4
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Customers Say</h3>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Let our satisfied community tell you about 
            their CraveBites experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-dark-card border border-dark-border rounded-3xl p-8 relative">
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-8 opacity-5">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={review.image} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-bold">{review.name}</h5>
                  <p className="text-primary text-sm font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
