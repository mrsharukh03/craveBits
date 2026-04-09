"use client";

import React, { useState } from "react";
import { Calendar, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-5/12 bg-gradient-to-br from-primary to-primary-dark p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Book a Table</h2>
              <p className="text-white/80 mb-8 font-medium">
                Reserve your spot ahead of time and avoid waiting lines. Perfect for dates, family dinners, and parties.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <p className="text-sm text-white/80">Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Party Size</h4>
                  <p className="text-sm text-white/80">Up to 20 guests at a time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-8 md:p-12">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Reservation Confirmed!</h3>
                <p className="text-gray-400">
                  We have received your booking request. You will get a confirmation via SMS shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Name</label>
                    <input required type="text" placeholder="John Doe" className="bg-transparent border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Phone</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="bg-transparent border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium flex items-center gap-2"><Calendar size={14} /> Date</label>
                    <input required type="date" className="bg-transparent border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium flex items-center gap-2"><Clock size={14} /> Time</label>
                    <input required type="time" className="bg-transparent border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-medium flex items-center gap-2"><Users size={14} /> Guests</label>
                  <select required className="bg-transparent border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [&>option]:bg-dark-card">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5+ People</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-medium">Special Requests (Optional)</label>
                  <textarea rows={2} placeholder="Anniversary, allergy, etc." className="bg-transparent border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="mt-2 w-full bg-white text-dark-bg hover:bg-gray-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                  Confirm Reservation <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
