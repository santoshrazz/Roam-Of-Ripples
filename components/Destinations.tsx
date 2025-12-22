"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    tours: 13,
    image: "/dubai-marina-skyline.jpg",
  },
  {
    name: "Baku",
    country: "Azerbaijan",
    tours: 3,
    image: "/baku-flame-towers-night.jpg",
  },
  {
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    tours: 5,
    image: "/sheikh-zayed-mosque-abu-dhabi.jpg",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    tours: 8,
    image: "/bangkok-grand-palace.jpg",
  },
];

export function Destinations() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal-600 font-medium mb-2">Top Destinations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore <span className="text-teal-600">Top Destinations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-4/5 relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-teal-400 text-sm mb-1">
                    {destination.country}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-200">{destination.tours} Tours</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
