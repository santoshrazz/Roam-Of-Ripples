export interface Package {
  id: string
  title: string
  location: string
  days: number
  nights: number
  rating: number
  price: string
  image: string
  description: string
  highlights: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  inclusions: string[]
  exclusions: string[]
  reviews: {
    name: string
    rating: number
    comment: string
    date: string
  }[]
}

export const packages: Package[] = [
  {
    id: "trio-marina-dubai",
    title: "Trio Marina",
    location: "Dubai - United Arab Emirates",
    days: 4,
    nights: 3,
    rating: 4,
    price: "$85",
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
        title: "Arrival & Marina Welcome",
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
        title: "Yacht Cruise & Beach Day",
        description:
          "Morning luxury yacht cruise around Dubai Marina and Palm Jumeirah. Afternoon relaxation at Marina Beach Club. Evening traditional dhow cruise with dinner and entertainment.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Enjoy a leisurely breakfast at the hotel. Last-minute shopping or relaxation at the pool. Check out and transfer to the airport for your departure flight.",
      },
    ],
    inclusions: [
      "3 nights accommodation in 4-star hotel",
      "Daily breakfast",
      "Airport transfers",
      "All tours and entrance fees as per itinerary",
      "Professional English-speaking guide",
      "Dhow cruise dinner",
      "Yacht cruise experience",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners (except mentioned)",
      "Tips and gratuities",
      "Any services not mentioned in inclusions",
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
        comment: "Great package with excellent value. The tour guide was very knowledgeable and friendly.",
        date: "2024-10-28",
      },
    ],
  },
  {
    id: "amazing-azerbaijan",
    title: "Amazing Azerbaijan",
    location: "Baku",
    days: 6,
    nights: 5,
    rating: 5,
    price: "$350",
    image: "/baku-old-city-panorama.jpg",
    description:
      "Discover the perfect blend of ancient history and modern architecture in Azerbaijan. Explore Baku's Old City, visit fire temples, and experience the unique culture of this fascinating Caucasus nation.",
    highlights: [
      "Old City (Icherisheher) UNESCO Site",
      "Flame Towers Night View",
      "Gobustan Rock Art & Mud Volcanoes",
      "Fire Temple (Ateshgah)",
      "Highland Park & Funicular Ride",
      "Caspian Sea Boulevard",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Baku",
        description:
          "Arrive at Heydar Aliyev International Airport. Transfer to hotel. Evening walk along Baku Boulevard and dinner at local restaurant.",
      },
      {
        day: 2,
        title: "Old City Exploration",
        description:
          "Full day tour of UNESCO-listed Old City including Maiden Tower, Palace of Shirvanshahs, and narrow cobblestone streets. Visit local carpet workshops and traditional tea houses.",
      },
      {
        day: 3,
        title: "Gobustan & Mud Volcanoes",
        description:
          "Day trip to Gobustan National Park to see ancient rock carvings dating back 40,000 years. Visit active mud volcanoes and learn about Azerbaijan's geological wonders.",
      },
      {
        day: 4,
        title: "Fire Temple & Modern Baku",
        description:
          "Morning visit to Ateshgah Fire Temple and burning mountain Yanar Dag. Afternoon exploring modern Baku including Heydar Aliyev Center and Flame Towers.",
      },
      {
        day: 5,
        title: "Highland Park & Shopping",
        description:
          "Funicular ride to Highland Park for panoramic city views. Free time for shopping at local markets and modern malls. Farewell dinner with traditional Azerbaijani music.",
      },
      {
        day: 6,
        title: "Departure",
        description: "Breakfast at hotel. Free time until transfer to airport for departure flight.",
      },
    ],
    inclusions: [
      "5 nights accommodation in 4-star hotel",
      "Daily breakfast and 3 dinners",
      "All transfers and transportation",
      "Professional guide throughout",
      "All entrance fees",
      "Gobustan tour with mud volcanoes",
      "Funicular ride tickets",
    ],
    exclusions: [
      "International flights",
      "Azerbaijan e-visa fee",
      "Travel insurance",
      "Lunches and some dinners",
      "Personal expenses",
      "Optional activities",
    ],
    reviews: [
      {
        name: "Emma Wilson",
        rating: 5,
        comment: "Azerbaijan exceeded all expectations! The history, culture, and hospitality were incredible.",
        date: "2024-11-20",
      },
      {
        name: "David Brown",
        rating: 5,
        comment: "Perfect itinerary covering both ancient and modern attractions. Gobustan was fascinating!",
        date: "2024-11-05",
      },
    ],
  },
  {
    id: "golden-triangle-india",
    title: "Golden Triangle Tour",
    location: "India",
    days: 5,
    nights: 4,
    rating: 5,
    price: "₹16,900",
    image: "/taj-mahal-reflection.jpg",
    description:
      "Explore India's most iconic cities - Delhi, Agra, and Jaipur. Witness the magnificent Taj Mahal, explore historic forts and palaces, and immerse yourself in the rich cultural heritage of North India.",
    highlights: [
      "Taj Mahal Sunrise Visit",
      "Agra Fort & Fatehpur Sikri",
      "Amber Fort Elephant Ride",
      "City Palace Jaipur",
      "Jal Mahal Photo Stop",
      "Traditional Rajasthani Dinner",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Sightseeing",
        description:
          "Arrive in Delhi. Visit India Gate, Parliament House, Qutub Minar, and Lotus Temple. Evening at Connaught Place for shopping and dinner.",
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description:
          "Morning drive to Agra. Visit the magnificent Taj Mahal at sunset. Explore Agra Fort and local marble workshops. Overnight in Agra.",
      },
      {
        day: 3,
        title: "Agra to Jaipur via Fatehpur Sikri",
        description:
          "Early morning Taj Mahal sunrise view. Drive to Jaipur with stop at UNESCO site Fatehpur Sikri. Evening arrival in Pink City.",
      },
      {
        day: 4,
        title: "Jaipur City Tour",
        description:
          "Elephant ride at Amber Fort. Visit City Palace, Jantar Mantar observatory, and Hawa Mahal. Evening traditional Rajasthani dinner with cultural show.",
      },
      {
        day: 5,
        title: "Jaipur to Delhi Departure",
        description:
          "Morning visit to Jal Mahal for photos. Drive back to Delhi. Drop at airport or hotel as per your flight schedule.",
      },
    ],
    inclusions: [
      "4 nights accommodation in heritage hotels",
      "Daily breakfast and 2 dinners",
      "All transportation in AC vehicle",
      "Professional tour guide",
      "All monument entrance fees",
      "Elephant ride at Amber Fort",
      "Cultural show tickets",
    ],
    exclusions: [
      "Domestic/International flights",
      "Travel insurance",
      "Camera fees at monuments",
      "Lunches and some dinners",
      "Personal expenses and tips",
      "Optional activities",
    ],
    reviews: [
      {
        name: "James Anderson",
        rating: 5,
        comment: "The Golden Triangle was breathtaking! Taj Mahal at sunrise was a dream come true.",
        date: "2024-11-18",
      },
      {
        name: "Lisa Martinez",
        rating: 5,
        comment: "Excellent organization and knowledgeable guides. Jaipur's palaces were stunning!",
        date: "2024-11-01",
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
        description: "Leisure morning. Check out and airport transfer for your departure flight.",
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
        comment: "Great package covering all major attractions. Desert safari was thrilling!",
        date: "2024-11-12",
      },
      {
        name: "Maria Garcia",
        rating: 4,
        comment: "Well organized tour with professional guides. Dubai exceeded our expectations.",
        date: "2024-10-25",
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
        description: "Final breakfast. Last-minute shopping or relaxation. Airport transfer for departure.",
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
        comment: "Perfect mix of activities! Miracle Garden was absolutely stunning. Great value package.",
        date: "2024-11-22",
      },
      {
        name: "Tom Wilson",
        rating: 5,
        comment: "Enjoyed every moment. The yacht cruise was luxurious and Global Village was fascinating.",
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
        description: "Breakfast and check out. Transfer to airport for departure flight.",
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
        comment: "Bangkok was incredible! The temples were breathtaking and the cooking class was so much fun.",
        date: "2024-11-17",
      },
      {
        name: "Mark Thompson",
        rating: 5,
        comment: "Excellent tour with perfect balance of culture, food, and relaxation. Highly recommended!",
        date: "2024-10-30",
      },
    ],
  },
]

export function getPackageById(id: string): Package | undefined {
  return packages.find((pkg) => pkg.id === id)
}

export function getAllPackages(): Package[] {
  return packages
}
