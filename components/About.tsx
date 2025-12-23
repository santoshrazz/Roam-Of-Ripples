"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const stats = [
    { number: "15K+", label: "Happy Travelers" },
    { number: "500+", label: "Tour Packages" },
    { number: "50+", label: "Destinations" },
    { number: "20+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Expert Guidance",
      description:
        "Our experienced travel consultants provide personalized recommendations for unforgettable journeys.",
      icon: "🎯",
    },
    {
      title: "Best Prices",
      description:
        "We guarantee competitive pricing without compromising on quality or service excellence.",
      icon: "💰",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer support ensures peace of mind throughout your entire travel experience.",
      icon: "🛟",
    },
    {
      title: "Trusted Partners",
      description:
        "Partnerships with premium hotels, airlines, and local guides worldwide for seamless experiences.",
      icon: "🤝",
    },
    {
      title: "Safety First",
      description:
        "Your safety and security are our top priorities with comprehensive travel insurance options.",
      icon: "🛡️",
    },
    {
      title: "Flexible Booking",
      description:
        "Easy modifications and cancellations with transparent policies designed around your needs.",
      icon: "📅",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-linear-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-teal-600">TravelTours</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted travel companion for over two decades, creating
              unforgettable memories across the globe. We turn travel dreams
              into extraordinary realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-linear-to-br from-teal-50 to-white border border-teal-100"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At TravelTours, we believe that travel is more than just
                visiting new places—it's about creating lifelong memories,
                discovering diverse cultures, and broadening perspectives. Our
                mission is to make exceptional travel experiences accessible to
                everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We meticulously curate each journey, partnering with the finest
                hotels, experienced guides, and trusted local operators
                worldwide to ensure every trip exceeds expectations. Your
                adventure,z our expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-100 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/travel-agency-office-with-world-map.jpg"
                alt="Travel agency office"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We go beyond ordinary travel services to deliver exceptional
              experiences that set us apart from the rest.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-linear-to-br from-teal-600 to-teal-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-100 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/group-of-happy-travelers-on-tour.jpg"
                alt="Happy travelers"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="leading-relaxed mb-4">
                Founded in 2005, TravelTours began with a simple vision: to make
                world-class travel experiences accessible to everyone. What
                started as a small team of passionate travel enthusiasts has
                grown into a leading travel agency serving thousands of happy
                customers annually.
              </p>
              <p className="leading-relaxed">
                Over the years, we've expanded our destinations, refined our
                services, and built lasting relationships with partners
                worldwide. Through it all, our commitment to exceptional service
                and unforgettable experiences has remained unchanged.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Let us help you plan your next adventure. Our travel experts are
              ready to create a personalized itinerary just for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
