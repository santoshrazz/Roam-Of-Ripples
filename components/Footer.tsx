"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-teal-400">Roam</span>
              <span className="text-white">Ripples</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted travel partner for unforgettable experiences around
              the world.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="hover:text-teal-400 transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="hover:text-teal-400 transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Honeymoon Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Family Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Corporate Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Group Tours
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: roamripples@gmail.com</li>
              <li>Phone: +91 8750733112</li>
              <li>
                Thailand Office : 84/54, Moo-5, Paradise Hill Village 1 Soi Khao
                Noi,Nongpure,Dist,Pattaya City,Bang Lamung District, Chon Buri
                20150.
              </li>
              <li>
                Dubai Office : Meydan Grandstand, 6th floor, Meydan Road, Nad AI
                Shedba , Dubai, U.A.E
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61585631580352"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                target="_blank"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/roam.ripples/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                target="_blank"
              >
                <span className="sr-only">Instagram</span> <Instagram />
              </Link>
              <Link
                href="https://x.com/RoamRipples"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RoamRipples. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
