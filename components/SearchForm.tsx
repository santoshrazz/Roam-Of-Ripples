"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SearchForm() {
  const [destination, setDestination] = useState("");
  const [adults, setAdults] = useState("2 Adults");
  const [children, setChildren] = useState("0 Child");

  return (
    <section className="relative -mt-24 z-30 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Your Tour
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">All Destinations</option>
                <option value="dubai">Dubai</option>
                <option value="baku">Baku</option>
                <option value="thailand">Thailand</option>
                <option value="singapore">Singapore</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adults
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={`${num} Adult${num > 1 ? "s" : ""}`}>
                    {num} Adult{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                  <option
                    key={num}
                    value={`${num} Child${num !== 1 ? "ren" : ""}`}
                  >
                    {num} Child{num > 1 ? "ren" : num === 0 ? "" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
          >
            Search Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
