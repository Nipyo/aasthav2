export const CLINIC_NAME = "Aastha Nature Cure Clinic Pvt. Ltd.";
export const CLINIC_TAGLINE = "स्वस्थं जीवनम्";
export const CLINIC_TAGLINE_EN = "Healthy Living";
export const CLINIC_PHONES = ["015411156", "9851436667"];
export const CLINIC_EMAIL = "aasthanaturecure6@gmail.com";
export const CLINIC_ADDRESS = "Kupondole, lalitpur";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const TIME_SLOTS = [
  "9:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
];

// Curated Unsplash stock photos — swap with real clinic photos when ready
export const PHOTOS = {
  hero:           "https://images.unsplash.com/photo-1545463913-5083aa7359a6?w=1600&q=80",
  yoga:           "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  physiotherapy:  "https://images.unsplash.com/photo-1711936942379-a1e5cf94de8c?w=1200&q=80",
  massage:        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
  acupuncture:    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
  herbal:         "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80",
  clinic:         "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
  steam:          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
};

// ── Service catalogue — prices updated from the official "SERVICES RATE" list ──
export const SERVICE_CATEGORIES = [
  {
    id: "consultation",
    name: "Doctor Consultation",
    icon: "🩺",
    color: "from-green-400 to-green-600",
    image: "clinic",
    description: "One-to-one consultation with our naturopathy doctor.",
    services: [
      { name: "Doctor Consultation", price: 500 },
    ],
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    icon: "⚡",
    color: "from-green-400 to-green-600",
    image: "physiotherapy",
    description: "Rehabilitation, sports, neurological, pre & post natal and pediatric physiotherapy.",
    // `price` is the starting / minimum price. Where a range applies, `priceMax` holds the upper end
    // and `note` holds a ready-to-display label.
    services: [
      { name: "Consultation", price: 500, priceMax: 1000, note: "Rs. 500 – 1000" },

      // Musculoskeletal rehabilitation
      { name: "Musculoskeletal Rehabilitation — One Joint", price: 800, priceMax: 900, note: "Rs. 800 – 900" },
      { name: "Musculoskeletal Rehabilitation — Two Joints", price: 1500 },
      { name: "Musculoskeletal Rehabilitation — Multiple Joints", price: 2000, priceMax: 4000, note: "Rs. 2000 – 4000" },
      { name: "Post-Surgical Recovery", price: 2500 },

      // Injuries
      { name: "Sports Rehabilitation (Injuries)", price: 2000, priceMax: 3500, note: "Rs. 2000 – 3500" },

      // Neurological
      { name: "Neurological Rehabilitation (Stroke, Parkinson's, Peripheral Neuropathy, Bell's Palsy)", price: 1500, priceMax: 2000, note: "Rs. 1500 – 2000" },

      // Pre and post natal care
      { name: "Pre-Pregnancy Exercise", price: 1000, note: "Starting from Rs. 1000" },
      { name: "Pregnancy Exercise — 1st Trimester", price: 800, note: "Starting from Rs. 800" },
      { name: "Pregnancy Exercise — 3rd Trimester", price: 1500, note: "Starting from Rs. 1500" },
      { name: "Post-Pregnancy Exercise", price: 1500, note: "Starting from Rs. 1500" },

      // Pediatric
      { name: "Pediatric Physiotherapy", price: 1000 },

 
    ],
  },
  {
    id: "acupuncture",
    name: "Acupuncture & Moxibustion",
    icon: "🪡",
    color: "from-green-500 to-green-700",
    image: "acupuncture",
    description: "Traditional needle therapy, electroacupuncture and moxibustion.",
    services: [
      { name: "Acupuncture (Use & Throw Needle)", price: 500 },
      { name: "Electroacupuncture", price: 600 },
      { name: "Moxibustion (per part)", price: 250 },
    ],
  },
  {
    id: "cupping",
    name: "Cupping Therapy",
    icon: "🫙",
    color: "from-green-600 to-green-800",
    image: "acupuncture",
    description: "Dry, wet, ice, water and fire cupping for deep tissue relief.",
    services: [
      { name: "Dry Cupping (Whole Body)", price: 999 },
      { name: "Wet Cupping", price: 600 },
      { name: "Ice Cupping", price: 500 },
      { name: "Water Cupping", price: 500 },
      { name: "Fire Cupping", price: 1000 },
    ],
  },
  {
    id: "guasha",
    name: "Guasha",
    icon: "🌿",
    color: "from-green-400 to-green-700",
    image: "massage",
    description: "Traditional scraping therapy for circulation and pain.",
    services: [
      { name: "Guasha (15–20 mins)", price: 599 },
    ],
  },
  {
    id: "naturopathy",
    name: "Naturopathy Treatments",
    icon: "🍃",
    color: "from-green-300 to-green-600",
    image: "herbal",
    description: "Classical naturopathic treatments using water, packs, mud and steam.",
    services: [
      // Hydrotherapy
      { name: "Steam Bath", price: 699 },
      { name: "Facial Steam", price: 179 },
      { name: "Hip Bath — Cold", price: 400 },
      { name: "Hip Bath — Neutral / Hot", price: 549 },
      { name: "Arm & Foot Bath — Cold", price: 350 },
      { name: "Arm & Foot Bath — Neutral / Hot", price: 499 },
      { name: "Spinal Spray — Cold", price: 600 },
      { name: "Spinal Spray — Neutral", price: 749 },
      // Packs & compresses
      { name: "Ice Pack", price: 100 },
      { name: "Packs — GH / Kidney / Castor Oil Pack", price: 499 },
      { name: "Compress (per part)", price: 399 },
      { name: "Patti (per part)", price: 549 },
      // Therapeutic cleansing
      { name: "Enema", price: 500 },
      { name: "Enema — Herbal", price: 600 },
      { name: "Jalaneti", price: 499 },
      // Mud therapy
      { name: "Hot Mud Pack (per part)", price: 599 },
      { name: "Cold Mud Pack", price: 599 },
      { name: "Mud Paste (per part)", price: 499 },
    ],
  },
  {
    id: "massage",
    name: "Massage Therapy",
    icon: "🤲",
    color: "from-green-500 to-green-800",
    image: "massage",
    description: "Full body, partial, vibro, hotstone, potali and foot & palm reflexology.",
    services: [
      { name: "Full Body Massage — 60 mins", price: 2000 },
      { name: "Full Body Massage with Coconut Oil — 60 mins", price: 2499 },
      { name: "Partial Body Massage — 15 mins", price: 500 },
      { name: "Partial Body Massage with Coconut Oil — 15 mins", price: 625 },
      { name: "Partial Body Massage — 30 mins", price: 1000 },
      { name: "Partial Body Massage with Coconut Oil — 30 mins", price: 1250 },
      { name: "Partial Body Massage — 45 mins", price: 1500 },
      { name: "Partial Body Massage with Coconut Oil — 45 mins", price: 1875 },
      { name: "Hotstone Massage — 60 mins", price: 2799 },
      { name: "Hotstone Massage — Whole Back (15 mins)", price: 799 },
      { name: "Vibromassage — Legs (15 mins)", price: 999 },
      { name: "Vibromassage — Abdomen (5–8 mins)", price: 499 },
      { name: "Drainage Massage (10 mins)", price: 499 },
      { name: "Potali — 15 mins", price: 600 },
      { name: "Potali — 30 mins", price: 1200 },
      { name: "Potali — Whole Back + Upper Limb + Lower Limb (45 mins)", price: 1800 },
      { name: "Potali — per piece", price: 599 },
      { name: "Foot & Palm Reflexology (30 mins)", price: 1499 },
    ],
  },
  {
    id: "shirodhara",
    name: "Shirodhara",
    icon: "💆",
    color: "from-green-400 to-green-700",
    image: "herbal",
    description: "Ancient Ayurvedic forehead oil therapy for mind and stress.",
    services: [
      { name: "Shirodhara with Oil (45 mins)", price: 3099 },
      { name: "Shirodhara with Water (45 mins)", price: 1200 },
    ],
  },
  {
    id: "Infared lamp",
    name: "Infared lamp",
    icon: "💆",
    color: "from-green-400 to-green-700",
    image: "herbal",
    description: "Red light  therapy for muscle relaxation and blood circulations.",
    services: [
      
           // From the naturopathy rate list
      { name: "Infrared Lamp", price: 599 },
    ],
  },
  {
    id: "herbal",
    name: "Herbal & Special Packs",
    icon: "🌱",
    color: "from-green-300 to-green-600",
    image: "herbal",
    description: "Herbal packs and full-body wet sheet pack.",
    services: [
      { name: "Herbal Pack (per part)", price: 649 },
      { name: "Wet Sheet Pack", price: 1700 },
    ],
  },
  {
    id: "yoga",
    name: "Yoga Therapy",
    icon: "🧘",
    color: "from-green-500 to-green-700",
    image: "yoga",
    description: "Morning yoga sessions, 6 to 7 AM — drop-in or monthly.",
    services: [
      { name: "Morning Yoga (6–7 AM) — Drop-in", price: 500 },
      { name: "Morning Yoga (6–7 AM) — Monthly", price: 7000 },
    ],
  },
  {
    id: "sound",
    name: "Sound Healing",
    icon: "🔔",
    color: "from-green-400 to-green-600",
    image: "yoga",
    description: "Sound-based healing sessions with singing bowls.",
    services: [
      { name: "Aura Cleansing", price: 1000 },
      { name: "Chakra Healing", price: 1500 },
      { name: "Vibrational Massage with Singing Bowls", price: 1500 },
      { name: "Sound Bath", price: 2000 },
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sunita Sharma",
    treatment: "Physiotherapy",
    quote: "After months of back pain, the physiotherapy team at Aastha gave me my life back. The traction and manual therapy sessions were transformative.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bikash Tamang",
    treatment: "Shirodhara",
    quote: "The Shirodhara with oil session was the most relaxing hour of my life. My stress levels have dropped significantly since starting treatment here.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maya Gurung",
    treatment: "Yoga & Naturopathy",
    quote: "I joined the monthly yoga program and added steam bath sessions. Three months in, I sleep better, feel more energetic and have lost weight naturally.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ramesh Thapa",
    treatment: "Acupuncture",
    quote: "I was skeptical about acupuncture, but three sessions in and my chronic knee pain is almost gone. The therapists are extremely skilled and attentive.",
    rating: 5,
  },
  {
    id: 5,
    name: "Puja Maharjan",
    treatment: "Massage & Cupping",
    quote: "The hotstone massage followed by cupping completely relieved my shoulder tension. I recommend Aastha to everyone I know.",
    rating: 5,
  },
];

export const STATS = [
  { number: "100", label: "Patients Treated" },
  { number: "15+", label: "Therapies Offered" },
  { number: "2026", label: "Years of Healing" },
  { number: "98%", label: "Patient Satisfaction" },
];