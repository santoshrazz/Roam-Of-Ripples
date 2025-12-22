"use client";

import { motion } from "framer-motion";

const categories = [
  { icon: "💑", title: "Honeymooners" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Vacations" },
  { icon: "💼", title: "Corporate Tours" },
  { icon: "🎁", title: "Incentive Tour" },
  { icon: "👥", title: "Group Tours" },
  { icon: "👭", title: "Ladies Only Tours" },
];

export function Categories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Top Categories
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 text-balance">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
