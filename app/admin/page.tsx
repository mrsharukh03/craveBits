"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, ShoppingBag, UtensilsCrossed, Users, Settings, LogOut, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", total: 45.97, status: "completed", time: "10 mins ago" },
    { id: "ORD-002", customer: "Sarah Smith", total: 12.50, status: "pending", time: "25 mins ago" },
    { id: "ORD-003", customer: "Mike Johnson", total: 68.20, status: "pending", time: "1 hour ago" },
    { id: "ORD-004", customer: "Emily Davis", total: 34.00, status: "completed", time: "3 hours ago" },
    { id: "ORD-005", customer: "David Wilson", total: 22.99, status: "completed", time: "5 hours ago" },
  ];

  const menuItems = [
    { id: "1", name: "Classic Cheeseburger", price: 8.99, category: "Burgers", stock: 150 },
    { id: "2", name: "Double Bacon Burger", price: 12.99, category: "Burgers", stock: 85 },
    { id: "3", name: "Margherita Pizza", price: 14.99, category: "Pizzas", stock: 120 },
    { id: "4", name: "Pepperoni Supreme", price: 16.99, category: "Pizzas", stock: 95 },
    { id: "5", name: "Strawberry Lemonade", price: 4.99, category: "Drinks", stock: 200 },
  ];

  return (
    <div className="flex bg-dark-bg min-h-screen pt-20">
      
      {/* Sidebar */}
      <aside className="w-64 bg-dark-card border-r border-dark-border hidden md:flex flex-col">
        <div className="p-6 border-b border-dark-border">
          <h2 className="text-xl font-bold text-white tracking-tight">Crave<span className="text-primary">Admin</span></h2>
          <p className="text-gray-400 text-sm mt-1">Management Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === "orders" ? "bg-primary text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
          >
            <ShoppingBag size={20} />
            <span className="font-medium">Recent Orders</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("menu")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === "menu" ? "bg-primary text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
          >
            <UtensilsCrossed size={20} />
            <span className="font-medium">Menu Management</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Users size={20} />
            <span className="font-medium">Customers</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-dark-border">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Return to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 hide-scrollbar overflow-y-auto">
        <header className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {activeTab === "orders" ? "Orders Overview" : "Menu Management"}
            </h1>
            <p className="text-gray-400">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-dark-card border border-dark-border px-4 py-2 rounded-lg text-sm">
              <span className="text-gray-400">Total Revenue:</span>
              <span className="text-primary font-bold ml-2">$1,245.80</span>
            </div>
            {activeTab === "menu" && (
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors">
                + Add Item
              </button>
            )}
          </div>
        </header>

        {activeTab === "orders" && (
          <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-dark-border flex items-center justify-between">
              <h3 className="font-bold text-lg text-white">Live Orders</h3>
              <button className="text-primary text-sm font-medium hover:underline">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/20 text-gray-400 text-sm border-b border-dark-border">
                    <th className="p-4 font-medium">Order ID</th>
                    <th className="p-4 font-medium">Customer</th>
                    <th className="p-4 font-medium">Time</th>
                    <th className="p-4 font-medium">Total</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-dark-border hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-white">{order.id}</td>
                      <td className="p-4 text-gray-300">{order.customer}</td>
                      <td className="p-4 text-gray-400 flex items-center gap-2">
                        <Clock size={14} />
                        {order.time}
                      </td>
                      <td className="p-4 text-primary font-medium">${order.total.toFixed(2)}</td>
                      <td className="p-4">
                        {order.status === "completed" ? (
                          <span className="bg-green-500/10 text-green-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 w-max">
                            <CheckCircle size={12} />
                            Completed
                          </span>
                        ) : (
                          <span className="bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 w-max">
                            <Clock size={12} />
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-gray-400 hover:text-white font-medium text-sm transition-colors">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "menu" && (
          <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-dark-border flex items-center justify-between">
              <h3 className="font-bold text-lg text-white">Current Menu</h3>
              {/* Filter Placeholder */}
              <div className="bg-black/20 border border-dark-border rounded-lg px-3 py-1.5 text-sm text-gray-300">
                Filter: All Categories
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/20 text-gray-400 text-sm border-b border-dark-border">
                    <th className="p-4 font-medium">Item Name</th>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Price</th>
                    <th className="p-4 font-medium">Stock</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item) => (
                    <tr key={item.id} className="border-b border-dark-border hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-white">{item.name}</td>
                      <td className="p-4 text-gray-300">
                        <span className="bg-black/40 border border-white/10 px-2 py-1 rounded text-xs">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 text-primary font-medium">${item.price.toFixed(2)}</td>
                      <td className="p-4 text-gray-400">{item.stock} daily</td>
                      <td className="p-4 text-right space-x-3">
                        <button className="text-gray-400 hover:text-white font-medium text-sm transition-colors">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-400 font-medium text-sm transition-colors">
                          Hide
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
