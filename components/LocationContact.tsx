import React from "react";
import { MapPin, Phone, Mail, Clock, Wifi, Car, Wind, Zap } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Visit Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">We're Waiting For You Here</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400">123 Food Street, Culinary City,<br />FC 12345</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-400">Mon - Fri: 10:00 AM - 11:00 PM<br />Sat - Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Contact Details</h4>
                  <p className="text-gray-400">+1 (555) 123-4567<br />hello@cravebites.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-7/12 h-[400px] lg:h-auto min-h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528005886!2d-74.14448719283733!3d40.6976312330605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1709477026569!5m2!1sen!2sbd" 
              className="absolute inset-0 w-full h-full border-0 filter grayscale invert contrast-125 opacity-80" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* AMENITIES FLOATING BADGES */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
               <div className="bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-white font-medium flex items-center gap-2.5 shadow-xl hover:bg-white/10 transition-colors">
                 <Wifi size={18} className="text-primary" /> 
                 <span className="text-sm border-l border-white/20 pl-2.5">Free Premium WiFi</span>
               </div>
               <div className="bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-white font-medium flex items-center gap-2.5 shadow-xl hover:bg-white/10 transition-colors">
                 <Car size={18} className="text-primary" /> 
                 <span className="text-sm border-l border-white/20 pl-2.5">Valet Parking</span>
               </div>
               <div className="bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-white font-medium flex items-center gap-2.5 shadow-xl hover:bg-white/10 transition-colors">
                 <Wind size={18} className="text-primary" /> 
                 <span className="text-sm border-l border-white/20 pl-2.5">Fully Air Conditioned</span>
               </div>
               <div className="bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-white font-medium flex items-center gap-2.5 shadow-xl hover:bg-white/10 transition-colors">
                 <Zap size={18} className="text-primary" /> 
                 <span className="text-sm border-l border-white/20 pl-2.5">100% Power Backup</span>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
