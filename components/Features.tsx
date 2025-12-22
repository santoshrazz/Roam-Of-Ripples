"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Tell Us What You Want To Do",
    reviews: "50+ Reviews",
  },
  {
    icon: "📍",
    title: "Share Your Travel Locations",
    reviews: "100+ Reviews",
  },
  {
    icon: "❤️",
    title: "Share Your Travel Preference",
    reviews: "120+ Reviews",
  },
  {
    icon: "✓",
    title: "100% Trusted Tour Agency",
    reviews: "150+ Reviews",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal-600 font-medium mb-2">Core Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find <span className="text-teal-600">Travel Perfection</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-balance">
                {feature.title}
              </h3>
              <p className="text-teal-600 font-medium">{feature.reviews}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
