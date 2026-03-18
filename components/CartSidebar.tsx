"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleOrderWhatsApp = () => {
    if (cart.length === 0) return;

    const phoneNumber = "9120401599";
    let message = "Hello *CraveBites* team! 👋\n\nI would like to place an order:\n\n";

    cart.forEach((item) => {
      message += `👉 *${item.name}*\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₹${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `------------------------\n`;
    message += `💰 *Subtotal: ₹${totalPrice.toFixed(2)}*\n`;
    message += `🚚 *Delivery: Free*\n`;
    message += `🏁 *Total Amount: ₹${totalPrice.toFixed(2)}*\n`;
    message += `------------------------\n\n`;
    message += `Please confirm my order and share the estimated delivery time. Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[120] animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-dark-card z-[130] shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col animate-slide-in border-l border-dark-border">
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <h2 className="text-xl font-bold text-white">Your Cart ({cart.length})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-500 h-full">
              <div className="w-24 h-24 mb-4 opacity-20 bg-gray-600 rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <p className="text-lg">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-primary hover:text-primary-dark font-medium underline"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-black/40 p-3 rounded-2xl border border-white/5">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-sm line-clamp-1">{item.name}</h3>
                  <p className="text-primary font-bold mt-1">₹{(item.price * item.quantity).toFixed(2)}</p>

                  <div className="flex items-center gap-3 mt-2 bg-dark-bg w-max rounded-lg p-1 border border-white/5">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 rounded-md"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-white text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 rounded-md"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-500 hover:text-accent transition-colors shrink-0"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-dark-border bg-black/20">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Delivery (Estimated)</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-dark-border">
                <span>Total</span>
                <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleOrderWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1fbc5b] text-white py-4 rounded-xl font-bold text-lg transition-transform active:scale-[0.98] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Order via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 mt-3 font-medium">No extra charges applied</p>
          </div>
        )}
      </div>
    </>
  );
}
