export interface Package {
  id: string;
  title: string;
  location: string;
  days: number;
  nights: number;
  rating: number;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const packages: Package[] = [
  {
    id: "trio-marina-dubai",
    title: "Trio Marina",
    location: "Dubai - United Arab Emirates",
    days: 4,
    nights: 3,
    rating: 4,
    price: "$225",
    image: "/dubai-marina-yacht-club.jpg",
    description:
      "Experience the luxurious Dubai Marina with stunning waterfront views, world-class dining, and unforgettable yacht experiences. This package offers the perfect blend of relaxation and adventure in one of Dubai's most prestigious neighborhoods.",
    highlights: [
      "Dubai Marina Yacht Cruise",
      "Burj Khalifa Visit with Fast Track Entry",
      "Dubai Mall Shopping Experience",
      "Marina Beach Club Access",
      "Traditional Dhow Cruise Dinner",
      "Professional Tour Guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival + Marina Cruise With Dinner",
        description:
          "Arrive at Dubai International Airport where our representative will greet you. Transfer to your hotel in Dubai Marina. Evening at leisure to explore the marina walk and enjoy dinner at one of the waterfront restaurants.",
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa",
        description:
          "Morning city tour covering Dubai Museum, Gold Souk, and Spice Souk. Afternoon visit to Burj Khalifa with fast track entry to the observation deck. Evening at Dubai Mall with musical fountain show.",
      },
      {
        day: 3,
        title: "Desert Safari with BBQ Dinner ",
        description:
          "Get ready for thrills of dune bashing in red sands by 4X4 vehicles. Enjoy your dinner at desert safari camp with Tanura Dance, Belly Dance, Fire Show. ",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Enjoy a leisurely breakfast at the hotel. Last-minute shopping or relaxation at the pool by own. Check out and transfer to the airport for your departure flight.",
      },
    ],
    inclusions: [
      "03 nights accommodation on double occupancy.",
      "03 breakfast at hotel",
      "Dubai airport to Dubai hotel on Private Basis",
      "Evening Dhow Cruise Marina with dinner.",
      "HD Dubai City tour + Burj Khalifa 125th floor NPT (1 way Pvt).",
      "Desert Safari with BBQ dinner.",
      "All sightseeing on SIC basis",
      "All Items of Personal Nature.",
    ],
    exclusions: [
      "Meals Not Mentioned in The Itinerary.",
      "Anything Not Mentioned in The Inclusions.",
      "Porterage At Hotels and Airports, Tips, Insurance, Laundry, Liquors, Wine, Etc.",
      "All Items of Personal Nature.",
      "Visa.",
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "Absolutely amazing experience! The yacht cruise was the highlight of our trip. Highly recommended for couples.",
        date: "2024-11-15",
      },
      {
        name: "Michael Chen",
        rating: 4,
        comment:
          "Great package with excellent value. The tour guide was very knowledgeable and friendly.",
        date: "2024-10-28",
      },
    ],
  },
  {
    id: "wonderful-dubai",
    title: "Wonderful Dubai",
    location: "Dubai - United Arab Emirates",
    days: 6,
    nights: 5,
    rating: 4,
    price: "$385",
    image: "/dubai-desert-safari-sunset.jpg",
    description:
      "Experience the best of Dubai with this comprehensive package covering modern marvels, traditional souks, thrilling desert adventures, and luxurious experiences in the city of gold.",
    highlights: [
      "Desert Safari with BBQ Dinner",
      "Burj Khalifa At The Top",
      "Dubai Frame Experience",
      "Traditional Gold & Spice Souks",
      "Dubai Museum & Creek",
      "Palm Jumeirah Monorail",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Evening Desert Safari",
        description:
          "Airport pick up and hotel check-in. Afternoon desert safari with dune bashing, camel riding, sandboarding, and BBQ dinner with belly dance show.",
      },
      {
        day: 2,
        title: "Modern Dubai Tour",
        description:
          "Visit Burj Khalifa observation deck, Dubai Mall, Dubai Fountain show. Photo stop at Burj Al Arab. Evening at Souk Madinat Jumeirah.",
      },
      {
        day: 3,
        title: "Old Dubai Heritage Tour",
        description:
          "Explore Dubai Museum, Al Fahidi Historical District. Traditional abra boat ride across Dubai Creek. Visit Gold Souk and Spice Souk.",
      },
      {
        day: 4,
        title: "Palm Jumeirah & Dubai Marina",
        description:
          "Monorail ride on Palm Jumeirah. Visit Atlantis The Palm. Afternoon at Dubai Marina walk. Evening dhow cruise dinner.",
      },
      {
        day: 5,
        title: "Dubai Frame & Free Time",
        description:
          "Visit iconic Dubai Frame for panoramic views. Afternoon shopping at traditional markets or modern malls. Optional activities available.",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Leisure morning. Check out and airport transfer for your departure flight.",
      },
    ],
    inclusions: [
      "5 nights in 4-star hotel with breakfast",
      "All transfers and tours as mentioned",
      "Desert safari with dinner",
      "Dhow cruise with dinner",
      "Burj Khalifa tickets (124th floor)",
      "Dubai Frame tickets",
      "Professional tour guide",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches and some dinners",
      "Optional activities and attractions",
      "Personal expenses",
      "Tips for guide and driver",
    ],
    reviews: [
      {
        name: "Robert Taylor",
        rating: 4,
        comment:
          "Great package covering all major attractions. Desert safari was thrilling!",
        date: "2024-11-12",
      },
      {
        name: "Maria Garcia",
        rating: 4,
        comment:
          "Well organized tour with professional guides. Dubai exceeded our expectations.",
        date: "2024-10-25",
      },
    ],
  },
  {
    id: "amazing-singapore",
    title: "Lion City Adventure",
    location: "Singapore",
    days: 5,
    nights: 4,
    rating: 4,
    price: "$420",
    image: "/singapore-home.jpg",
    description:
      "Discover the perfect blend of futuristic architecture, lush greenery, cultural diversity, and world-class attractions with this exciting Singapore tour package.",
    highlights: [
      "Marina Bay Sands SkyPark",
      "Gardens by the Bay",
      "Sentosa Island Tour",
      "Universal Studios Singapore",
      "Merlion Park & City Tour",
      "Singapore River Cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Night City Tour",
        description:
          "Airport pick up and hotel check-in. Evening city tour covering Marina Bay Sands, Merlion Park, and a relaxing Singapore River Cruise.",
      },
      {
        day: 2,
        title: "Singapore City Highlights",
        description:
          "Guided city tour including Chinatown, Little India, Orchard Road, and Gardens by the Bay with Flower Dome and Cloud Forest.",
      },
      {
        day: 3,
        title: "Sentosa Island Adventure",
        description:
          "Visit Sentosa Island via cable car. Explore Madame Tussauds, SEA Aquarium, and enjoy leisure time at Siloso Beach.",
      },
      {
        day: 4,
        title: "Universal Studios Singapore",
        description:
          "Full day at Universal Studios Singapore featuring thrilling rides, shows, and themed attractions for all ages.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Leisure morning. Hotel check-out and airport transfer for departure.",
      },
    ],
    inclusions: [
      "4 nights in 4-star hotel with breakfast",
      "Airport transfers",
      "Singapore city tour",
      "Sentosa Island tour",
      "Universal Studios tickets",
      "Gardens by the Bay tickets",
      "Professional tour guide",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners",
      "Optional tours and activities",
      "Personal expenses",
      "Tips for guide and driver",
    ],
    reviews: [
      {
        name: "Daniel Wong",
        rating: 4,
        comment:
          "Excellent itinerary with a good mix of city sights and attractions. Universal Studios was the highlight!",
        date: "2024-11-18",
      },
      {
        name: "Emily Johnson",
        rating: 4,
        comment:
          "Very smooth and well planned trip. Singapore is clean, modern, and beautiful.",
        date: "2024-10-30",
      },
    ],
  },

  {
    id: "dubai-delight",
    title: "Dubai Delight",
    location: "Dubai - United Arab Emirates",
    days: 5,
    nights: 4,
    rating: 5,
    price: "$325",
    image: "/burj-al-arab-dubai.jpg",
    description:
      "A delightful Dubai experience combining luxury, adventure, and culture. Perfect for first-time visitors wanting to see the best of what Dubai has to offer in a compact itinerary.",
    highlights: [
      "Dubai Miracle Garden Visit",
      "Global Village Evening",
      "Jumeirah Beach Day",
      "Ski Dubai Experience",
      "Dubai Aquarium & Underwater Zoo",
      "Marina Yacht Cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Dubai Marina",
        description:
          "Airport transfer to hotel. Evening at Dubai Marina with dinner at waterfront restaurant. Walk along the illuminated marina promenade.",
      },
      {
        day: 2,
        title: "Beach & Mall Day",
        description:
          "Morning at Jumeirah Beach. Afternoon at Mall of Emirates with optional Ski Dubai visit. Evening at Dubai Aquarium and Underwater Zoo.",
      },
      {
        day: 3,
        title: "Garden & Culture",
        description:
          "Visit stunning Dubai Miracle Garden with millions of flowers. Afternoon at Global Village for international pavilions, shows, and shopping.",
      },
      {
        day: 4,
        title: "Luxury & Shopping",
        description:
          "Morning yacht cruise in Dubai Marina. Afternoon shopping at Dubai Mall and Gold Souk. Evening at leisure or optional activities.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Final breakfast. Last-minute shopping or relaxation. Airport transfer for departure.",
      },
    ],
    inclusions: [
      "4 nights hotel accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Miracle Garden tickets",
      "Global Village entry",
      "Yacht cruise experience",
      "Dubai Aquarium tickets",
    ],
    exclusions: [
      "International airfare",
      "Visa fees if applicable",
      "Travel insurance",
      "Lunches and dinners",
      "Ski Dubai tickets (optional)",
      "Personal expenses",
    ],
    reviews: [
      {
        name: "Sophie Anderson",
        rating: 5,
        comment:
          "Perfect mix of activities! Miracle Garden was absolutely stunning. Great value package.",
        date: "2024-11-22",
      },
      {
        name: "Tom Wilson",
        rating: 5,
        comment:
          "Enjoyed every moment. The yacht cruise was luxurious and Global Village was fascinating.",
        date: "2024-11-08",
      },
    ],
  },
  {
    id: "bangkok-experience",
    title: "Bangkok Experience",
    location: "Thailand",
    days: 7,
    nights: 6,
    rating: 5,
    price: "$450",
    image: "/bangkok-temples-at-sunset.jpg",
    description:
      "Immerse yourself in the vibrant culture of Bangkok. Explore magnificent temples, experience bustling markets, enjoy Thai cuisine, and discover both traditional and modern sides of Thailand's captivating capital.",
    highlights: [
      "Grand Palace & Wat Phra Kaew",
      "Floating Market Experience",
      "Chao Phraya River Cruise",
      "Thai Cooking Class",
      "Traditional Thai Massage",
      "Rooftop Bar Experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome Dinner",
        description:
          "Airport pick up and hotel transfer. Evening welcome dinner at riverside restaurant with traditional Thai dance performance.",
      },
      {
        day: 2,
        title: "Temple Tour",
        description:
          "Visit Grand Palace and Wat Phra Kaew (Temple of Emerald Buddha). Explore Wat Pho with giant Reclining Buddha. Evening at Wat Arun during sunset.",
      },
      {
        day: 3,
        title: "Floating Market & River Cruise",
        description:
          "Early morning visit to Damnoen Saduak Floating Market. Afternoon Chao Phraya River cruise stopping at riverside temples and attractions.",
      },
      {
        day: 4,
        title: "Cooking Class & Markets",
        description:
          "Morning Thai cooking class learning authentic recipes. Afternoon exploring Chatuchak Weekend Market. Evening street food tour.",
      },
      {
        day: 5,
        title: "Modern Bangkok",
        description:
          "Visit Jim Thompson House Museum. Shopping at Siam Paragon and MBK Center. Evening at rooftop bar for skyline views.",
      },
      {
        day: 6,
        title: "Relaxation & Culture",
        description:
          "Morning traditional Thai massage session. Afternoon at leisure for personal exploration or optional activities. Farewell dinner.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Breakfast and check out. Transfer to airport for departure flight.",
      },
    ],
    inclusions: [
      "6 nights accommodation in city hotel",
      "Daily breakfast and 3 dinners",
      "All transfers and tours",
      "Temple entrance fees",
      "Floating market tour",
      "River cruise tickets",
      "Cooking class",
      "Thai massage session",
    ],
    exclusions: [
      "International flights",
      "Thailand visa (if required)",
      "Travel insurance",
      "Lunches and some dinners",
      "Optional tours",
      "Personal expenses and tips",
    ],
    reviews: [
      {
        name: "Jennifer Lee",
        rating: 5,
        comment:
          "Bangkok was incredible! The temples were breathtaking and the cooking class was so much fun.",
        date: "2024-11-17",
      },
      {
        name: "Mark Thompson",
        rating: 5,
        comment:
          "Excellent tour with perfect balance of culture, food, and relaxation. Highly recommended!",
        date: "2024-10-30",
      },
    ],
  },
];

export function getPackageById(id: string): Package | undefined {
  return packages.find((pkg) => pkg.id === id);
}

export function getAllPackages(): Package[] {
  return packages;
}
