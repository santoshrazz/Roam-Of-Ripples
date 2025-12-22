"use client";

import { Hero } from "@/components/Hero";
import { SearchForm } from "@/components/SearchForm";
import { Features } from "@/components/Features";
import { Destinations } from "@/components/Destinations";
import { TourPackages } from "@/components/TourPackages";
import { Categories } from "@/components/Categories";
import { Testimonials } from "@/components/Testimonals";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <SearchForm /> */}
      <Features />
      <Destinations />
      <TourPackages />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}
