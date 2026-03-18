"use client";

import React from "react";

export default function FloatingWhatsApp() {
  const phoneNumber = "YOUR_PHONE_NUMBER";
  
  const handleChat = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20your%20menu%20and%20delivery.`, "_blank");
  };

  return (
    <button
      onClick={handleChat}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1fbc5b] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group animate-zoom-in"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-white">
        Need help? Chat with us!
      </div>
      
      {/* Notification Dot */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </button>
  );
}
