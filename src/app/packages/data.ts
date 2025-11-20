import { MapPin, Users, Heart, Church, Wind, Compass } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// --------------------------------------------------------------------------------
// 1. NEW ITINERARY INTERFACES (FOR STRUCTURED DATA)
// --------------------------------------------------------------------------------

/**
 * Optional details for a day, like driving times and dress codes.
 */
export interface ItineraryDayDetails {
  driving_times?: string[];
  excursion_durations?: string[];
  dress_code?: string;
}

/**
 * A structured object for a single day in the itinerary.
 * This is much more flexible for your React components.
 */
export interface ItineraryDay {
  day: number | string; // Use string for "Day 2-3" or number for "1"
  title: string;
  plan: string[]; // A list of activities for the day
  accommodation?: string; // Optional: "Overnight in Kandy"
  main_sight_description?: {
    title: string;
    text: string;
  };
  details?: ItineraryDayDetails;
}

// --------------------------------------------------------------------------------
// 2. UPDATED PACKAGE AND CATEGORY INTERFACES
// --------------------------------------------------------------------------------

/**
 * The main Package interface, now using the structured ItineraryDay.
 */
export interface Package {
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  category: string;
  highlights?: string[];
  itinerary: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
}

/**
 * Defines the shape of a category object.
 */
export interface Category {
  name: string;
  icon: LucideIcon;
  color: string;
}

// --------------------------------------------------------------------------------
// 3. EXPORTED CATEGORIES (No Change)
// --------------------------------------------------------------------------------

export const categories: Category[] = [
  { name: "All Packages", icon: MapPin, color: "#059669" },
  { name: "Short Stays", icon: Users, color: "#2563eb" },
  { name: "Honeymoon & Beach", icon: Heart, color: "#e11d48" },
  { name: "Nature & Wildlife", icon: Wind, color: "#0d9488" },
  { name: "Grand Round Tours", icon: Compass, color: "#ea580c" }
];

// --------------------------------------------------------------------------------
// 4. EXPORTED PACKAGES (All Refactored)
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// 1. 1st PACKAGE: "The Treasure of Indian Ocean" (Refactored)
// --------------------------------------------------------------------------------

export const allPackages: Package[] = [
  {
    title: "The Treasure of Indian Ocean",
    duration: "3 DAYS 2 NIGHTS",
    price: "Negotiable",
    description: "Experience the Best of Both Worlds in Sri Lanka! Why choose between adventure and relaxation? Our program perfectly blends the two. Dive deep into the island's rich culture, uncover ancient heritage, and explore breathtaking natural wonders. After your adventure, escape to the coast for a blissful beach retreat. You’ll return home completely rejuvenated, filled with unforgettable memories.",
    image: "/images/kandy-pinnawala-sigiriya-dambulla-13.jpg",
    category: "Short Stays",
    highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Ayurveda Herbal Garden", "Temple of Tooth Relic", "Millennium Elephant Foundation ( Walk with an elephant )" ],
    itinerary: [
      {
        day: 1,
        title: "AIRPORT / SIGIRIYA",
        plan: [
          "Arrival to Colombo International Airport. Warm welcome and traditional greeting.",
          "Transfer to Sigiriya and check-in at hotel (check-in time 2:00 PM).",
          "Afternoon visit to the Sigiriya Rock fortress.",
          "Return to hotel and relax."
        ],
        accommodation: "Dinner & overnight stay in 4-star hotel in Sigiriya/Habarana/Dambulla.",
        main_sight_description: {
          title: "SIGIRIYA",
          text: "Sigiriya is the stunning 5th-century rock fortress hideaway of a fugitive king. This citadel of unusual beauty rising 200 meters from the scrub jungle was the innermost stronghold of the 70-hectare fortified town. A moat, rampart, and extensive gardens including the water garden, a UNESCO world heritage site, ring the base of the rock and the world-renowned frescoes of the “Heavenly Maidens” still glowing with colour can be reached by a spiral staircase."
        },
        details: {
          driving_times: [
            "Airport to Sigiriya – approx. 4 hrs (145km)",
            "Airport to Habarana – approx. 4 hrs (149 km)",
            "Airport to Dambulla – approx. 3 hrs 15 mins (128 km)",
            "Sigiriya to Sigiriya rock – approx. 20 minutes (13.3 km)",
            "Habarana to Sigiriya rock – approx. 20 minutes (12.1km)",
            "Dambulla to Sigiriya rock – approx. 30 mins (16.3 km)"
          ],
          excursion_durations: [
            "Sigiriya Rock - approx. 2 hrs"
          ],
          dress_code:
            "Sigiriya – Summer wear (Shorts, sundresses, and tank tops are suggested) (weather average – 32 – 34 °C)"
        }
      },
      {
        day: 2,
        title: "SIGIRIYA / DAMBULLA / MATALE / KANDY",
        plan: [
          "After breakfast check-out and transfer to Kandy.",
          "En-route visit the ancient Cave Temple in Dambulla.",
          "Visit the Matale Ayurvedic Spice Garden, Batik Factory and Gem Museum.",
          "In the evening, visit to the Temple of the Tooth Relic.",
          "Check-in at hotel and relax."
        ],
        accommodation: "Dinner & overnight stay in Kandy.",
        main_sight_description: {
          title: "DAMBULLA, KANDY & MORE",
          text: "DAMBULLA: Dambulla Rock Temple was built by King Walagamba in the 1st Century BC and it is a world Heritage site. It is the most impressive of Sri Lanka’s cave Temples. The complex of five caves with over 2000 sq metres of painted walls and ceilings is the largest area of paintings found in the world.\n\nSPICE GARDEN: Visit the Spice Garden in Matale, where you can see the different types of spices growing in Sri Lanka and learn about Ayurveda products.\n\KANDY & TOOTH RELIC TEMPLE: Kandy is the last capital of the Lankan Kings and is also a UNESCO World Heritage Site. It is the cultural capital of the country. In the center of the city is the Dalada Maligawa, where the main relic of the country – the Holy Tooth of the Buddha – is housed."
        },
        details: {
          driving_times: [
            "Sigiriya to Dambulla Cave – approx. 30 minutes (19.4 km)",
            "Habarana to Dambulla Cave – approx. 40 minutes (24.1km)",
            "Dambulla to Dambulla Cave – approx. 10 mins (2.7 km)",
            "Dambulla Cave Temple to Matale – approx. 1hr 15 min (46 km)",
            "Matale to Kandy – approx. 1 hr (25 km)"
          ],
          excursion_durations: [
            "Dambulla Cave Temple – approx. 40 minutes",
            "Matale Spice Garden – approx. 40 minutes",
            "Gem Museum – approx. 30 minutes",
            "Batik Factory – approx. 30 minutes",
            "Tooth Temple – approx. 40 minutes"
          ],
          dress_code: "Dambulla Temple & Tooth Relic Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless). (weather average Dambulla & Matale- 32 – 34 °C) (weather average in Kandy – 28 – 31 °C)"
        }
      },
      {
        day: 3,
        title: "KANDY / PINNAWALA / BEACH STAY",
        plan: [
          "After breakfast check-out and transfer to Pinnawala.",
          "Visit the Millennium Elephant Foundation (MEF).",
          "On completion, transfer to your selected beach hotel in the down south or east coast for drop-off."
        ],
        accommodation: "PLEASE DO BOOK YOUR BEACH STAY FROM OUR BEACH STAY SECTION.",
        main_sight_description: {
          title: "MILLENNIUM ELEPHANT FOUNDATION",
          text: "Millennium Elephant Foundation (MEF), founded in 1999, is a certified non-profit organization working with captive elephants in Sri Lanka. It strives to improve the care and treatment of Sri Lankan elephants. Tourists can observe and walk with the elephants at MEF as well as assist with their daily washing in the Kuda Oya River. The funds generated from visitors are used to maintain the elephants' well-being and to enable the care and rescue of more captive elephants."
        },
        details: {
          driving_times: [
            "Kandy to Pinnawala – approx. 1hr 30 mins (42.2 km)"
          ],
          excursion_durations: [
            "Pinnawala – approx. 1 hr 30 mins"
          ],
          dress_code: "Pinnawala – Summer wear (weather average – 28 – 32 °C) (Shorts, sundresses, and tank tops are suggested)"
        }
      }
    ],
    inclusions: [
      "Meet, assist and welcome on arrival at Colombo airport.",
      "Accommodation in 4-star hotels with breakfast & dinner.",
      "Transportation in a private A/C Vehicle with a guide/chauffeur.",
      "2 bottles of 500ml water per person per day.",
      "Airport pick up & Airport drop off.",
      "Fuel & local insurance for the vehicle.",
      "All government taxes.",
      "Entrance tickets at the sites mentioned."
    ],
    exclusions: [
      "Breakfast on the arrival day.",
      "Lunch & Beverages at all hotels.",
      "Late check-outs or early check-ins.",
      "Airfares, travel Insurance, or airport taxes.",
      "Any camera fees.",
      "Tips, portage, & gratuities.",
      "Personal expenses (laundry, calls, etc.).",
      "Other services not mentioned in the program."
    ]
  },


  // --------------------------------------------------------------------------------
// 2. 2nd PACKAGE: "Explore the Hidden Gem of Sri Lanka" (Refactored)
// --------------------------------------------------------------------------------
  {
    title: "Explore the Hidden Gem of Sri Lanka",
    duration: "3 DAYS 2 NIGHTS",
    price: "Negotiable",
    description: "Embark on the ultimate journey into Sri Lanka's heart, beginning with a magical encounter with elephant giants at Pinnawala before heading to Kandy, the island's vibrant cultural capital. From there, dive deep into the legendary Cultural Triangle: conquer the breathtaking Sigiriya Lion Rock fortress, explore the ancient, art-filled Dambulla Cave Temples, and awaken your senses in the fragrant spice gardens of Matale. After this incredible immersion into history and nature, you'll trade ancient wonders for ocean bliss, unwinding with a well-deserved beach stay on a golden shore, leaving you perfectly rejuvenated.",
    image: "/images/download.jpeg",
    category: "Short Stays",
    highlights: ["Gem Museum", "Batik Factory", "Cultural Dance Show", "Temple of Tooth Relic", "Sigiriya Rock Fortress", "Dambulla Cave Temple", "Ayurveda Herbal Garden", "Millennium Elephant Foundation ( Walk with an elephant )" ],
    itinerary: [
  {
    day: 1,
    title: "AIRPORT / KANDY",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome and traditional greeting in the airport lobby with the company representative and the Language speaking chauffeur guide.",
      "Transfer to Kandy and check-in at hotel (check-in time 02.00 pm)",
      "Afternoon visit the Gem Museum, Batik Factory’ Cultural Show & Temple of the Holy Tooth of Buddha",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "TOOTH RELIC TEMPLE",
      text: "The hill capital is another “World Heritage Site”. It was the last stronghold of the Sinhalese Kings during the Portuguese, Dutch and British rule and finally ceded to the British in 1815 after an agreement. To the Buddhists of Sri Lanka and the World, Kandy is one of the most sacred sites as it is the home of the “Dalada Maligawa” – Temple of the Sacred Tooth Relic of Lord Buddha. Close by are the remains of the Royal Palace (“Maha Wasala”), “Palle Wasala”- where the Queens stayed-now used for the National Museum, “Meda Wasala” where other close relatives lived, Audience Hall, Natha Devala and Vishnu Devala are situated close by. The Bathing Pavilion (“Ulpenge”) is by the Lake and in the Center of the lake is the Island called “Kiri samudraya” (Milk white ocean) used by the kings as the summerhouse. Today it is the center of Buddhism, Arts, Crafts, Dancing, Music and Culture. Visitors can see these Dance & Music at the daily Cultural Performances held at several places in the city."
    },
    details: {
      driving_times: [
        "Airport to Kandy – approx. 3 hrs 15 mins (103 km)"
      ],
      excursion_durations: [
        "Tooth Temple – approx. 40 minutes",
        "Gem Museum – approx. 30 minutes",
        "Batik Factory – approx. 30 minutes"
      ],
      dress_code: "Tooth Relic Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless)(weather average in Kandy – 28 – 31 °C)"
    }
  },
  {
    day: 2,
    title: "KANDY / SIGIRIYA / DAMBULLA / MATALE / KANDY",
    plan: [
      "After breakfast transfer to Sigiriya and visit the Sigiriya Rock fortress",
      "There after visit the ancient Cave Temple in Dambulla.",
      "On completion visit the Ayurvedic Harbal Spice Garden in Matale",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "SIGIRIYA, DAMBULLA & SPICE GARDEN",
      text: "SIGIRIYA\nSigiriya is the stunning 5th century rock fortress hideaway of fugitive king. This citadel of unusual beauty rising 200 meters from the scrub jungle was the innermost stronghold of the 70 hectare fortified town. A moat, rampart and extensive gardens including the water garden, a UNESCO world heritage site , ring the base of the rock and the world- renowned frescoes of the “Heavenly Maidens” still glowing with colour can be reached by a spiral staircase.\n\nDAMBULLA\nDambulla Rock Temple was built by King Walagamba in the 1st Century BC and it is a world Heritage site. It is the most impressive of Sri Lanka’s cave Temples. The complex of five caves with over 2000 sq metres of painted walls and ceilings is the largest area of paintings found in the world. It contains over 150 images of the Buddha of which the largest is the Colossal figure of the Buddha carved out of Rock and spanning 14 meters\n\nSPICE GARDEN\nVisit the Spice Garden in Matala, where you can see the different types of spices growing in Sri Lanka. Here you can observe the growth of spices and learn a lot of interesting information about the process of processing and further manufacture of Ayurveda products."
    },
    details: {
      driving_times: [
        "Kandy to Sigiriya Rock – approx. 2 hrs 45 mins (91 km)",
        "Sigiriya Rock to Dambulla Cave – approx. 30 minutes (19.4 km)",
        "Dambulla Cave Temple to Matale – approx. 1hr 15 min (46 km)",
        "Matale to Kandy – approx. 1 hr (25 km)"
      ],
      excursion_durations: [
        "Sigiriya Rock – approx. 2 hrs",
        "Dambulla Cave Temple – approx. 40 minutes",
        "Matale Spice Garden – approx. 40 minutes"
      ],
      dress_code: "Sigiriya – Summer wear (Shorts, sundresses, and tank tops are suggested) Dambulla Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless)) (weather average Sigiriya, Dambulla & Matale- 32 – 34 °C) (weather average in Kandy – 28 – 31 °C)"
    }
  },
  {
    day: 3,
    title: "KANDY / PINNAWALA / BEACH STAY",
    plan: [
      "After breakfast check-out and transfer to Pinnawala and visit the Millennium Elephant Foundation",
      "On completion transfer to the selected beach hotel in down south or east coast."
    ],
    accommodation: "PLEASE DO BOOK YOUR BEACH STAY FROM OUR BEACH STAY SECTION",
    main_sight_description: {
      title: "MILLENNIUM ELEPHANT FOUNDATION",
      text: "Millennium Elephant Foundation, which has been home to the Samarasinghe family and their elephants for many generations, was first opened to the public as the Club Concept Elephant Bath in 1979 by Sam Samarasinghe (1931-1991), a dedicated animal lover. After Samarasinghe’s death in August 1999, MEF was founded in his memory with the assistance of the World Society for the Protection of Animals (Now known as World Animal Protection), and unveiled as a sanctuary possessing proper caretaking facilities and medical services for captive elephants. MEF strives to improve the care and treatment of Sri Lankan elephants whilst increasing awareness about the crippling conditions many of them face throughout the country. The foundation remains the only certified non-profit organization working with captive elephants in Sri Lanka today.\nTourists can observe and walk with the elephants at MEF as well as assist with their daily washing in the Kuda Oya River that runs through the grounds. The funds generated from both visitors and volunteers is used to maintain the elephants well-being, and to enable the care and rescue of more captive elephants. MEF ensures that it strictly abides by the guidelines set by the Sri Lanka Tourism Development Authority."
    },
    details: {
      driving_times: [
        "Kandy to Pinnawala – approx. 1hr 30 mins (42.2 km)"
      ],
      excursion_durations: [
        "Pinnawala – approx. 1 hr 30 mins"
      ],
      dress_code: "Pinnawala  – Summer wear (weather average – 28 – 32 °C)(Shorts, sundresses, and tank tops are suggested)"
    }
  }
],
    inclusions: [
      "Meet, assist and welcome on arrival at Colombo airport.",
      "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
      "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
      "2 bottles of 500ml water per person per day.",
      "Airport pick up & Airport drop off.",
      "Fuel & local insurance for the vehicle.",
      "All government taxes.",
      "Entrance tickets at the sites mentioned."
    ],
    exclusions: [
      "Breakfast on the arrival day.",
      "Lunch & Beverages at all hotels.",
      "Late check-outs or early check-ins.",
      "Airfares, travel Insurance, or airport taxes.",
      "Any camera fees.",
      "Items of a personal nature such as laundry, telephone calls, tipping to service.",
      "Tips, portage, & gratuities.",
      "Personal expenses (laundry, calls, etc.).",
      "Other services not mentioned in the program."
    ]
  },


// --------------------------------------------------------------------------------
// 3. 3rd PACKAGE: "Explore Unseen Sri Lanka" (Refactored)
// --------------------------------------------------------------------------------

  {
    title: "Explore Unseen Sri Lanka",
    duration: "4 DAYS 3 NIGHTS",
    price: "Negotiable",
    description: "Experience the best of both worlds in Sri Lanka, from the vibrant energy of Colombo to the pure bliss of the coast. Your adventure begins with a heartwarming visit to the Pinnawala elephant gathering, before you journey deep into the island's historic heart. You’ll conquer the legendary Sigiriya Lion Rock, discover the ancient wonders of the Dambulla caves, and awaken your senses in the fragrant spice gardens of Matale. Next, ascend to the cultural capital, Kandy, to explore its sacred sites with a City Tour and wander the magnificent Peradeniya Botanical Gardens. Finally, after this incredible immersion in nature and heritage, you’ll escape to a golden beach stay for a well-deserved retreat, leaving you completely rejuvenated with unforgettable memories.",
    image: "/images/caption.jpg",
    category: "Short Stays",
    highlights: ["Colombo City Tour", "Millennium Elephant Foundation ( Walk with an elephant )", "Sigiriya Rock Fortress", "Ayurveda Herbal Garden", "Gem Museum", "Batik Factory", "Cultural Dance Show", "Temple of Tooth Relic", "Royal Botanical Garden",],
    itinerary: [
  {
    day: 1,
    title: "AIRPORT / COLOMBO",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome and traditional greeting in the airport lobby with the company representative and the Language speaking chauffeur guide.",
      "Transfer to Colombo and check-in at hotel (check-in time 02.00 pm)",
      "Afternoon proceed on a city tour in Colombo including shopping",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Colombo",
    main_sight_description: {
      title: "COLOMBO",
      text: "Colombo like many capital cities in developing countries Colombo is fast changing its face. almost overnight, skyscrapers arise from where old buildings once stood, yet in some parts, the old world charm is retained. A 100-year-old clock tower and several British built, colonial buildings are still to be seen in the city.  The Pettah bazaar – where one can shop for bargains, a Hindu and a Buddhist temple, residential areas where you find the stately homes of the affluent, the Colombo museum, the Bandaranaike memorial international conference hall – an outright gift to Sri Lanka from the people’s republic of china, the new parliament in Sri Jayewardenepura and the folk art center are some of the places of interest that one can visit to."
    },
    details: {
      driving_times: [
        "Airport to Colombo – approx. 40 minutes (35 km)"
      ],
      excursion_durations: [
        "Colombo city tour & shopping – approx. 3 hrs"
      ],
      dress_code: "Colombo – Summer wear (tops, shorts, trousers suggested) Colombo Temples – Long wear (long trousers and sleeve tops) (weather average – 30 – 34 °C)"
    }
  },
  {
    day: 2,
    title: "COLOMBO / PINNAWALA / SIGIRIYA",
    plan: [
      "After breakfast check-out and proceed to Sigiriya.",
      "En route visit Millennium Elephant Foundation",
      "Evening climb the Sigiriya rock fortress",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Dambulla",
    main_sight_description: {
      title: "MILLENNIUM ELEPHANT FOUNDATION & SIGIRIYA",
      text: "MILLENNIUM ELEPHANT FOUNDATION\nMillennium Elephant Foundation, which has been home to the Samarasinghe family and their elephants for many generations, was first opened to the public as the Club Concept Elephant Bath in 1979 by Sam Samarasinghe (1931-1991), a dedicated animal lover. After Samarasinghe’s death in August 1999, MEF was founded in his memory with the assistance of the World Society for the Protection of Animals (Now known as World Animal Protection), and unveiled as a sanctuary possessing proper caretaking facilities and medical services for captive elephants. MEF strives to improve the care and treatment of Sri Lankan elephants whilst increasing awareness about the crippling conditions many of them face throughout the country. The foundation remains the only certified non-profit organization working with captive elephants in Sri Lanka today.\nTourists can observe and walk with the elephants at MEF as well as assist with their daily washing in the Kuda Oya River that runs through the grounds. The funds generated from both visitors and volunteers is used to maintain the elephants well-being, and to enable the care and rescue of more captive elephants. MEF ensures that it strictly abides by the guidelines set by the Sri Lanka Tourism Development Authority.\n\nSIGIRIYA\nSigiriya is the stunning 5th century rock fortress hideaway of fugitive king. This citadel of unusual beauty rising 200 meters from the scrub jungle was the innermost stronghold of the 70 hectare fortified town. A moat, rampart and extensive gardens including the water garden, a UNESCO world heritage site , ring the base of the rock and the world- renowned frescoes of the “Heavenly Maidens” still glowing with colour can be reached by a spiral staircase."
    },
    details: {
      driving_times: [
        "Colombo to Pinnawala – approx. 3 hrs (91.9 km)",
        "Pinnawala to Sigiriya Rock – approx. 2 hrs 45 mins (105 km)"
      ],
      excursion_durations: [
        "Pinnawala – approx. 1 hr 30 mins",
        "Sigiriya Rock – approx. 2 hrs (ascending & descending)"
      ],
      dress_code: "Pinnawala – Summer wear (weather average – 28 – 32 °C) Sigiriya – Summer wear (weather average – 32 – 34 °C) (Shorts, sundresses, and tank tops are suggested)"
    }
  },
  {
    day: 3,
    title: "SIGIRIYA / DAMBULLA / MATALE / KANDY",
    plan: [
      "After breakfast check-out and transfer to Kandy.",
      "En-route visit the ancient Cave Temple in Dambulla.",
      "There after visit the Matale Ayurvedic Spice Garden, Batik Factory and gem Museum.",
      "In the evening visit to the Temple of the Tooth.",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "DAMBULLA & SPICE GARDEN",
      text: "DAMBULLA\nDambulla Rock Temple was built by King Walagamba in the 1st Century BC and it is a world Heritage site. It is the most impressive of Sri Lanka’s cave Temples. The complex of five caves with over 2000 sq metres of painted walls and ceilings is the largest area of paintings found in the world. It contains over 150 images of the Buddha of which the largest is the Colossal figure of the Buddha carved out of Rock and spanning 14 meters\n\nSPICE GARDEN\nVisit the Spice Garden in Matala, where you can see the different types of spices growing in Sri Lanka. Here you can observe the growth of spices and learn a lot of interesting information about the process of processing and further manufacture of Ayurveda products."
    },
    details: {
      driving_times: [
        "Sigiriya to Dambulla Cave – approx. 30 minutes (19.4 km)",
        "Habarana to Dambulla Cave – approx. 40 minutes (24.1km)",
        "Dambulla to Dambulla Cave – approx. 10 mins (2.7 km)",
        "Dambulla Cave Temple to Matale – approx. 1hr 15 min (46 km)",
        "Matale to Kandy – approx. 1 hr (25 km)"
      ],
      excursion_durations: [
        "Dambulla Cave Temple – approx. 40 minutes",
        "Matale Spice Garden – approx. 40 minutes",
        "Gem Museum – approx. 30 minutes",
        "Batik Factory – approx. 30 minutes"
      ],
      dress_code: "Dambulla Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless)(weather average Dambulla & Matale- 32 – 34 °C) (weather average in Kandy – 28 – 31 °C)"
    }
  },
  {
    day: 4,
    title: "KANDY CITY TOUR / PERADENIYA / BEACH STAY",
    plan: [
      "After breakfast commence city tour of Kandy, including Upper Lake Drive, Market Square, Arts and craft Centre and the Royal Botanical Garden at Peradeniya.",
      "On completion transfer to the selected beach hotel in down south or east coast."
    ],
    accommodation: "PLEASE DO BOOK YOUR BEACH STAY FROM OUR BEACH STAY SECTION",
    main_sight_description: {
      title: "KANDY, TOOTH RELIC TEMPLE & ROYAL BOTANICAL GARDENS",
      text: "KANDY\nKandy is the last capital of the Lankan Kings and is also a UNESCO World Heritage Site located in a mountain range at an altitude of 488 m above sea level, the city is very picturesque. The name “Kandy” is a splendor and splendor. A lot of legends, traditions and folklore are still carefully preserved by the inhabitants of the city. Kandy and to this day is the cultural capital of the country. In the center of the city, near the lake, is the temple of Dalada Maligawa, where the main relic of the country – the Holy Tooth of the Buddha. Once a year, during the colorful festival of Esala Perahera, which takes place in late July – early August, the shrine resting on the back of the main elephant of the temple is displayed for public viewing. In the procession, passing through the streets of the city, dozens of elephants, covered with bright cloths with bells and illuminations, hundreds of dancers, acrobats participate. Visiting the Temple of the Tooth of the Buddha.\n\nTOOTH RELIC TEMPLE\nThe hill capital is another “World Heritage Site”. It was the last stronghold of the Sinhalese Kings during the Portuguese, Dutch and British rule and finally ceded to the British in 1815 after an agreement. To the Buddhists of Sri Lanka and the World, Kandy is one of the most sacred sites as it is the home of the “Dalada Maligawa” – Temple of the Sacred Tooth Relic of Lord Buddha. Close by are the remains of the Royal Palace (“Maha Wasala”), “Palle Wasala”- where the Queens stayed-now used for the National Museum, “Meda Wasala” where other close relatives lived, Audience Hall, Natha Devala and Vishnu Devala are situated close by. The Bathing Pavilion (“Ulpenge”) is by the Lake and in the Center of the lake is the Island called “Kiri samudraya” (Milk white ocean) used by the kings as the summerhouse. Today it is the center of Buddhism, Arts, Crafts, Dancing, Music and Culture. Visitors can see these Dance & Music at the daily Cultural Performances held at several places in the city.\n\ROYAL BOTANICAL GARDENS\n147 acres in extent; Started in 1374 as a pleasure garden of the Kings of Gampola and Kandy.  There are more than 4,000 species of trees, plants and creepers. Some rare and endemic as well as flora from the tropical world are found in the gardens.  Spice Garden and Orchid House are popular with tourists. There are 5 Palm Avenues beautifying the gardens, the earliest and tallest Palm Avenue (Royal Palm Avenue) was planted in 1905 and the Double Coconuts from the Seashells Island, with the largest seed of all plants in the world is one such avenue."
    },
    details: {
      driving_times: [
        "Kandy to Peradeniya – approx. 20 mins (5.6 km)"
      ],
      excursion_durations: [
        "Kandy city tour &Tooth Temple – approx. 1 hr 30 mins",
        "Peradeniya Garden – approx. 1 hr"
      ],
      dress_code: "Tooth Relic Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless) (weather average in Kandy – 28 – 31 °C)"
    }
  }
],
inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites mentioned."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Airfares, travel Insurance, or airport taxes.",
  "Any camera fees.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Tips, portage, & gratuities.",
  "All expenses of personal nature",
  "Other services not mentioned in the program."
]
  },

// --------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
{
    title: "Romance in Paradise",
    duration: "5 DAYS 4 NIGHTS",
    price: "Negotiable",
    description: "Celebrate your 5-star Sri Lankan honeymoon with the perfect blend of culture, misty highlands, and blissful beach relaxation. Your romantic journey begins in Kandy after a visit to the Pinnawala elephant orphanage, where you'll explore the Royal Botanical Gardens and sacred Temple of the Tooth Relic. Next, ascend into the tea-scented highlands of Nuwaraeliya, witnessing the Ramboda and Devon falls and touring a tea plantation by Gregory Lake. From the peaks, unwind on the golden coast of Bentota with a magical Madu River safari and a visit to a sea turtle hatchery. Your adventure concludes with a city tour in Colombo, all while enjoying 5-star accommodation, a personal guide, and a private car for a seamless romantic escape.",
    image: "/images/Uga-Ulagalla.jpg",
    category: "Honeymoon & Beach",
    highlights: [
  "Visit Pinnawala Elephant Orphanage",
  "Explore Kandy City",
  "Wander the Royal Botanical Gardens, Peradeniya",
  "Visit the sacred Temple of the Tooth Relic",
  "See Ramboda Falls",
  "See Devon Falls",
  "Tour a Tea Plantation & Factory in Nuwaraeliya",
  "Relax by Gregory Lake",
  "Take a Madu River Boat Safari in Bentota",
  "Visit a Sea Turtle Hatchery",
  "Enjoy a Colombo City Tour",
  "Shop at Pettah Local Market",
  "Enjoy 5-Star Accommodation",
  "Private Transportation with Personal Guide"
],
    itinerary: [
  {
    day: 1,
    title: "AIRPORT / PINNAWALA / KANDY",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome by your personal guide.",
      "Transfer to Kandy.",
      "En-route, visit the Pinnawala Elephant Orphanage to observe the feeding and bathing of the elephants.",
      "Continue to Kandy and visit the Royal Botanical Garden in Peradeniya.",
      "In the evening, visit the sacred Temple of the Tooth Relic, followed by a walk around Kandy Lake.",
      "Check-in at your 5-star hotel and relax."
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "PINNAWALA, ROYAL BOTANICAL GARDENS & TOOTH RELIC TEMPLE",
      text: "PINNAWALA ELEPHANT ORPHANAGE\nEstablished in 1975, the Pinnawala Elephant Orphanage provides care and protection for many orphaned young elephants found in the wild. Visitors can watch the feeding of baby elephants with milk bottles and observe the entire herd as they bathe and play in the nearby Ma Oya river. It's a unique opportunity to get up close with these gentle giants.\n\nROYAL BOTANICAL GARDENS\nStarted in 1374 as a pleasure garden for the Kings of Kandy, the Royal Botanical Gardens at Peradeniya now span 147 acres. They are world-renowned for a vast collection of flora, including over 4,000 species of trees, plants, and creepers. The Spice Garden and the magnificent Orchid House are popular highlights for all visitors.\n\nTOOTH RELIC TEMPLE\nThe hill capital of Kandy is a UNESCO World Heritage Site and home to the 'Dalada Maligawa' – the Temple of the Sacred Tooth Relic of Lord Buddha. It is the most sacred site for Buddhists in Sri Lanka. The temple complex is the last royal palace of the Sinhalese kings and remains a vibrant center of Buddhism, arts, crafts, and culture."
    },
    details: {
      driving_times: [
        "Airport to Pinnawala – approx. 2 hrs 30 mins (90 km)",
        "Pinnawala to Kandy – approx. 1 hr 30 mins (42 km)",
        "Kandy to Peradeniya Gardens – approx. 20 mins (6 km)"
      ],
      excursion_durations: [
        "Pinnawala Elephant Orphanage – approx. 2 hrs",
        "Royal Botanical Garden – approx. 1 hr 30 mins",
        "Temple of the Tooth Relic – approx. 1 hr"
      ],
      dress_code: "Pinnawala & Gardens – Summer wear (weather average – 28 – 31 °C). Tooth Relic Temple – Long wear (must cover shoulders and knees)."
    }
  },
  {
    day: 2,
    title: "KANDY / NUWARA ELIYA",
    plan: [
      "After breakfast, check-out and begin the scenic transfer to Nuwara Eliya.",
      "En-route, stop to admire the beautiful Ramboda Falls.",
      "Visit a lush tea factory and plantation to learn about the complete tea-making process.",
      "Upon arrival in Nuwara Eliya, visit a local Strawberry Garden (seasonal).",
      "Enjoy leisure time and a stroll around Gregory Lake.",
      "Check-in at your 5-star hotel and relax in the cool climate."
    ],
    accommodation: "Dinner & overnight stay in Nuwara Eliya",
    main_sight_description: {
      title: "RAMBODA, TEA FACTORY & NUWARA ELIYA",
      text: "RAMBODA FALLS\nRamboda Falls is 109m high and the 11th highest waterfall in Sri Lanka. Located in Pussellawa, it is a stunning sight easily accessible from the main road and is a popular spot for photos as you ascend into the hill country.\n\nTEA PRODUCTION IN SRI LANKA\nFormerly Ceylon, Sri Lanka is world-famous for its high-quality tea. You will visit a tea plantation and factory in the central highlands to observe the entire process, from plucking the tea leaves to processing, grading, and packing. You can also sample a cup of fresh, unblended Ceylon tea.\n\nNUWARA ELIYA\nThe hill-resort of Nuwara Eliya (1890 meters above sea level), known as 'Little England', is scenically set among high mountain ranges and prime tea plantations. Its colonial-era architecture, pretty flower-gardens, and 18-hole golf course are reminders of its British colonial-period roots. Visitors can enjoy garden-fresh strawberries and warm themselves by a log fire in the cool evening."
    },
    details: {
      driving_times: [
        "Kandy to Ramboda Falls – approx. 2 hrs (53 km)",
        "Ramboda to Nuwara Eliya – approx. 1 hr (27 km)"
      ],
      excursion_durations: [
        "Ramboda Falls visit – approx. 20 mins",
        "Tea Factory tour – approx. 45 mins",
        "Gregory Lake visit – approx. 1 hr"
      ],
      dress_code: "Nuwara Eliya – Warm Clothes (weather average – 16 – 26 °C). A sweater or light jacket is recommended, especially for the evening."
    }
  },
  {
    day: 3,
    title: "NUWARA ELIYA / BENTOTA",
    plan: [
      "After breakfast, check-out and transfer to the coastal beach town of Bentota.",
      "As you descend from the hills, stop to view the impressive Devon Waterfall.",
      "Once in the coastal area, embark on a fascinating Madu River boat safari through mangrove forests.",
      "Visit the Sea Turtle Hatchery in Kosgoda to learn about sea turtle conservation.",
      "Check-in at your 5-star beach resort for leisure by the sea."
    ],
    accommodation: "Dinner & overnight stay in Bentota",
    main_sight_description: {
      title: "DEVON FALLS, MADU RIVER & TURTLE HATCHERY",
      text: "DEVON WATERFALL\nOne of the most famous waterfalls in Sri Lanka, Devon Falls is 97 meters high and named after a pioneer English coffee planter. It is located in the hill country and offers a spectacular view from a dedicated viewpoint on the roadside.\n\nMADU RIVER SAFARI\nThe Madu Ganga (River) is a coastal wetland ecosystem rich in biodiversity. A boat safari will take you through dense mangrove forests, past numerous small islands (some with cinnamon plantations), and to an ancient Buddhist monastery. You can also experience a natural 'fish spa' in the river.\n\nSEA TURTLE HATCHERY (KOSGODA)\nThe Kosgoda area is a prime nesting site for sea turtles. This conservation project protects turtle eggs from predators and poachers, hatching them safely before releasing the baby turtles into the ocean. Visitors can see and learn about the five species of turtles that visit Sri Lanka's shores."
    },
    details: {
      driving_times: [
        "Nuwara Eliya to Devon Falls – approx. 1 hr 30 mins (60 km)",
        "Devon Falls to Bentota – approx. 4-5 hrs (170 km)"
      ],
      excursion_durations: [
        "Madu River boat safari – approx. 1 hr 30 mins",
        "Kosgoda Turtle Hatchery – approx. 30-45 mins"
      ],
      dress_code: "Summer wear (weather average – 28 – 32 °C). Bring swimwear, sunscreen, and a hat for the beach and boat safari."
    }
  },
  {
    day: 4,
    title: "BENTOTA / COLOMBO",
    plan: [
      "After a leisurely breakfast, check-out and transfer to Colombo, Sri Lanka's capital.",
      "Proceed on a comprehensive Colombo city tour, visiting key landmarks.",
      "Enjoy a shopping tour at the bustling Pettah local market and modern shopping centers.",
      "Check-in at your 5-star hotel and enjoy your final evening."
    ],
    accommodation: "Dinner & overnight stay in Colombo",
    main_sight_description: {
      title: "COLOMBO & PETTAH MARKET",
      text: "Colombo like many capital cities in developing countries Colombo is fast changing its face. almost overnight, skyscrapers arise from where old buildings once stood, yet in some parts, the old world charm is retained. A 100-year-old clock tower and several British built, colonial buildings are still to be seen in the city.  The Pettah bazaar – where one can shop for bargains, a Hindu and a Buddhist temple, residential areas where you find the stately homes of the affluent, the Colombo museum, the Bandaranaike memorial international conference hall – an outright gift to Sri Lanka from the people’s republic of china, the new parliament in Sri Jayewardenepura and the folk art center are some of the places of interest that one can visit to."
    },
    details: {
      driving_times: [
        "Bentota to Colombo – approx. 1 hr 30 mins (85 km via Expressway)"
      ],
      excursion_durations: [
        "Colombo city tour & shopping – approx. 3-4 hrs"
      ],
      dress_code: "Colombo – Summer wear (tops, shorts, trousers suggested). Colombo Temples – Long wear (long trousers and sleeve tops). (weather average – 30 – 34 °C)"
    }
  },
  {
    day: 5,
    title: "COLOMBO / AIRPORT",
    plan: [
      "Enjoy a final breakfast at your hotel.",
      "Depending on your flight schedule, you will have free time for relaxation or last-minute souvenir shopping.",
      "Transfer to Colombo International Airport (BIA) for your departure flight."
    ],
    accommodation: "Breakfast at the hotel.",
    main_sight_description: {
      title: "DEPARTURE",
      text: "You will be transferred to the airport for your departure, concluding your 5-star tour of Sri Lanka."
    },
    details: {
      driving_times: [
        "Colombo to Airport (BIA) – approx. 45 mins (35 km)"
      ],
      excursion_durations: [],
      dress_code: ""
    }
  }
],

inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Other services that are not mentioned in the program.",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
]
  },

//-------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

{
    title: "Down South Vibes",
    duration: "5 DAYS 4 NIGHTS",
    price: "Negotiable",
    description: "Catch the \"Down South Vibes\" on this 5-day, 5-star Sri Lankan beach escape. Your journey begins in Hikkaduwa, featuring a fun cycling tour of the Galle Dutch Fort. Next, hop in a Tuk Tuk to Unawatuna for pure beach bliss and an awe-inspiring whale watching safari in Mirissa. Finally, trade the coast for the capital's buzz with a Colombo city and shopping tour, topped off with an exciting nightclub and pub visit. This all-inclusive package, with 5-star accommodation, meals, and a personal guide, is your perfect blend of sun-soaked adventure and vibrant city life.",
    image: "/images/image.jpg",
    category: "Honeymoon & Beach",
    highlights: [
  "Galle Dutch Fort",
  "Galle City Cycling Tour",
  "Tuk Tuk Tour to Unawatuna",
  "Relax at Unawatuna Beach",
  "Whale Watching in Mirissa",
  "Colombo City & Shopping Tour",
  "Colombo Nightlife (Club & Pub Visit)"
],
   itinerary: [
  {
    day: 1,
    title: "AIRPORT / HIKKADUWA / GALLE",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome by your personal guide.",
      "Transfer to your 5-star hotel in Hikkaduwa and check-in (check-in time 2:00 PM).",
      "In the afternoon, proceed to the Galle Dutch Fort for an exciting city cycling tour.",
      "Explore the historic ramparts, cobblestone streets, and colonial-era buildings.",
      "Return to your hotel for leisure by the beach."
    ],
    accommodation: "Dinner & overnight stay in Hikkaduwa",
    main_sight_description: {
      title: "GALLE DUTCH FORT",
      text: "The Galle Fort, a UNESCO World Heritage Site, is a stunning example of a fortified city built by Europeans in South and Southeast Asia. Originally built by the Portuguese in the 16th century, it was extensively fortified by the Dutch in the 17th century. A cycling tour is the perfect way to explore its charming, narrow streets, historic churches, lighthouse, and the vibrant life within its ancient walls, now home to art galleries, chic cafes, and boutique shops."
    },
    details: {
      driving_times: [
        "Airport to Hikkaduwa – approx. 2 hrs 30 mins (145 km)"
      ],
      excursion_durations: [
        "Galle City Cycling Tour – approx. 2 hrs"
      ],
      dress_code: "Summer wear (shorts, t-shirts suggested). (weather average – 28 – 32 °C)"
    }
  },
  {
    day: 2,
    title: "HIKKADUWA / UNAWATUNA",
    plan: [
      "After breakfast, enjoy a fun and local Tuk Tuk tour as you transfer to Unawatuna.",
      "Check-in at your 5-star hotel in Unawatuna.",
      "Spend the rest of the day relaxing on the famous Unawatuna beach.",
      "Enjoy the sun, swim in the calm turquoise waters, or explore the beachfront restaurants.",
      "Leisure at your hotel."
    ],
    accommodation: "Dinner & overnight stay in Unawatuna",
    main_sight_description: {
      title: "UNAWATUNA BEACH & TUK TUK TOUR",
      text: "Experience the iconic Sri Lankan Tuk Tuk, a three-wheeled auto-rickshaw, for a short and scenic ride along the coast to Unawatuna. Unawatuna is one of Sri Lanka's most famous beaches, known for its beautiful crescent-shaped bay, calm waters protected by a reef, and vibrant atmosphere. It's the perfect place to unwind, swim, and soak up the tropical beach vibe."
    },
    details: {
      driving_times: [
        "Hikkaduwa to Unawatuna – approx. 30-45 mins (25 km)"
      ],
      excursion_durations: [
        "Beach Relaxation – At your leisure"
      ],
      dress_code: "Beach wear, swimwear, summer clothes. (weather average – 28 – 32 °C)"
    }
  },
  {
    day: 3,
    title: "UNAWATUNA / MIRISSA / UNAWATUNA",
    plan: [
      "An early morning start (approx. 5:30 AM) to transfer to Mirissa.",
      "Embark on an awe-inspiring whale watching safari (boat tour) to see Blue Whales, Sperm Whales, and dolphins (seasonal).",
      "After the safari, return to Unawatuna.",
      "Spend the afternoon at leisure on Unawatuna beach.",
      "Relax and enjoy the hotel facilities."
    ],
    accommodation: "Dinner & overnight stay in Unawatuna",
    main_sight_description: {
      title: "WHALE WATCHING MIRISSA",
      text: "Mirissa is one of the best places in the world to see the magnificent Blue Whale, the largest animal on Earth. From November to April, the waters off Mirissa are a feeding ground for these giants, as well as Sperm Whales, Fin Whales, and large pods of dolphins. An early morning boat expedition offers a truly unforgettable encounter with these majestic marine mammals in their natural habitat."
    },
    details: {
      driving_times: [
        "Unawatuna to Mirissa – approx. 45 mins (30 km)"
      ],
      excursion_durations: [
        "Whale Watching Safari – approx. 3-5 hours (depending on sightings)"
      ],
      dress_code: "Light summer clothes, hat, sunglasses, and sunscreen. A light rain jacket is sometimes useful."
    }
  },
  {
    day: 4,
    title: "UNAWATUNA / COLOMBO",
    plan: [
      "After breakfast, check-out and transfer to Colombo, Sri Lanka's commercial capital.",
      "Upon arrival, embark on a Colombo city tour and shopping tour, visiting key landmarks and modern shopping malls.",
      "Check-in at your 5-star hotel.",
      "In the evening, experience Colombo's vibrant nightlife with a visit to a popular nightclub or pub.",
      "Return to the hotel for leisure."
    ],
    accommodation: "Dinner & overnight stay in Colombo",
    main_sight_description: {
      title: "COLOMBO CITY & NIGHTLIFE",
      text: "Colombo is a fast-changing, dynamic city that blends its colonial past with a modern, cosmopolitan future. Your tour will take you to see historic sites like the Old Parliament and Independence Square, as well as the bustling Pettah market. As night falls, Colombo comes alive with sophisticated rooftop bars, chic restaurants, and energetic nightclubs, offering a vibrant end to your coastal journey."
    },
    details: {
      driving_times: [
        "Unawatuna to Colombo – approx. 2 hrs (125 km via Expressway)"
      ],
      excursion_durations: [
        "Colombo city & shopping tour – approx. 3-4 hrs",
        "Nightlife visit – At your leisure"
      ],
      dress_code: "Summer wear for the day. Smart casual for evening clubs/pubs (avoid shorts and flip-flops). (weather average – 30 – 34 °C)"
    }
  },
  {
    day: 5,
    title: "COLOMBO / AIRPORT",
    plan: [
      "Enjoy a final breakfast at your hotel.",
      "Depending on your flight schedule, you may have free time for last-minute souvenir shopping or relaxation.",
      "Transfer to Colombo International Airport (BIA) for your departure flight."
    ],
    accommodation: "Breakfast at the hotel.",
    main_sight_description: {
      title: "DEPARTURE",
      text: "You will be transferred to the airport for your departure, filled with sunny memories of Sri Lanka's 'Down South Vibes'."
    },
    details: {
      driving_times: [
        "Colombo to Airport (BIA) – approx. 45 mins (35 km)"
      ],
      excursion_durations: [],
      dress_code: ""
    }
  }
],

inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at 5-star hotels sharing Double/twin including with breakfast & dinner",
  "Transportation in an A/C Vehicle with the service of a Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites mentioned (Galle Fort Cycling, Madu River Safari, Turtle Hatchery, Whale Watching)."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Entrance fees for Colombo Nightclubs/Pubs.",
  "Other services that are not mentioned in the program.",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
]
  },

  // --------------------------------------------------------------------------------
// 4. 4th PACKAGE: "Tropical Ceylon Odyssey"
// --------------------------------------------------------------------------------

  {
    title: "Tropical Ceylon Odyssey",
    duration: "5 DAYS 4 NIGHTS",
    price: "Negotiable",
    description: "Experience the breathtaking diversity of Sri Lanka on a journey that takes you from bustling cities to misty peaks and wild jungles. Your adventure begins in the urban heart of COLOMBO and with a heartwarming visit to the PINNAWALA elephant gathering. Next, discover the island's cultural soul in sacred KANDY and the magnificent PERADENIYA gardens, before ascending into the cool, tea-scented highlands. You'll witness the cascading RAMBODA falls, explore the colonial charm of NUWARA ELIYA 'Little England' , and soak in the iconic, sweeping views from ELLA. Finally, your journey culminates in a thrilling safari adventure in YALA, searching for leopards and elephants in their natural habitat, leaving you with unforgettable memories of Sri Lanka's rich culture and untamed nature",
    image: "/images/The-Best-Places-to-Visit-in-Sri-Lanka.jpg",
    category: "Nature & Wildlife",
    highlights: ["Colombo City Tour", "Gem Museum", "Batik Factory", "Millennium Elephant Foundation ( Walk with an elephant", "Cultural Dance Show", "Temple of Tooth Relic","Royal Botanical Garden", "Ramboda Falls", "Tea Factory Visit", "Nuwara Eliya City Tour", "Ravana Falls", "Yala National Park Safari", "Galle Fort Visit",],
    itinerary: [
  {
    day: 1,
    title: "AIRPORT / COLOMBO",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome and traditional greeting in the airport lobby with the company representative and the Language speaking chauffeur guide.",
      "Transfer to Colombo and check-in at hotel (check-in time 02.00 pm)",
      "Afternoon proceed on a city tour in Colombo including shopping",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Colombo",
    main_sight_description: {
      title: "COLOMBO",
      text: "Colombo like many capital cities in developing countries Colombo is fast changing its face. almost overnight, skyscrapers arise from where old buildings once stood, yet in some parts, the old world charm is retained. A 100-year-old clock tower and several British built, colonial buildings are still to be seen in the city.  The Pettah bazaar – where one can shop for bargains, a Hindu and a Buddhist temple, residential areas where you find the stately homes of the affluent, the Colombo museum, the Bandaranaike memorial international conference hall – an outright gift to Sri Lanka from the people’s republic of china, the new parliament in Sri Jayewardenepura and the folk art center are some of the places of interest that one can visit to."
    },
    details: {
      driving_times: [
        "Airport to Colombo – approx. 40 minutes (35 km)"
      ],
      excursion_durations: [
        "Colombo city tour & shopping – approx. 3 hrs"
      ],
      dress_code: "Colombo – Summer wear (tops, shorts, trousers suggested) Colombo Temples – Long wear (long trousers and sleeve tops) (weather average – 30 – 34 °C)"
    }
  },
  {
    day: 2,
    title: "COLOMBO / PINNAWALA / KANDY",
    plan: [
      "After breakfast check-out and proceed to Kandy. En route visit Millennium Elephant Foundation",
      "On completion transfer to Kandy and visit a Gem Museum, Batik factory & Evening witness of the Cultural Dance Show",
      "Afternoon city tour of Kandy including Upper Lake Drive Market Square, Arts and crafts Centre and Temple of the Sacred Tooth Relic.",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "MILLENNIUM ELEPHANT FOUNDATION, KANDY & TOOTH RELIC TEMPLE",
      text: "MILLENNIUM ELEPHANT FOUNDATION\nMillennium Elephant Foundation, which has been home to the Samarasinghe family and their elephants for many generations, was first opened to the public as the Club Concept Elephant Bath in 1979 by Sam Samarasinghe (1931-1991), a dedicated animal lover. After Samarasinghe’s death in August 1999, MEF was founded in his memory with the assistance of the World Society for the Protection of Animals (Now known as World Animal Protection), and unveiled as a sanctuary possessing proper caretaking facilities and medical services for captive elephants. MEF strives to improve the care and treatment of Sri Lankan elephants whilst increasing awareness about the crippling conditions many of them face throughout the country. The foundation remains the only certified non-profit organization working with captive elephants in Sri Lanka today.\nTourists can observe and walk with the elephants at MEF as well as assist with their daily washing in the Kuda Oya River that runs through the grounds. The funds generated from both visitors and volunteers is used to maintain the elephants well-being, and to enable the care and rescue of more captive elephants. MEF ensures that it strictly abides by the guidelines set by the Sri Lanka Tourism Development Authority.\n\nKANDY\nKandy is the last capital of the Lankan Kings and is also a UNESCO World Heritage Site located in a mountain range at an altitude of 488 m above sea level, the city is very picturesque. The name “Kandy” is a splendor and splendor. A lot of legends, traditions and folklore are still carefully preserved by the inhabitants of the city. Kandy and to this day is the cultural capital of the country. In the center of the city, near the lake, is the temple of Dalada Maligawa, where the main relic of the country – the Holy Tooth of the Buddha. Once a year, during the colorful festival of Esala Perahera, which takes place in late July – early August, the shrine resting on the back of the main elephant of the temple is displayed for public viewing. In the procession, passing through the streets of the city, dozens of elephants, covered with bright cloths with bells and illuminations, hundreds of dancers, acrobats participate. Visiting the Temple of the Tooth of the Buddha.\n\nTOOTH RELIC TEMPLE\nThe hill capital is another “World Heritage Site”. It was the last stronghold of the Sinhalese Kings during the Portuguese, Dutch and British rule and finally ceded to the British in 1815 after an agreement. To the Buddhists of Sri Lanka and the World, Kandy is one of the most sacred sites as it is the home of the “Dalada Maligawa” – Temple of the Sacred Tooth Relic of Lord Buddha. Close by are the remains of the Royal Palace (“Maha Wasala”), “Palle Wasala”- where the Queens stayed-now used for the National Museum, “Meda Wasala” where other close relatives lived, Audience Hall, Natha Devala and Vishnu Devala are situated close by. The Bathing Pavilion (“Ulpenge”) is by the Lake and in the Center of the lake is the Island called “Kiri samudraya” (Milk white ocean) used by the kings as the summerhouse. Today it is the center of Buddhism, Arts, Crafts, Dancing, Music and Culture. Visitors can see these Dance & Music at the daily Cultural Performances held at several places in the city."
    },
    details: {
      driving_times: [
        "Colombo to Pinnawala – approx. 3 hrs (91.9 km)",
        "Pinnawala to Kandy – approx. 1 hr 30 mins (42.2 km)"
      ],
      excursion_durations: [
        "Pinnawala – approx. 1 hr 30 mins",
        "Kandy city tour &Tooth Temple – approx. 1 hr 30 mins"
      ],
      dress_code: "Pinnawala – Summer wear (shorts & tank tops suggested) Tooth Relic Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless) (weather average in Kandy – 28 – 31 °C)"
    }
  },
  {
    day: 3,
    title: "KANDY / PERADENIYA / RAMBODA / NUWARA ELIYA",
    plan: [
      "After breakfast check-out and visit the Royal Botanical Garden in Peradeniya",
      "There after transfer to Nuwara Eliya. En-route visit a Ramboda waterfall and a tea factory",
      "Arrive in Nuwara Eliya and proceed on a sightseeing tour in the city",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Nuwara Eliya",
    main_sight_description: {
      title: "ROYAL BOTANICAL GARDENS, RAMBODA, TEA & NUWARA ELIYA",
      text: "ROYAL BOTANICAL GARDENS\n147 acres in extent; Started in 1374 as a pleasure garden of the Kings of Gampola and Kandy.  There are more than 4,000 species of trees, plants and creepers. Some rare and endemic as well as flora from the tropical world are found in the gardens.  Spice Garden and Orchid House are popular with tourists. There are 5 Palm Avenues beautifying the gardens, the earliest and tallest Palm Avenue (Royal Palm Avenue) was planted in 1905 and the Double Coconuts from the Seashells Island, with the largest seed of all plants in the world is one such avenue.\n\nRAMBODA WATERFALL\nThe 11th highest waterfall in Sri Lanka, like every other waterfall it is located in the hill country. It is ideal for a family vacation, surrounding it are a lot of holiday resorts that cater to your every need. It is located in Pussellawa. This waterfall is about 109m high and the waterfall has two main drops which tend to confuse people when they see it and most of the time the upper waterfall is not visited because most of the people are not aware of the fact that there are two drops in the fall.\n\nTEA PRODUCTION IN SRI LANKA\nFormerly Ceylon, is of high importance to the Sri Lankan economy and the world market. The country is the world’s fourth largest producer of tea and the industry is one of the country’s main sources of foreign exchange and a significant source of income for laborers, with tea accounting for 15% of the GDP, generating roughly $700 million annually. In 1995, Sri Lanka was the world’s leading exporter of tea, (rather than producer) with 23% of the total world export, but it has since been surpassed by Kenya. The tea sector employs, directly or indirectly over 1 million people in Sri Lanka and in 1995 directly employed 215,338 on tea plantations and estates. The humidity, cool temperatures, and rainfall in the country’s central highlands provide a climate that favors the production of high quality tea. The industry was introduced to the country in 1867 by James Taylor, the British planter who arrived in 1852.\n\nNUWARA ELIYA\nThe hill-resort of Nuwara Eliya , 1890 meters above sea level, is scenically set among high mountain ranges and prime tea plantations. Queen Anne and Georgian architecture, pretty flower-gardens and an 18-hole golf course are reminders of its British colonial-period roots. The Hakgala Botanic Gardens specialize in fine collections of sub-tropical flora. At Nuwara Eliya, visitors can enjoy garden-fresh strawberries and asparagus and warm themselves at a log-fire – in the heart of a tropical island!"
    },
    details: {
      driving_times: [
        "Kandy to Peradeniya – approx. 20 mins (5.6 km)",
        "Peradeniya to Ramboda – approx. 2 hrs (53 km)",
        "Ramboda to Nuwara eliya city – approx. 1 hr (27.1 km)"
      ],
      excursion_durations: [
        "Peradeniya Garden – approx. 1 hr",
        "Ramboda Water fall – approx. 20 mins",
        "Nuwara eliya city tour – 45 mins"
      ],
      dress_code: "Peradeniya  – Summer wear (weather average – 28 – 31 °C)(Shorts, sundresses, and tank tops are suggested) Ramboda & Nuwara eliya – Warm Clothes (weather average – 16 – 26 °C)"
    }
  },
  {
    day: 4,
    title: "NUWARA ELIYA / ELLA / YALA",
    plan: [
      "After breakfast check-out and transfer to Yala.",
      "En-route visit Ravana Waterfall",
      "Upon arrival to Yala enjoy afternoon jeep safari at Yala National Park",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Yala",
    main_sight_description: {
      title: "ELLA & YALA NATIONAL PARK",
      text: "ELLA\n127 miles from Colombo and 8 miles from Bandarawela, on the leeward side of the central mountains. The view from Ella Gap is one of the most spectacular scenic sights in Sri Lanka – the landscape falls away in a dizzy drop of 3000ft to the eastern plains. The Ella rock is famous for the cave of Ravana a legendary king of Sri Lanka ruled during the pre-historic times. The 1080-foot high waterfall few miles from the Ella Rest House is one of the most beautiful falls in the country.\n\nYALA NATIONAL PARK\n(Safari time 15.00 hrs to 18.00 hrs – 3 hrs)\nThe Yala National Park covers 126,786 hectares including the Strict Natural Reserve (Block II). The most familiar is Block I (14,101 hectares) and these blocks were established in 1938. Yala is famous for its big herds and large number of Elephants, Leopards, Spotted Deer, Sambhur, Crocodiles, Mongoose, Wild Boar, Wild Buffalo, and many other animals. More than 130 bird species are recorded which includes the resident and winter visitors."
    },
    details: {
      driving_times: [
        "Nuwara eliya to Ella – approx. 2 hrs (59.4 km)",
        "Ella to Yala – approx. 2 hrs (83.8 km)"
      ],
      excursion_durations: [
        "Ravana Water fall – approx. 20 mins",
        "Yala Jeep ride – 3 hrs (15.00 hrs to 18.00 hrs)"
      ],
      dress_code: "Ravana fall & Yala  – Summer wear (weather average – 28 – 31 °C) – (Shorts and tank tops are suggested)"
    }
  },
  {
    day: 5,
    title: "YALA / GALLE CITY TOUR / BEACH STAY",
    plan: [
      "After breakfast check-out and transfer to Galle and proceed on a walking tour in Galle Dutch Fort",
      "On completion transfer to the selected beach hotel in down south or east coast."
    ],
    accommodation: "On completion transfer to the selected beach hotel in down south or east coast.",
    main_sight_description: {
      title: "GALLE",
      text: "Galle is considered to be one of Sri Lanka’s most historically interesting towns.  Built on a premonitory rock in the south of the Island. It was a major port until about 100 years, but today still handles shipping and sailing boats in the natural harbor.\nStroll around the Lighthouse and harbor or visit the old town where you can see the traditional lace makers and wood carvers. An Opportunity to purchase some the finest shell-craft souvenirs in the world."
    },
    details: {
      driving_times: [
        "Yala to Galle – approx. 4 hrs (173 km)"
      ],
      excursion_durations: [
        "Galle fort tour – approx. 40 mins"
      ],
      dress_code: "Yala & Galle  – Summer wear (weather average – 28 – 31 °C) – (Shorts and tank tops are suggested)"
    }
  }
],

inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Other services that are not mentioned in the program.",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
],
  },

  // --------------------------------------------------------------------------------
// 5th PACKAGE: "Discover Sri Lanka"
// --------------------------------------------------------------------------------
  {
    title: "Discover Sri Lanka",
    duration: "6 DAYS 5 NIGHTS",
    price: "Negotiable",
    description: "Experience the absolute best of Sri Lanka in one unforgettable grand tour, blending ancient history, misty highlands, and golden shores. Your adventure begins in the island's historic heart, conquering the Sigiriya Lion Rock, exploring the sacred Dambulla cave temples, and breathing in the fragrant spices of Matale. From there, discover the cultural soul of Kandy and the magnificent Peradeniya gardens, before ascending into the stunning, tea-covered hill country. You'll chase the cascading Ramboda waterfalls, relax in the cool colonial charm of Nuwara Eliya, and soak in the iconic views from Ella. Your journey then shifts to a thrilling safari in Yala National Park, followed by a walk through history on the Dutch-colonial ramparts of the Galle Fort. Finally, after this incredible immersion, you'll unwind with a well-deserved beach stay, leaving you perfectly rejuvenated with memories of a complete island paradise.",
    image: "/images/places-in-kandy.jpg",
    category: "Grand Round Tours",
    highlights: [
  "Colombo City Tour",
  "Millennium Elephant Foundation ( Walk with an elephant )",
  "Sigiriya Rock Fortress",
  "Dambulla Cave Temple",
  "Batik Factory",
  "Gem Museum",
  "Temple of Tooth Relic",
  "Royal Botanical Garden",
  "Ramboda Falls",
  "Tea Factory Visit",
  "Nuwara Eliya City Tour",
  "Ravana Falls",
  "Yala National Park Safari",
  "Galle Fort Visit"
],
    itinerary: [
  {
    day: 1,
    title: "AIRPORT / COLOMBO",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome and traditional greeting in the airport lobby with the company representative and the Language speaking chauffeur guide.",
      "Transfer to Colombo and check-in at hotel (check-in time 02.00 pm)",
      "Afternoon proceed on a city tour in Colombo including shopping"
    ],
    accommodation: "Dinner & overnight stay in Colombo",
    main_sight_description: {
      title: "COLOMBO",
      text: "Colombo like many capital cities in developing countries Colombo is fast changing its face. almost overnight, skyscrapers arise from where old buildings once stood, yet in some parts, the old world charm is retained. A 100-year-old clock tower and several British built, colonial buildings are still to be seen in the city.  The Pettah bazaar – where one can shop for bargains, a Hindu and a Buddhist temple, residential areas where you find the stately homes of the affluent, the Colombo museum, the Bandaranaike memorial international conference hall – an outright gift to Sri Lanka from the people’s republic of china, the new parliament in Sri Jayewardenepura and the folk art center are some of the places of interest that one can visit to."
    },
    details: {
      driving_times: [
        "Airport to Colombo – approx. 40 minutes (35 km)"
      ],
      excursion_durations: [
        "Colombo city tour & shopping – approx. 3 hrs"
      ],
      dress_code: "Colombo – Summer wear (tops, shorts, trousers suggested) Colombo Temples – Long wear (long trousers and sleeve tops) (weather average – 30 – 34 °C)"
    }
  },
  {
    day: 2,
    title: "COLOMBO / PINNAWALA / SIGIRIYA",
    plan: [
      "After breakfast check-out and proceed to Sigiriya.",
      "En route visit Pinnawala Millenium Elephant Foundation.",
      "Evening climb the Sigiriya rock fortress",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Sigiriya/Habarana/Dambulla",
    main_sight_description: {
      title: "MILLENNIUM ELEPHANT FOUNDATION & SIGIRIYA",
      text: "MILLENNIUM ELEPHANT FOUNDATION\nMillennium Elephant Foundation, which has been home to the Samarasinghe family and their elephants for many generations, was first opened to the public as the Club Concept Elephant Bath in 1979 by Sam Samarasinghe (1931-1991), a dedicated animal lover. After Samarasinghe’s death in August 1999, MEF was founded in his memory with the assistance of the World Society for the Protection of Animals (Now known as World Animal Protection), and unveiled as a sanctuary possessing proper caretaking facilities and medical services for captive elephants. MEF strives to improve the care and treatment of Sri Lankan elephants whilst increasing awareness about the crippling conditions many of them face throughout the country. The foundation remains the only certified non-profit organization working with captive elephants in Sri Lanka today.\nTourists can observe and walk with the elephants at MEF as well as assist with their daily washing in the Kuda Oya River that runs through the grounds. The funds generated from both visitors and volunteers is used to maintain the elephants well-being, and to enable the care and rescue of more captive elephants. MEF ensures that it strictly abides by the guidelines set by the Sri Lanka Tourism Development Authority.\n\nSIGIRIYA\nSigiriya is the stunning 5th century rock fortress hideaway of fugitive king. This citadel of unusual beauty rising 200 meters from the scrub jungle was the innermost stronghold of the 70 hectare fortified town. A moat, rampart and extensive gardens including the water garden, a UNESCO world heritage site , ring the base of the rock and the world- renowned frescoes of the “Heavenly Maidens” still glowing with colour can be reached by a spiral staircase."
    },
    details: {
      driving_times: [
        "Colombo to Pinnawala – approx. 3 hrs (91.9 km)",
        "Pinnawala to Sigiriya Rock – approx. 2 hrs 45 mins (105 km)"
      ],
      excursion_durations: [
        "Pinnawala – approx. 1 hr 30 mins",
        "Sigiriya Rock – approx. 2 hrs (ascending & descending)"
      ],
      dress_code: "Pinnawala – Summer wear (weather average – 28 – 32 °C) Sigiriya – Summer wear (weather average – 32 – 34 °C) (Shorts, sundresses, and tank tops are suggested)"
    }
  },
  {
    day: 3,
    title: "SIGIRIYA / DAMBULLA / MATALE / KANDY",
    plan: [
      "After breakfast check-out and transfer to Kandy.",
      "En-route visit the ancient Cave Temple in Dambulla.",
      "There after visit the Matale Ayurvedic Spice Garden, Batik Factory and gem Museum.",
      "In the evening visit to the Temple of the Tooth.",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "DAMBULLA, SPICE GARDEN, KANDY & TOOTH RELIC TEMPLE",
      text: "DAMBULLA\nDambulla Rock Temple was built by King Walagamba in the 1st Century BC and it is a world Heritage site. It is the most impressive of Sri Lanka’s cave Temples. The complex of five caves with over 2000 sq metres of painted walls and ceilings is the largest area of paintings found in the world. It contains over 150 images of the Buddha of which the largest is the Colossal figure of the Buddha carved out of Rock and spanning 14 meters\n\nSPICE GARDEN\nVisit the Spice Garden in Matala, where you can see the different types of spices growing in Sri Lanka. Here you can observe the growth of spices and learn a lot of interesting information about the process of processing and further manufacture of Ayurveda products.\n\nKANDY\nKandy is the last capital of the Lankan Kings and is also a UNESCO World Heritage Site located in a mountain range at an altitude of 488 m above sea level, the city is very picturesque. The name “Kandy” is a splendor and splendor. A lot of legends, traditions and folklore are still carefully preserved by the inhabitants of the city. Kandy and to this day is the cultural capital of the country. In the center of the city, near the lake, is the temple of Dalada Maligawa, where the main relic of the country – the Holy Tooth of the Buddha. Once a year, during the colorful festival of Esala Perahera, which takes place in late July – early August, the shrine resting on the back of the main elephant of the temple is displayed for public viewing. In the procession, passing through the streets of the city, dozens of elephants, covered with bright cloths with bells and illuminations, hundreds of dancers, acrobats participate. Visiting the Temple of the Tooth of the Buddha.\n\nTOOTH RELIC TEMPLE\nThe hill capital is another “World Heritage Site”. It was the last stronghold of the Sinhalese Kings during the Portuguese, Dutch and British rule and finally ceded to the British in 1815 after an agreement. To the Buddhists of Sri Lanka and the World, Kandy is one of the most sacred sites as it is the home of the “Dalada Maligawa” – Temple of the Sacred Tooth Relic of Lord Buddha. Close by are the remains of the Royal Palace (“Maha Wasala”), “Palle Wasala”- where the Queens stayed-now used for the National Museum, “Meda Wasala” where other close relatives lived, Audience Hall, Natha Devala and Vishnu Devala are situated close by. The Bathing Pavilion (“Ulpenge”) is by the Lake and in the Center of the lake is the Island called “Kiri samudraya” (Milk white ocean) used by the kings as the summerhouse. Today it is the center of Buddhism, Arts, Crafts, Dancing, Music and Culture. Visitors can see these Dance & Music at the daily Cultural Performances held at several places in the city."
    },
    details: {
      driving_times: [
        "Sigiriya to Dambulla Cave – approx. 30 minutes (19.4 km)",
        "Habarana to Dambulla Cave – approx. 40 minutes (24.1km)",
        "Dambulla to Dambulla Cave – approx. 10 mins (2.7 km)",
        "Dambulla Cave Temple to Matale – approx. 1hr 15 min (46 km)",
        "Matale to Kandy – approx. 1 hr (25 km)"
      ],
      excursion_durations: [
        "Dambulla Cave Temple – approx. 40 minutes",
        "Matale Spice Garden – approx. 40 minutes",
        "Gem Museum – approx. 30 minutes",
        "Batik Factory – approx. 30 minutes",
        "Tooth Temple – approx. 40 minutes"
      ],
      dress_code: "Dambulla Temple & Tooth Relic Temple – Long wear (long skirts/long dresses & long trousers with half/long sleeve tops (do not wear sleeveless)(weather average Dambulla & Matale- 32 – 34 °C) (weather average in Kandy – 28 – 31 °C)"
    }
  },
  {
    day: 4,
    title: "KANDY / PERADENIYA / RAMBODA / NUWARA ELIYA",
    plan: [
      "After breakfast check-out and visit the Royal Botanical Garden in Peradeniya",
      "There after transfer to Nuwara Eliya. En-route visit a Ramboda waterfall and a tea factory",
      "Arrive in Nuwara eliya and proceed on a sightseeing tour in the city",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Nuwara Eliya",
    main_sight_description: {
      title: "ROYAL BOTANICAL GARDENS, RAMBODA, TEA & NUWARA ELIYA",
      text: "ROYAL BOTANICAL GARDENS\n147 acres in extent; Started in 1374 as a pleasure garden of the Kings of Gampola and Kandy.  There are more than 4,000 species of trees, plants and creepers. Some rare and endemic as well as flora from the tropical world are found in the gardens.  Spice Garden and Orchid House are popular with tourists. There are 5 Palm Avenues beautifying the gardens, the earliest and tallest Palm Avenue (Royal Palm Avenue) was planted in 1905 and the Double Coconuts from the Seashells Island, with the largest seed of all plants in the world is one such avenue.\n\nRAMBODA WATERFALL\nThe 11th highest waterfall in Sri Lanka, like every other waterfall it is located in the hill country. It is ideal for a family vacation, surrounding it are a lot of holiday resorts that cater to your every need. It is located in Pussellawa. This waterfall is about 109m high and the waterfall has two main drops which tend to confuse people when they see it and most of the time the upper waterfall is not visited because most of the people are not aware of the fact that there are two drops in the fall.\n\nTEA PRODUCTION IN SRI LANKA\nFormerly Ceylon, is of high importance to the Sri Lankan economy and the world market. The country is the world’s fourth largest producer of tea and the industry is one of the country’s main sources of foreign exchange and a significant source of income for laborers, with tea accounting for 15% of the GDP, generating roughly $700 million annually. In 1995, Sri Lanka was the world’s leading exporter of tea, (rather than producer) with 23% of the total world export, but it has since been surpassed by Kenya. The tea sector employs, directly or indirectly over 1 million people in Sri Lanka and in 1995 directly employed 215,338 on tea plantations and estates. The humidity, cool temperatures, and rainfall in the country’s central highlands provide a climate that favors the production of high quality tea. The industry was introduced to the country in 1867 by James Taylor, the British planter who arrived in 1852.\n\nNUWARA ELIYA\nThe hill-resort of Nuwara Eliya , 1890 meters above sea level, is scenically set among high mountain ranges and prime tea plantations. Queen Anne and Georgian architecture, pretty flower-gardens and an 18-hole golf course are reminders of its British colonial-period roots. The Hakgala Botanic Gardens specialize in fine collections of sub-tropical flora. At Nuwara Eliya, visitors can enjoy garden-fresh strawberries and asparagus and warm themselves at a log-fire – in the heart of a tropical island!"
    },
    details: {
      driving_times: [
        "Kandy to Peradeniya – approx. 20 mins (5.6 km)",
        "Peradeniya to Ramboda – approx. 2 hrs (53 km)",
        "Ramboda to Nuwara eliya city – approx. 1 hr (27.1 km)"
      ],
      excursion_durations: [
        "Peradeniya Garden – approx. 1 hr",
        "Ramboda Water fall – approx. 20 mins",
        "Nuwara eliya city tour – 45 mins"
      ],
      dress_code: "Peradeniya  – Summer wear (weather average – 28 – 31 °C)(Shorts, sundresses, and tank tops are suggested) Ramboda & Nuwara eliya – Warm Clothes (weather average – 16 – 26 °C)"
    }
  },
  {
    day: 5,
    title: "NUWARA ELIYA / ELLA / YALA",
    plan: [
      "After breakfast check-out and transfer to Yala.",
      "En-route visit Ravana Waterfall",
      "Upon arrival to Yala enjoy afternoon jeep safari at Yala National Park",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Yala / Tissamaharama / Kataragama",
    main_sight_description: {
      title: "ELLA & YALA NATIONAL PARK",
      text: "ELLA\n127 miles from Colombo and 8 miles from Bandarawela, on the leeward side of the central mountains. The view from Ella Gap is one of the most spectacular scenic sights in Sri Lanka – the landscape falls away in a dizzy drop of 3000ft to the eastern plains. The Ella rock is famous for the cave of Ravana a legendary king of Sri Lanka ruled during the pre-historic times. The 1080-foot high waterfall few miles from the Ella Rest House is one of the most beautiful falls in the country.\n\nYALA NATIONAL PARK\n(Safari time 15.00 hrs to 18.00 hrs – 3 hrs)\nThe Yala National Park covers 126,786 hectares including the Strict Natural Reserve (Block II). The most familiar is Block I (14,101 hectares) and these blocks were established in 1938. Yala is famous for its big herds and large number of Elephants, Leopards, Spotted Deer, Sambhur, Crocodiles, Mongoose, Wild Boar, Wild Buffalo, and many other animals. More than 130 bird species are recorded which includes the resident and winter visitors."
    },
    details: {
      driving_times: [
        "Nuwara eliya to Ella – approx. 2 hrs (59.4 km)",
        "Ella to Yala – approx. 2 hrs (83.8 km)"
      ],
      excursion_durations: [
        "Ravana Water fall – approx. 20 mins",
        "Yala Jeep ride – 3 hrs (15.00 hrs to 18.00 hrs)"
      ],
      dress_code: "Ravana fall & Yala  – Summer wear (weather average – 28 – 31 °C) – (Shorts and tank tops are suggested)"
    }
  },
  {
    day: 6,
    title: "YALA / GALLE CITY TOUR / BEACH STAY",
    plan: [
      "After breakfast check-out and transfer to Galle and proceed on a walking tour in Galle Dutch Fort",
      "On completion transfer to the selected beach hotel in down south or east coast."
    ],
    accommodation: "On completion transfer to the selected beach hotel in down south or east coast.",
    main_sight_description: {
      title: "GALLE",
      text: "Galle is considered to be one of Sri Lanka’s most historically interesting towns.  Built on a premonitory rock in the south of the Island. It was a major port until about 100 years, but today still handles shipping and sailing boats in the natural harbor.\nStroll around the Lighthouse and harbor or visit the old town where you can see the traditional lace makers and wood carvers. An Opportunity to purchase some the finest shell-craft souvenirs in the world."
    },
    details: {
      driving_times: [
        "Yala to Galle – approx. 4 hrs (173 km)"
      ],
      excursion_durations: [
        "Galle fort tour – approx. 40 mins"
      ],
      dress_code: "Ravana fall & Yala  – Summer wear (weather average – 28 – 31 °C) – (Shorts and tank tops are suggested)"
    }
  }
],

inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Other services that are not mentioned in the program.",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
]
  },

// --------------------------------------------------------------------------------
// 6th PACKAGE: "Wellness & Ayurveda Tours"
// --------------------------------------------------------------------------------

  {
    title: "Majestic Sri Lanka",
    duration: "7 DAYS 6 NIGHTS",
    price: "Negotiable",
    description: "This is the ultimate Sri Lankan saga, an epic journey from the cradle of its civilization to its sun-drenched shores. Your adventure begins in the island's ancient heart, exploring the sacred, sprawling cities of Anuradhapura and Polonnaruwa. From there, you'll conquer the legendary Sigiriya Lion Rock, discover the hidden art of the Dambulla caves, and awaken your senses in the fragrant spice gardens of Matale. Next, immerse yourself in Kandy's cultural heartbeat and the lush Peradeniya gardens, before ascending into the cool, misty, tea-covered highlands. Marvel at the cascading Ramboda falls, relax in the colonial charm of Nuwara Eliya, and soak in the breathtaking vistas from Ella. Your adventure then shifts to the wild, with a thrilling leopard safari in Yala, before you walk the historic, ocean-lapped ramparts of Galle. Finally, after this grand immersion in culture, nature, and heritage, your well-deserved beach stay awaits for pure rejuvenation and unforgettable memories..",
    image: "/images/Sri-lanka.jpg",
    category: "Grand Round Tours",
    highlights: [
  "Colombo City Tour",
  "Ancient City of Anuradhapura",
  "Sigiriya Rock Fortress",
  "Lunch at Farmers House",
  "Ancient City of Polonnaruwa",
  "Dambulla Cave Temple",
  "Gem Museum",
  "Batik Factory",
  "Temple of Tooth Relic",
  "Royal Botanical Garden",
  "Ramboda Falls",
  "Tea Factory Visit",
  "Nuwara Eliya City Tour",
  "Ravana Falls",
  "Yala National Park Safari",
  "Galle Fort Visit"
],
itinerary: [
  {
    day: 1,
    title: "AIRPORT / COLOMBO",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome and traditional greeting in the airport lobby with the company representative and the Language speaking chauffeur guide.",
      "Transfer to Colombo and check-in at hotel (check-in time 02.00 pm)",
      "Afternoon proceed on a city tour in Colombo including shopping",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Colombo",
    main_sight_description: {
      title: "COLOMBO",
      text: "Colombo like many capital cities in developing countries Colombo is fast changing its face. almost overnight, skyscrapers arise from where old buildings once stood, yet in some parts, the old world charm is retained. A 100-year-old clock tower and several British built, colonial buildings are still to be seen in the city.  The Pettah bazaar – where one can shop for bargains, a Hindu and a Buddhist temple, residential areas where you find the stately homes of the affluent, the Colombo museum, the Bandaranaike memorial international conference hall – an outright gift to Sri Lanka from the people’s republic of china, the new parliament in Sri Jayewardenepura and the folk art center are some of the places of interest that one can visit to."
    },
    details: {
      driving_times: [
        "Airport to Colombo – approx. 40 minutes (35 km)"
      ],
      excursion_durations: [
        "Colombo city tour & shopping – approx. 3 hrs"
      ],
      dress_code: "Colombo – Summer wear (tops, shorts, trousers suggested) Colombo Temples – Long wear (long trousers and sleeve tops) (weather average – 30 – 34 °C)"
    }
  },
  {
    day: 2,
    title: "COLOMBO / ANURADHAPURA / SIGIRIYA",
    plan: [
      "After breakfast check-out and transfer to Anuradhapura",
      "Upon arrival proceed on a sightseeing tour in Anuradhapura ancient city",
      "Thereafter proceed to Sigiriya and check-in at hotel"
    ],
    accommodation: "Dinner & overnight stay in Sigiriya/Habarana/Dambulla",
    main_sight_description: {
      title: "ANURADHAPURA",
      text: "Anuradhapura is Sri Lanka’s first capital, a potent symbol of Sinhalese power, and the most extensive and important of island’s ancient cities. It became a capital in 380 BC and for over 1000 years Sinhalese kings ruled from this great city. The Sacred Bo-Tree(Sri Maha Bodi) is the city’s holiest site, and was grown from the tree under which Buddha achieved enlightenment. The Thuparama Dagaba, the oldest of the many temples in Anuradhapura, is believed to contain the right collar-bone of Buddha."
    },
    details: {
      driving_times: [
        "Colombo to Anuradhapura – approx. 4 hrs 30 min (200 km)",
        "Anuradhapura to Sigiriya – approx. 1 hr 30 mins (73.9 km)"
      ],
      excursion_durations: [
        "Polonnaruwa – approx. 1 hr 30 mins"
      ],
      dress_code: "Anuradhapura –Long wear (long trousers and sleeve tops)(weather average in Anuradhapura – 32 – 34 °C)"
    }
  },
  {
    day: 3,
    title: "SIGIRIYA / POLONNARUWA / SIGIRIYA",
    plan: [
      "After breakfast visit the Sigiriya Rock Fortress",
      "On completion transfer to Polonnaruwa en-route Traditional Lunch at famers house (Priyamali Gedara) and proceed on sightseeing tour in Polonnaruwa ancient city",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Sigiriya/Habarana/Dambulla",
    main_sight_description: {
      title: "SIGIRIYA & POLONNARUWA",
      text: "SIGIRIYA\nIn the evening climb to the rock of Sigiriya (5th century AD). Fortress in Heaven. “The painted mountain, also known as the” Lion’s Rock “, is one of the main sights of the country. On high about 200 m, King Kassapa built a palace in the 5th century, the entrance to which was guarded by a huge stone lion. From ancient descriptions, the front of the palace, built of marble and surrounded by gardens and ponds, was paved with precious stones. The giant royal throne is well preserved. From the ancient descriptions are also mentioned a gallery with frescoes and a “mirror wall”, polished with the help of a mineral. Frescos depicting “heavenly maidens” retain their bright colors. Unfortunately, only 18 of the frescoes survived. The monument is under the protection of UNESCO.\n\nPOLONNARUWA\nPolonnaruwa was the second capital city of Sri Lanka built in the 11th and 12th Centuries AD, and which is a world heritage site. Here you can see the Ruins of the Royal palace, the Gal viharaya where 4 splendid statues of the Buddha in “Upright”, “Secondary” and “Recumbent” postures carved out of rock could be seen, the Audience hall, the Lotus bath, the statue of king Parakramabahu and the Parakrama Samudraya – a lake built by king Parakramabahu the great. There are also monuments of famous places of worship such as the Shiva Temple, The Lankathilake, The Watadage, The Galpotha, The Kiri vehera and the remains of former Temple of the Tooth Relic."
    },
    details: {
      driving_times: [
        "Sigiriya to Sigiriya rock – approx. 20 minutes (13.3 km)",
        "Habarana to Sigiriya rock – approx. 20 minutes (12.1km)",
        "Dambulla to Sigiriya rock – approx. 30 mins (16.3 km)",
        "Sigiriya Rock to Polonnaruwa – approx. 1 hr 30 min (58.2 km)"
      ],
      excursion_durations: [
        "Sigiriya Rock – approx. 2 hrs (ascending & descending)",
        "Polonnaruwa – approx. 1 hr 30 mins"
      ],
      dress_code: "Sigiriya – Summer wear(Shorts, sundresses, and tank tops are suggested) Polonnaruwa –Long wear (long trousers and sleeve tops) (weather average in Sigiriya & Polonnaruwa – 32 – 34 °C)"
    }
  },
  {
    day: 4,
    title: "SIGIRIYA / DAMBULLA / MATALE / KANDY",
    plan: [
      "After breakfast check-out and transfer to Kandy.",
      "En-route visit the ancient Cave Temple in Dambulla.",
      "There after visit the Matale Ayurvedic Spice Garden, Batik Factory and gem Museum.",
      "In the evening visit to the Temple of the Tooth.",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "DAMBULLA, SPICE GARDEN, KANDY & TOOTH RELIC TEMPLE",
      text: "DAMBULLA\nDambulla Rock Temple was built by King Walagamba in the 1st Century BC and it is a world Heritage site. It is the most impressive of Sri Lanka’s cave Temples. The complex of five caves with over 2000 sq metres of painted walls and ceilings is the largest area of paintings found in the world. It contains over 150 images of the Buddha of which the largest is the Colossal figure of the Buddha carved out of Rock and spanning 14 meters\n\nSPICE GARDEN\nVisit the Spice Garden in Matala, where you can see the different types of spices growing in Sri Lanka. Here you can observe the growth of spices and learn a lot of interesting information about the process of processing and further manufacture of Ayurveda products.\n\nKANDY\nKandy is the last capital of the Lankan Kings and is also a UNESCO World Heritage Site located in a mountain range at an altitude of 488 m above sea level, the city is very picturesque. The name “Kandy” is a splendor and splendor. A lot of legends, traditions and folklore are still carefully preserved by the inhabitants of the city. Kandy and to this day is the cultural capital of the country. In the center of the city, near the lake, is the temple of Dalada Maligawa, where the main relic of the country – the Holy Tooth of the Buddha. Once a year, during the colorful festival of Esala Perahera, which takes place in late July – early August, the shrine resting on the back of the main elephant of the temple is displayed for public viewing. In the procession, passing through the streets of the city, dozens of elephants, covered with bright cloths with bells and illuminations, hundreds of dancers, acrobats participate. Visiting the Temple of the Tooth of the Buddha.\n\nTOOTH RELIC TEMPLE\nThe hill capital is another “World Heritage Site”. It was the last stronghold of the Sinhalese Kings during the Portuguese, Dutch and British rule and finally ceded to the British in 1815 after an agreement. To the Buddhists of Sri Lanka and the World, Kandy is one of the most sacred sites as it is the home of the “Dalada Maligawa” – Temple of the Sacred Tooth Relic of Lord Buddha. Close by are the remains of the Royal Palace (“Maha Wasala”), “Palle Wasala”- where the Queens stayed-now used for the National Museum, “Meda Wasala” where other close relatives lived, Audience Hall, Natha Devala and Vishnu Devala are situated close by. The Bathing Pavilion (“Ulpenge”) is by the Lake and in the Center of the lake is the Island called “Kiri samudraya” (Milk white ocean) used by the kings as the summerhouse. Today it is the center of Buddhism, Arts, Crafts, Dancing, Music and Culture. Visitors can see these Dance & Music at the daily Cultural Performances held at several places in the city."
    },
    details: {
      driving_times: [
        "Sigiriya to Dambulla Cave – approx. 30 minutes (19.4 km)",
        "Habarana to Dambulla Cave – approx. 40 minutes (24.1km)",
        "Dambulla to Dambulla Cave – approx. 10 mins (2.7 km)",
        "Dambulla Cave Temple to Matale – approx. 1hr 15 min (46 km)",
        "Matale to Kandy – approx. 1 hr (25 km)"
      ],
      excursion_durations: [
        "Dambulla Cave Temple – approx. 40 minutes",
        "Matale Spice Garden – approx. 40 minutes",
        "Gem Museum – approx. 30 minutes",
        "Batik Factory – approx. 30 minutes",
        "Tooth Temple – approx. 40 minutes"
      ]
    }
  },
  {
    day: 5,
    title: "KANDY / PERADENIYA / RAMBODA / NUWARA ELIYA",
    plan: [
      "After breakfast check-out and visit the Royal Botanical Garden in Peradeniya",
      "There after transfer to Nuwara Eliya. En-route visit a Ramboda waterfall and a tea factory",
      "Arrive in Nuwara eliya and proceed on a sightseeing tour in the city",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Nuwara Eliya",
    main_sight_description: {
      title: "ROYAL BOTANICAL GARDENS, RAMBODA, TEA & NUWARA ELIYA",
      text: "ROYAL BOTANICAL GARDENS\n147 acres in extent; Started in 1374 as a pleasure garden of the Kings of Gampola and Kandy.  There are more than 4,000 species of trees, plants and creepers. Some rare and endemic as well as flora from the tropical world are found in the gardens.  Spice Garden and Orchid House are popular with tourists. There are 5 Palm Avenues beautifying the gardens, the earliest and tallest Palm Avenue (Royal Palm Avenue) was planted in 1905 and the Double Coconuts from the Seashells Island, with the largest seed of all plants in the world is one such avenue.\n\nRAMBODA WATERFALL\nThe 11th highest waterfall in Sri Lanka, like every other waterfall it is located in the hill country. It is ideal for a family vacation, surrounding it are a lot of holiday resorts that cater to your every need. It is located in Pussellawa. This waterfall is about 109m high and the waterfall has two main drops which tend to confuse people when they see it and most of the time the upper waterfall is not visited because most of the people are not aware of the fact that there are two drops in the fall.\n\nTEA PRODUCTION IN SRI LANKA\nFormerly Ceylon, is of high importance to the Sri Lankan economy and the world market. The country is the world’s fourth largest producer of tea and the industry is one of the country’s main sources of foreign exchange and a significant source of income for laborers, with tea accounting for 15% of the GDP, generating roughly $700 million annually. In 1995, Sri Lanka was the world’s leading exporter of tea, (rather than producer) with 23% of the total world export, but it has since been surpassed by Kenya. The tea sector employs, directly or indirectly over 1 million people in Sri Lanka and in 1KA\nFormerly Ceylon, is of high importance to the Sri Lankan economy and the world market. The country is the world’s fourth largest producer of tea and the industry is one of the country’s main sources of foreign exchange and a significant source of income for laborers, with tea accounting for 15% of the GDP, generating roughly $700 million annually. In 1995, Sri Lanka was the world’s leading exporter of tea, (rather than producer) with 23% of the total world export, but it has since been surpassed by Kenya. The tea sector employs, directly or indirectly over 1 million people in Sri Lanka and in 1995 directly employed 215,338 on tea plantations and estates. The humidity, cool temperatures, and rainfall in the country’s central highlands provide a climate that favors the production of high quality tea. The industry was introduced to the country in 1867 by James Taylor, the British planter who arrived in 1852.\n\nNUWARA ELIYA\nThe hill-resort of Nuwara Eliya , 1890 meters above sea level, is scenically set among high mountain ranges and prime tea plantations. Queen Anne and Georgian architecture, pretty flower-gardens and an 18-hole golf course are reminders of its British colonial-period roots. The Hakgala Botanic Gardens specialize in fine collections of sub-tropical flora. At Nuwara Eliya, visitors can enjoy garden-fresh strawberries and asparagus and warm themselves at a log-fire – in the heart of a tropical island!"
    },
    details: {
      driving_times: [
        "Kandy to Peradeniya – approx. 20 mins (5.6 km)",
        "Peradeniya to Ramboda – approx. 2 hrs (53 km)",
        "Ramboda to Nuwara eliya city – approx. 1 hr (27.1 km)"
      ],
      excursion_durations: [
        "Peradeniya Garden – approx. 1 hr",
        "Ramboda Water fall – approx. 20 mins",
        "Nuwara eliya city tour – 45 mins"
      ],
      dress_code: "Peradeniya  – Summer wear (weather average – 28 – 31 °C)(Shorts, sundresses, and tank tops are suggested) Ramboda & Nuwara eliya – Warm Clothes (weather average – 16 – 26 °C)"
    }
  },
  {
    day: 6,
    title: "NUWARA ELIYA / ELLA / YALA",
    plan: [
      "After breakfast check-out and transfer to Yala.",
      "En-route visit Ravana Waterfall",
      "Upon arrival to Yala enjoy afternoon jeep safari at Yala National Park",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Yala / Tissamaharama / Kataragama",
    main_sight_description: {
      title: "ELLA & YALA NATIONAL PARK",
      text: "ELLA\n127 miles from Colombo and 8 miles from Bandarawela, on the leeward side of the central mountains. The view from Ella Gap is one of the most spectacular scenic sights in Sri Lanka – the landscape falls away in a dizzy drop of 3000ft to the eastern plains. The Ella rock is famous for the cave of Ravana a legendary king of Sri Lanka ruled during the pre-historic times. The 1080-foot high waterfall few miles from the Ella Rest House is one of the most beautiful falls in the country.\n\nYALA NATIONAL PARK\n(Safari time 15.00 hrs to 18.00 hrs – 3 hrs)\nThe Yala National Park covers 126,786 hectares including the Strict Natural Reserve (Block II). The most familiar is Block I (14,101 hectares) and these blocks were established in 1938. Yala is famous for its big herds and large number of Elephants, Leopards, Spotted Deer, Sambhur, Crocodiles, Mongoose, Wild Boar, Wild Buffalo, and many other animals. More than 130 bird species are recorded which includes the resident and winter visitors."
    },
    details: {
      driving_times: [
        "Nuwara eliya to Ella – approx. 2 hrs (59.4 km)",
        "Ella to Yala – approx. 2 hrs (83.8 km)"
      ],
      excursion_durations: [
        "Ravana Water fall – approx. 20 mins",
        "Yala Jeep ride – 3 hrs (15.00 hrs to 18.00 hrs)"
      ],
      dress_code: "Ravana fall & Yala  – Summer wear (weather average – 28 – 31 °C) – (Shorts and tank tops are suggested)"
    }
  },
  {
    day: 7,
    title: "YALA / GALLE CITY TOUR / BEACH STAY",
    plan: [
      "After breakfast check-out and transfer to Galle and proceed on a walking tour in Galle Dutch Fort",
      "On completion transfer to the selected beach hotel in down south or east coast."
    ],
    accommodation: "On completion transfer to the selected beach hotel in down south or east coast.",
    main_sight_description: {
      title: "GALLE",
      text: "Galle is considered to be one of Sri Lanka’s most historically interesting towns.  Built on a premonitory rock in the south of the Island. It was a major port until about 100 years, but today still handles shipping and sailing boats in the natural harbor.\nStroll around the Lighthouse and harbor or visit the old town where you can see the traditional lace makers and wood carvers. An Opportunity to purchase some the finest shell-craft souvenirs in the world."
    },
    details: {
      driving_times: [
        "Yala to Galle – approx. 4 hrs (173 km)"
      ],
      excursion_durations: [
        "Galle fort tour – approx. 40 mins"
      ],
      dress_code: "Ravana fall & Yala  – Summer wear (weather average – 28 – 31 °C) – (Shorts and tank tops are suggested)"
    }
  }
],
inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Other services that are not mentioned in the program.",
  "Visas",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
]
  },

// --------------------------------------------------------------------------------
// 7th PACKAGE: "Adventure & Wildlife Tours"
// --------------------------------------------------------------------------------
  {
    title: "Lanka Explorer’s Highlights",
    duration: "11 DAYS 10 NIGHTS",
    price: "Negotiable",
    description: "Experience the best of both worlds on this perfect Sri Lankan tour. Your adventure begins in the Cultural Triangle, exploring the sacred Dambulla caves and conquering Sigiriya Rock from your base in Habarana. Journey south through Matale's spice gardens to the cultural heart of Kandy, then ascend into the misty highlands. You'll see the cascading Ramboda falls, relax in the cool colonial charm of Nuwara Eliya, and soak in the iconic views from Ella. Finally, trade the mountains for golden sands with a blissful beach retreat in Bentota before your departure, leaving you completely rejuvenated.",
    image: "\images\\best-tourist-locations-in-sri-lanka.jpg",
    category: "Nature & Wildlife",
    highlights: [
  "Dambulla Cave Temple",
  "Sigiriya Rock Fortress",
  "Ayurveda Herbal Garden",
  "Temple of Tooth Relic",
  "Kandy City Tour",
  "Gem Museum",
  "Cultural Dancing Show",
  "Ramboda Waterfall",
  "Tea plantation/Tea Factory",
  "Train Ride to Ella",
  "Little Adam’s Peak",
  "Lipton Seat",
  "Nine Arch Bridge"
],
    itinerary: [
  {
    day: 1,
    title: "AIRPORT / DAMBULLA",
    plan: [
      "Arrival to Colombo International Airport. Warm welcome and traditional greeting in the airport lobby with the company representative and the Language speaking guide.",
      "Moving to visit Dambulla Cave temple.",
      "There after transfer to Hotel Nice Place"
    ],
    accommodation: "Dinner & overnight stay at Dambulla",
    main_sight_description: {
      title: "DAMBULLA CAVE TEMPLE",
      text: "This is the most famous mountain temple of Sri Lanka. The temple consists of five caves and is known for the largest collection of Buddha statues (some of them are over 2000 years old). The beautiful murals adorn the ceiling and walls of the temple, here are the main moments of the life of the Buddha: his birth, renunciation of the royal life, enlightenment, seven weeks after enlightenment, reading the first sermon, leaving in the bliss of Nirvana."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 2,
    title: "DAMBULLA / SIGIRIYA / DAMBULLA",
    plan: [
      "After breakfast, transfer to Sigiriya and visit the Rock Fortress",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay at Dambulla",
    main_sight_description: {
      title: "SIGIRIYA & MINNERIYA NATIONAL PARK",
      text: "SIGIRIYA\nIn the evening climb to the rock of Sigiriya (5th century AD). Fortress in Heaven. “The painted mountain, also known as the” Lion’s Rock “, is one of the main sights of the country. On high about 200 m, King Kassapa built a palace in the 5th century, the entrance to which was guarded by a huge stone lion. From ancient descriptions, the front of the palace, built of marble and surrounded by gardens and ponds, was paved with precious stones. The giant royal throne is well preserved. From the ancient descriptions are also mentioned a gallery with frescoes and a “mirror wall”, polished with the help of a mineral. Frescos depicting “heavenly maidens” retain their bright colors. Unfortunately, only 18 of the frescoes survived. The monument is under the protection of UNESCO.\n\nMINNERIYA NATIONAL PARK\n(Safari time 15.00 hrs to 17.30 hrs – 2½ hrs)\nMinneriya Gritale Nature reserve extends in to Polonnaruwa and Matale Districts falling within North Central and Central Province Low Country Dry, Zone of Sri Lanka. This reserve extends to the Sigiriya and Gritale it is largest Nature reserve of Sri Lanka. This reserve was first declared a sanctuary under the Flora and Fauna protection ordinance in 1938. Minneriya Gritale Nature Reserve is important habitat for the wild elephant’s population in Sri Lanka Elephants Migrate from Habarana, Sigiriya Elephant population in between 150-200 in the area. At Minneriya, the newest park, herds of over 200 animals can be seen at a time by the large man-made irrigation tank."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 3,
    title: "DAMBULLA / HABARANA / MATALE / KANDY",
    plan: [
      "There after transfer to Habarana and proceed on a Bullock cart tour in a traditional village including Local traditional Lunch",
      "On completion transfer to Matale and visit an Ayurvedic Herbal garden to see the demonstration of different spices in Sri Lanka",
      "On completion transfer to Kandy and visit a Gem Museum, Batik factory & Evening witness of the Cultural Dance Show",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "VILLAGE SAFARI & MATALE",
      text: "VILLAGE SAFARI\nThe trek through the archetypal Sri Lankan Typical village. The trek begins with an awesome walk along a bund of a Wewa or manmade reservoir. The reservoir itself, the surrounding scrub jungle, marshland and village are a hive of early morning or an evening activity. The amazing birdlife, butterflies and possible sightings of crocodile only add to the charm of seeing the villagers as they go about their early morning tasks of fishing, or washing clothes at the periphery of the lake.\n\nBULLOCK CART RIDE\nBullock Cart (Double Ox Cart) which will transport through the next phase of the adventure. The journey continues through dense shrub forests, Paddy lands and other home to many forest birds and other wildlife including monkeys, bear, wild hares, python, Mongose, and even elephants. Sightseeing of the rural village life is possible while on the cart ride. Lie back and enjoy the flashes of blue sky through the cover of the trees as the carter expertly guides his animals.\n\nMATALE\nAn agricultural zone in the Central Province, Matale seldom drops off the maps due to its remarkable contribution through flagship crops of the island extending from tea, rubber & vegetables to spices. Spearheading the Rebellion back in 1848, Matale today takes immense pride in its story woven around spices. Stop by the side of a spice garden – into which you will be most welcome – and observe the therapeutic values of spices & processes over a refreshing cup of herbal tea! Or spend some time idling on the hardened streets if you mean a real town adventure filled with voices and colors."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 4,
    title: "KANDY",
    plan: [
      "After breakfast proceed on a city tour in Kandy including Temple of the Tooth",
      "There after visit the Royal Botanical Garden in Peradeniya",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Kandy",
    main_sight_description: {
      title: "KANDY & ROYAL BOTANICAL GARDENS",
      text: "KANDY\nKandy is the last capital of the Lankan Kings and is also a UNESCO World Heritage Site located in a mountain range at an altitude of 488 m above sea level, the city is very picturesque. The name “Kandy” is a splendor and splendor. A lot of legends, traditions and folklore are still carefully preserved by the inhabitants of the city. Kandy and to this day is the cultural capital of the country. In the center of the city, near the lake, is the temple of Dalada Maligawa, where the main relic of the country – the Holy Tooth of the Buddha. Once a year, during the colorful festival of Esala Perahera, which takes place in late July – early August, the shrine resting on the back of the main elephant of the temple is displayed for public viewing. In the procession, passing through the streets of the city, dozens of elephants, covered with bright cloths with bells and illuminations, hundreds of dancers, acrobats participate. Visiting the Temple of the Tooth of the Buddha.\n\nROYAL BOTANICAL GARDENS\n147 acres in extent; Started in 1374 as a pleasure garden of the Kings of Gampola and Kandy.  There are more than 4,000 species of trees, plants and creepers. Some rare and endemic as well as flora from the tropical world are found in the gardens.  Spice Garden and Orchid House are popular with tourists. There are 5 Palm Avenues beautifying the gardens, the earliest and tallest Palm Avenue (Royal Palm Avenue) was planted in 1905 and the Double Coconuts from the Seashells Island, with the largest seed of all plants in the world is one such avenue."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 5,
    title: "KANDY / RAMBODA / NUWARA ELIYA",
    plan: [
      "After breakfast check-out and transfer to Nuwara Eliya. En-route visit a tea factory",
      "Arrive in Nuwara Eliya and proceed on a sightseeing tour in the city",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Nuwara Eliya",
    main_sight_description: {
      title: "TEA PRODUCTION & NUWARA ELIYA",
      text: "TEA PRODUCTION IN SRI LANKA\nFormerly Ceylon, is of high importance to the Sri Lankan economy and the world market. The country is the world’s fourth largest producer of tea and the industry is one of the country’s main sources of foreign exchange and a significant source of income for laborers, with tea accounting for 15% of the GDP, generating roughly $700 million annually. In 1995, Sri Lanka was the world’s leading exporter of tea, (rather than producer) with 23% of the total world export, but it has since been surpassed by Kenya. The tea sector employs, directly or indirectly over 1 million people in Sri Lanka and in 1995 directly employed 215,338 on tea plantations and estates. The humidity, cool temperatures, and rainfall in the country’s central highlands provide a climate that favors the production of high quality tea. The industry was introduced to the country in 1867 by James Taylor, the British planter who arrived in 1852.\n\nNUWARA ELIYA\nThe hill-resort of Nuwara Eliya , 1890 meters above sea level, is scenically set among high mountain ranges and prime tea plantations. Queen Anne and Georgian architecture, pretty flower-gardens and an 18-hole golf course are reminders of its British colonial-period roots. The Hakgala Botanic Gardens specialize in fine collections of sub-tropical flora. At Nuwara Eliya, visitors can enjoy garden-fresh strawberries and asparagus and warm themselves at a log-fire – in the heart of a tropical island!"
    },
    details: {
      driving_times: [],
      excursion_durations: [
        "Tea Factory – approx. 20 mins",
        "Nuwara Eliya city tour – approx. 45 mins"
      ],
      dress_code: ""
    }
  },
  {
    day: 6,
    title: "NUWARA ELIYA / ELLA",
    plan: [
      "After breakfast check-out and transfer to Nanu-oya and take the train to Ella (Train dep time 09.15 pm)",
      "Arrive in Ella and check-in at hotel"
    ],
    accommodation: "Dinner & overnight stay in Ella",
    main_sight_description: {
      title: "TRAIN RIDE TO ELLA",
      text: "Poceed to Nanuoya to board the the Badulla-bound train. The train travels via hill country covered with tea estates and gives a pleasant view of the green hill country. Arrive at Ella railway station. In the 19th Century, during the British occupation of Sri Lanka, British constructed the railway lines in Sri Lanka and started the Railway service in Sri Lanka to transport Tea from the Hill country estates to Colombo Port and imported goods to the interior of the Island. So Sri Lanka’s hill country Railway line goes through Tea Estates, thus making the train journey a scenic ride. Travelling past the scenic Rocky Mountains, the breathtaking, picturesque greenery and through the startling dark tunnels, the passengers are enveloped in the cool and cozy atmosphere during the 150-minute journey which is spiced with the warmth of the courteous in-house service including on-board meals and entertainment."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 7,
    title: "ELLA",
    plan: [
      "After breakfast visit Little Adams peak",
      "There after visit Lipton seat",
      "On completion visit 09 Arch Bridge",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay in Ella",
    main_sight_description: {
      title: "ELLA SIGHTSEEING",
      text: "Little Adams Speak.\nLittle Adams Peak whether considering the word ‘Little’,it is named after the sacred Adams Peak (Sri Pada –where the foot print of Lord Buddha is preserved) regarding the similarity between the two mountains. Therefore the mountain was called as Little Adams Peak. Punchi Sri Pada” is another name for this peak. It is 1141 m in height. Little Adam’s Peak attracts many travelers who come to Sri Lanka. Gradually with an easy hike up to the mountain of Little Adams Peak you can consummation a worth panoramic view. You have to walk through lush green tea plantations, waterfalls and paddy fields while enjoying the sceneries\n\nLipton Seat\nThe point of Lipton’s Seat is reached by climbing for around 7km surrounded by peaceful green tea plantations and an occasional colorful tea plucker. There are two routes available; one from the Nayabedda estate in Bandarawela, and the second through the Dambatenna estate in Haputale. Both routes have entrances marked with sign boards and narrow paved roads. Some parts of the road even have some of the original stone constructions from the British era of Ceylon, and hence are worth seeing from a historical point of view. The climb takes about two and a half hours on average, after a visitor reaches the hill top.\n\nNINE ARCH BRIDGE\nIf the time permits you can do a nature walk to Nine arche bridge which is one of the iconic bridge buid between Ella and Demodara Railway stations. This massive bridge has been built entirely of solid rocks, bricks, and cement without using a single piece of steel. When one stands underneath it and looks up there is a beautiful sight of ‘nine skies’ through the nine arches, hence it’s called as Nine Skies Bridge. It also called ‘The Bridge in the sky’ due to the height."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 8,
    title: "ELLA / BENTOTA",
    plan: [
      "After breakfast check-out and transfer to Sothern coast (drive time approx. 5 hrs)",
      "Check-in at hotel and relax by the beach"
    ],
    accommodation: "Full Day Relax at Beach Hotel",
    main_sight_description: {
      title: "RELAX AT BEACH HOTEL",
      text: "Indulge in a day of pure relaxation and tranquility at our exquisite beach hotel. From the moment you arrive, you will be embraced by the soothing sound of crashing waves, warm tropical breezes, and breathtaking views of the sparkling ocean. Start your day with a sumptuous breakfast at our beachfront restaurant... (etc)"
    },
    details: {
      driving_times: ["Ella to Southern coast - approx. 5 hrs"],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 9,
    title: "BENTOTA",
    plan: [
      "Full Day Relax at Beach Hotel"
    ],
    accommodation: "Full Day Relax at Beach Hotel",
    main_sight_description: {
      title: "RELAX AT BEACH HOTEL",
      text: "Indulge in a day of pure relaxation and tranquility at our exquisite beach hotel... (etc)"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 10,
    title: "BENTOTA",
    plan: [
      "Full Day Relax at Beach Hotel"
    ],
    accommodation: "Full Day Relax at Beach Hotel",
    main_sight_description: {
      title: "RELAX AT BEACH HOTEL",
      text: "Indulge in a day of pure relaxation and tranquility at our exquisite beach hotel... (etc)"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 11,
    title: "BENTOTA / AIRPORT / DEPARTURE",
    plan: [
      "After breakfast check-out and transfer to the Airport for departure transfer.",
      "Have a safe flight!!!"
    ],
    accommodation: "………. END OF THE TOUR ……….",
    main_sight_description: {
      title: "DEPARTURE",
      text: "Transfer to the Airport for departure. (Drive time approx. 2 hrs)"
    },
    details: {
      driving_times: ["Bentota to Airport - approx. 2 hrs"],
      excursion_durations: [],
      dress_code: ""
    }
  }
],
inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Other services that are not mentioned in the program.",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
],
  },
  
  // -- -------------------------------------------------------------------------------
  // 8th PACKAGE: "Discover Northern Sri Lanka"
  // --------------------------------------------------------------------------------
  {
    title: "Discover Northern Sri Lanka",
    duration: "14 DAYS 13 NIGHTS",
    price: "Negotiable",
    description: "Embark on a unique Sri Lankan journey, blending ancient culture with pristine northern and eastern beaches. From Negombo, you'll climb Pidurangala and explore the sacred city of Anuradhapura from your Habarana base. Venture north through Iranamadu and Kilinochchi to discover the vibrant culture of Jaffna and the remote Delft Island. Your adventure culminates on the east coast in Trincomalee, where you'll visit the Girihandu Seya temple, snorkel at Pigeon Island, and end with a blissful beach relaxation, leaving you completely rejuvenated.",
    image: "\\images\\trincomlee.jpg",
    category: "Grand Round Tours", 
   highlights: [
  "Pidurangala",
  "Anuradhapura Ancient City",
  "Safari at Wilpattu National Park",
  "Murikandy Pillayar Shrine",
  "Hasalaka Gamini War Hero Monument",
  "Naga Vihara Temple",
  "Delft Islands",
  "Jaffna City Tour",
  "Nallur Kandaswamy Kovil",
  "Point Pedro",
  "Light House",
  "Bottomless well",
  "Naguleswaram Kovil",
  "Keerimalai Sacred Water Spring",
  "Dambakola Patuna – Sri Sangamitta Viharaya",
  "Casurina Beach",
  "Jaffna Fort",
  "Nagadeepa Island – Nagadeepa Viharaya",
  "Nagapooshani Amman Kovil",
  "Koneswaram Temple",
  "Girihanduseya (The first Stupa in Sri lanka)",
  "Pigeon Island"
    ],

    itinerary: [
  {
    day: 1,
    title: "Airport / Negombo",
    plan: [
      "Our representative will pick you from Colombo International Airport and you will be transferred to Negombo",
      "Check-in at hotel and relax (Check-in at 02.00 pm. Early check-in can confirm on availability. If not client have to pay for the early check-in)"
    ],
    accommodation: "Dinner & overnight stay at Negombo",
    main_sight_description: {
      title: "ARRIVAL IN NEGOMBO",
      text: "Transfer to your hotel in Negombo and relax after your flight."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 2,
    title: "NEGOMBO / PIDURANGALA / HABARANA",
    plan: [
      "After breakfast check-out and transfer to Sigiriya (Drive time approx. 4 hrs)",
      "Upon arrival visit Pidurangala Rock",
      "There after transfer to Habarana and check-in at hotel"
    ],
    accommodation: "Dinner & overnight stay at Dambulla",
    main_sight_description: {
      title: "PIDURANGALA",
      text: "Pidurangala is an enormous rock located a few kilometres north of Sigiriya. The two rocks have an interlinked history: whilst King Kasyapa was building Sigiriya Rock Fortress in the 5th century, he moved monks living around Sigiriya to a new monastery on Pidurangala Rock. An ancient cave temple still houses objects from various vintages that reflect Buddhist, Hindu and western beliefs, and the stupa to the left of the temple entrance is believed to mark the spot where King Kasyapa was cremated. Pidurangala is a more challenging climb than Sigiriya, so should not be attempted by those with poor physical fitness. There is no clear path to the top: steep, uneven steps give way to an expanse of boulders and crevices that climbers must navigate in order to reach the summit. From the top, there are glorious vistas of the surrounding landscape and an incredible view of the majestic Sigiriya Rock."
    },
    details: {
      driving_times: [
        "Negombo to Sigiriya – approx. 4 hrs"
      ],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 3,
    title: "HABARANA / ANURADHAPURA",
    plan: [
      "After breakfast check-out and transfer to Anuradhapura (Drive time approx. 2 hrs)",
      "Upon arrival proceed on a sightseeing tour in Anuradhapura Ancient city",
      "Check-in at hotel in Anuradhapura and relax"
    ],
    accommodation: "Dinner & overnight stay at Anuradhapura",
    main_sight_description: {
      title: "ANURADHAPURA & WILPATTU NATIONAL PARK",
      text: "ANURADHAPURA is Sri Lanka’s first capital, a potent symbol of Sinhalese power, and the most extensive and important of island’s ancient cities. It became a capital in 380 BC and for over 1000 years Sinhalese kings ruled from this great city. The Sacred Bo-Tree(Sri Maha Bodi) is the city’s holiest site, and was grown from the tree under which Buddha achieved enlightenment. The Thuparama Dagaba, the oldest of the many temples in Anuradhapura, is believed to contain the right collar-bone of Buddha.\n\nWILPATTU NATIONAL PARK\n(Safari time 14.30 hrs to 17.30 hrs – 3 hrs)\nSituated 176 km. north of Colombo, Willpattu is approximately 1,908 sq.km. in extent. It has a dense jungle cover which makes it a more exciting park where animals have to be tracked. There are numerous delightful little lakes – known as villus – and the leopard and sloth bear are the specialty rather than elephants."
    },
    details: {
      driving_times: [
        "Habarana to Anuradhapura – approx. 2 hrs"
      ],
      excursion_durations: [
        "Wilpattu Safari – 3 hrs (14.30 hrs to 17.30 hrs)"
      ],
      dress_code: ""
    }
  },
  {
    day: 4,
    title: "ANURADHAPURA / IRANAMADU / KILINOCHCHI / JAFFNA",
    plan: [
      "After breakfast check-out and transfer to Iranamadu (Drive time approx. 2 hrs 30 mins)",
      "Upon arrival visit Murikandy Pillayar Shrine",
      "On completion transfer to Kilinochchi and visit the War Memorial Monument (Drive time approx. 20 mins)",
      "Transfer to Elephant Pass and visit Hasalaka Gamini War Hero Monument (Drive time approx. 30 mins)",
      "There after transfer to Jaffna and visit Naga Vihara Temple (Drive time approx. 1 hr 30 mins)",
      "Check-in at hotel (Drive time approx. 5 mins – 700m)"
    ],
    accommodation: "Dinner & overnight stay at Jaffna",
    main_sight_description: {
      title: "MURIKANDY, KILINOCHCHI, ELEPHANT PASS & NAGA VIHARA",
      text: "Murikandy Pillayar Shrine is a Hindu temple which is situated in Murikandy village in the Jaffna peninsula. The temple is dedicated to Lord Ganesh and is a frequently visited temple by people who travel along the Kandy – Jaffna Highway. It is believed that a visit to this temple would remove all obstacles during travel. The temple is visited by both Hindus and Buddhists whilst being a symbol of harmony between both religions.\n\nKilinochchi War Memorial is located in Kilinochchi. To visit Kilinochchi War Memorial on your holiday in Kilinochchi, and find out what else Kilinochchi has to offer, use our Kilinochchi.\n\nA statue of War Hero Corporal Gamini Kularatne of the Sri Lanka Army (also known as ‘Hasalaka Gamini’ or ‘Hero of Hasalaka’) who sacrificed his own life to rescue hundreds of fellow soldiers who were outnumbered in large and were under siege by LTTE fighters at the Elephant Pass Sri Lanka Army garrison in 1991 can be seen at Elephant Pass on the A9 road on the way to Jaffna. The statue has been erected at the place where the War Hero sacrificed his life and the LTTE’s battle tank he blew up in the action also still stands and displayed where it stopped on that day. As one of the most ferocious battles in Sri Lanka’s modern history ended with that action, the Army camp which was under siege for nearly a month was saved in most part by Corporal Kularatne’s bravery and sacrifice.\n\nToday the naga vihara temple in Jaffna, Sri Lanka is a popular rendezvous spot of tourists and devotees. Jaffna is a great destination to enjoy and entertain your holidays. The spot is considered whereas the sapling of Jaya Sri maha Bodhi was arrived to sri lanka by Theri Sangamitta and Thero mahinda. So that King Devanampiya tissa came to the destination and welcomed prestigiously."
    },
    details: {
      driving_times: [
        "Anuradhapura to Iranamadu – approx. 2 hrs 30 mins",
        "Iranamadu to Kilinochchi – approx. 20 mins",
        "Kilinochchi to Elephant Pass – approx. 30 mins",
        "Elephant Pass to Jaffna – approx. 1 hr 30 mins",
        "Naga Vihara to Hotel – approx. 5 mins (700m)"
      ],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 5,
    title: "JAFFNA / DELFT ISLAND",
    plan: [
      "After breakfast visit Delft Islands",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay at Jaffna",
    main_sight_description: {
      title: "DELFT ISLAND",
      text: "Neduntheevu or Neduntivu (also known by its Dutch name Delft) is an island in the Palk Strait, northern Sri Lanka. This island is named as Delft in the Admiralty Chart unlike the other islands, whose names are Tamil. The island’s area is 50 km² and it is roughly oval-shaped. Its length is 8 km and its maximum width about 6 km.\nNeduntivu is a flat island surrounded by shallow waters and beaches of coral chunks and sand. It is home to a small population of Tamil people, mostly living in quiet compounds close to the northern coast. The vegetation is of a semi-arid tropical type, with palmyra palms, dry shrubs and grasses that grow on the pale Grey porous coralline soil. Papayas and bananas grow close to the local people’s homes. In the western coast of the island there are remains of a 1000-year-old temple built by the Chola Dynasty,[as well as the ruins of a Dutch colonial fort. The water is slightly brackish, and it is taken from shallow wells using buckets made from palmyra palm leaves. A naval battle was fought off the coast of the island in 2008 during the Sri-Lankan Civil War. There are feral ponies on the island, descendants of forebears abandoned there in the Dutch period."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 6,
    title: "JAFFNA",
    plan: [
      "After breakfast proceed on a city tour in Jaffna City including Nallur Kandaswamy Kovil",
      "Thereafter Proceed to Point Pedro. En-route visiting the Bottomless well at Nilavarai",
      "In Point Pedro, visit the Light House and its beach including the Northernmost point of Sri Lanka.",
      "Proceed to Keerimalai and visit the Naguleswaram Kovil and the Sacred Water Spring at Keerimalai",
      "On completion proceed to Dambakola Patuna to visit the Sri Sangamitta Viharaya",
      "Thereafter proceed to the Casurina Beach of Karainagar",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay at Jaffna",
    main_sight_description: {
      title: "JAFFNA, POINT PEDRO, KEERIMALAI, DAMBAKOLA PATUNA & CASURINA BEACH",
      text: "JAFFNA is the capital city of the Northern Province of Sri Lanka. It is the administrative headquarters of the Jaffna District located on a peninsula of the same name. With a population of 88,138 in 2012, Jaffna is Sri Lanka’s 12th most populous city...\n\nNilavarai well is a deep underground natural water well thought to be bottomless. It is an archeological monument in Jaffna Peninsula and has many enthralling legends adding to the mysteries that encircle it. Almost all legends are connected with the Ramayan...\n\nPoint Pedro is a town, located in Jaffna District, Sri Lanka, at the northernmost point of the island. Cotton is produced around Point Pedro in the fertile calcic red latosol soils. The eastern coast of Point Pedro forms a 3 mile wide, 20 mile long beach...\n\nKeerimalai is situated about 4 km west of Kankasanthurai and is about 50 feet above the sea level. The Keerimalai natural springs is famous for its water and rituals. The water comes from an underground fresh water spring and Hindus believe that the water here has miraculous powers to cure diseases...\n\nDambakola Patuna (Historically known as ‘Jambukola Patna’) has been an ancient port in the North of Jaffna peninsula which was used during pre-Christian times. After Arahath Mahinda introduced Buddhism to Sri Lanka in 250 B.C, his sister, Sanghamitta Theri arrived in Sri Lanka with a sacred Bo sapling one year later to this port...\n\nThe Casuarina Beach in Karainagar is considered the best beach frontage in the Jaffna Peninsula. The beach lies on the North of Karativu island, one of the largest islands in the peninsula which is connected to the mainland over a causeway. The beach probably has got its name due the Casuarina (Kasa) Trees along this beach..."
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 7,
    title: "JAFFNA / TRINCOMALEE",
    plan: [
      "After breakfast check-out and visit Jaffna Fort (Drive time approx. 10 mins)",
      "Thereafter proceed to Kurikattuwan Jetty to take a ferry to Nagadeepa Island",
      "Upon arrival visit the Nagadeepa Viharaya",
      "Thereafter visit the Nagapooshani Amman Kovil",
      "Return to Jaffna and transfer to Trincomalee (Drive time approx. 4 hrs 30 mins)",
      "Check-in at hotel and relax"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "JAFFNA FORT, NAGADEEPA & NAGAPOOSHANI AMMAN KOVIL",
      text: "Jaffna Fort is situated on the south side of the Jaffna peninsula at the water’s edge of the lagoon, the ancient Jaffna Fort is the second largest existing fort in the Island. Originally built by the Portuguese in 1619 and re-built and expanded by the Dutch during the second half of the 17th and the 18th centuries to facilitate trading activities of Sri Lanka’s northern region, indicate not only of Jaffna’s strategic importance to Europeans but its significance throughout Sri Lanka’s history.\n\nNagadeepa Temple (Nagadeepa Purana Viharaya) is an ancient Buddhist temple situated on the Nagadeepa Island (Nainativu) off the coast of Jaffna Peninsula. It is one of Sri Lanka’s 16 holiest Buddhist shrines known as ‘Solosmasthana’. The name of the island alludes to the folklore inhabitants, the Naga tribal people. Nāka Tivu or Nāka Nadu was the name of the whole Jaffna peninsula in some historical documents. The Greek cartographer Ptolemy described the territory including islands around the Jaffna peninsula as ‘Nagadibois’ in the first century CE. In the historical legends of Sri Lanka such as Mahawansa and in the ancient Indian Tamil Sangam literature Manimekalai the island was mentioned as ‘Manipallavam’ of Nāka Tivu. Nagadeepa Temple is known as the place where Lord Buddha visited during his second visit to Sri Lanka to mediate and settle a dispute between two Naga tribal kings, Chulodara and Mahodara over the possession of a gem-studded throne. The legends state that after having listened to Buddha’s Dhamma sermons the two warring kings made peace and they offered the throne in unison to Lord Buddha, who returned it to the Naga kings. The Rajayathana stupa was constructed by the two Naga kings at the site where Lord Buddha preached Dhamma and the gem studded throne was enshrined in the stupa and it became a place of Buddhist veneration..."
    },
    details: {
      driving_times: [
        "Jaffna Fort visit – approx. 10 mins",
        "Jaffna to Trincomalee – approx. 4 hrs 30 mins"
      ],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 8,
    title: "TRINCOMALEE",
    plan: [
      "After breakfast morning relax by the beach",
      "Afternoon proceed on a city tour in Trincomalee City including Koneswaram Temple",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "TRINCOMALEE",
      text: "Trincomalee also known as Gokanna/Gokarna, is the administrative headquarters of the Trincomalee District and major resort port city of Eastern Province, Sri Lanka. Located on the east coast of the island overlooking the Trincomalee Harbour, 237 kilometres (147 mi) north-east of Colombo, 182 kilometres (113 mi) south-east of Jaffna and 111 kilometres (69 mi) miles north of Batticaloa, Trincomalee has been one of the main centres of Sri Lankan Tamil language speaking culture on the island for over two millennia. With a population of 99,135, Trincomalee city is built on a peninsula of the same name, which divides its inner and outer harbours. People from Trincomalee are known as Trincomalians and the local authority is Trincomalee Urban Council. Trincomalee city is home to the famous Koneswaram temple from where it developed and earned its historic Tamil name Thirukonamalai. The town is home to other historical monuments such as the Bhadrakali Amman Temple, Trincomalee, the Trincomalee Hindu Cultural Hall and, opened in 1897, the Trincomalee Hindu College. Trincomalee is also the site of the Trincomalee railway station and an ancient ferry service to Jaffna and the south side of the harbour at Muttur."
    },
    details: {
      driving_times: [],
      excursion_durations: [
        "Trincomalee (Excursion time 1 hr 30 mins)"
      ],
      dress_code: ""
    }
  },
  {
    day: 9,
    title: "TRINCOMALEE / GIRIHANDU SEYA / PIGEON ISLAND / TRINCOMALEE",
    plan: [
      "After breakfast visit Girihanduseya (The first Stupa in Sri lanka)",
      "There after return back to Trincomalee and enjoy a boatride to Pigeon Island to have a swim (Snorkeling can be arranged for an extra cost at the site)",
      "Return to hotel and relax"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "GIRIHANDU SEYA & PIGEON ISLAND",
      text: "Girihandu Seya (also known as Nithupathpana Vihara is an ancient Buddhist temple situated in Thiriyai, Trincomalee, Sri Lanka. The temple is supposed to be the first Buddhist Stupa in Sri Lanka, believed to be constructed by two seafaring merchants Trapusa and Bahalika. The names of the two merchants are recorded in a rock inscription found in the Vihara premises. According to the inscription, Girihandu Seya was built by the guilds of merchants named Trapassuka and Vallika where the names are written as Tapassu and Bhalluka in later Sinhala chronicles. Some scholars also hold the view that Mahayana influenced seafaring merchants from the Pallava Kingdom were responsible for the construction of this temple.\n\nPigeon Island National Park is one of the two marine national parks of Sri Lanka. The national park is situated 1 km off the coast of Nilaveli, a coastal town in Eastern Province, encompassing a total area of 471.429 hectares. The island’s name derives from the rock pigeon which has colonized it. The national park contains some of the best remaining coral reefs of Sri Lanka.[1]Pigeon Island was designated as a sanctuary in 1963. In 2003 it was redesignated as a national park. This national park is the 17th in Sri Lanka. The island was used as a shooting range during the colonial era.[2] Pigeon Island is one of the several protected areas affected by the Indian Ocean tsunami in 2004"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 10,
    title: "TRINCOMALEE (BEACH RELAX)",
    plan: [
      "After breakfast full day relax by the beach"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "BEACH RELAX",
      text: "Full day relax by the beach"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 11,
    title: "TRINCOMALEE (BEACH RELAX)",
    plan: [
      "After breakfast full day relax by the beach"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "BEACH RELAX",
      text: "Full day relax by the beach"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 12,
    title: "TRINCOMALEE (BEACH RELAX)",
    plan: [
      "After breakfast full day relax by the beach"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "BEACH RELAX",
      text: "Full day relax by the beach"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 13,
    title: "TRINCOMALEE (BEACH RELAX)",
    plan: [
      "After breakfast full day relax by the beach"
    ],
    accommodation: "Dinner & overnight stay at Trincomalee",
    main_sight_description: {
      title: "BEACH RELAX",
      text: "Full day relax by the beach"
    },
    details: {
      driving_times: [],
      excursion_durations: [],
      dress_code: ""
    }
  },
  {
    day: 14,
    title: "TRINCOMALEE / AIRPORT / DEPARTURE",
    plan: [
      "After breakfast check-out and transfer to the Airport for departure transfers.",
      "Have a safe flight!!"
    ],
    accommodation: "— END TOUR —",
    main_sight_description: {
      title: "DEPARTURE",
      text: "Transfer to the Airport for departure."
    },
    details: {
      driving_times: [
        "Trincomalee to Airport – approx. 6 hrs"
      ],
      excursion_durations: [],
      dress_code: ""
    }
  }
],
inclusions: [
  "Meet, assist and welcome on arrival at Colombo airport.",
  "Accommodation at above hotels or similar mentioned in the itinerary sharing Double/twin including with breakfast & dinner",
  "Transportation in a A/C Vehicle with the service of Language speaking guide or Chauffeur for the round tour",
  "2 bottles of 500ml water per person per day.",
  "Airport pick up & Airport drop off.",
  "Fuel & local insurance for the vehicle.",
  "Fuel & local insurance for the vehicle.",
  "All government taxes.",
  "Entrance tickets at the sites."
],
exclusions: [
  "Breakfast on the arrival day.",
  "Lunch & Beverages at all hotels.",
  "Late check-outs or early check-ins.",
  "Items of a personal nature such as laundry, telephone calls, tipping to service.",
  "Other services that are not mentioned in the program.",
  "Visas",
  "Any Airfares / travel Insurance / Airport taxes.",
  "All expenses of personal nature.",
  "Tips and portage & Gratuities.",
  "Any camera fees."
],
  }
];