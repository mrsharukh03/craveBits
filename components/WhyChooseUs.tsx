import React from "react";
import { Leaf, Clock, ShieldCheck, Wallet } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf className="text-primary w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "We use only the finest, farm-fresh ingredients to craft every meal, ensuring premium taste."
    },
    {
      icon: <Clock className="text-primary w-8 h-8" />,
      title: "Fast Delivery",
      description: "Hot and fresh to your doorstep in under 30 minutes, without compromising quality."
    },
    {
      icon: <ShieldCheck className="text-primary w-8 h-8" />,
      title: "Hygienic Kitchen",
      description: "Our world-class kitchen standards ensure maximum hygiene and food safety."
    },
    {
      icon: <Wallet className="text-primary w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Experience premium food quality with unmatched value. No hidden fees or extra charges."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">What makes our food special?</h3>
          <p className="text-gray-400 text-lg">
            We don't just cook food. We craft culinary experiences that leave you craving for more. 
            Here's why thousands of customers choose us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
