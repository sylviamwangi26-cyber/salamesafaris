const packagesData = {
  oneday: {
    title: "One Day Safari – Malindi Experience",
    description: "Hell’s Kitchen, Robinson Island, Mida Creek and Malindi town walk.",
    pickup: "Pickup from Malindi / Watamu hotels at 6:30 AM",

    images: [
      "assets/images/oneday.jpg",
      "assets/images/hells-kitchen.jpg",
      "assets/images/mida-creek.jpg"
    ],

    itinerary: [
      { day: "Morning", text: "Pickup and drive to Hell’s Kitchen (Marafa Canyon). Guided exploration." },
      { day: "Midday", text: "Lunch and relaxation at Robinson Island." },
      { day: "Afternoon", text: "Visit Mida Creek mangroves and sunset experience." },
      { day: "Evening", text: "Return to hotel." }
    ]
  },

  mara2: {
    title: "2 Days / 1 Night – Masai Mara",
    description: "A short but intense Masai Mara safari experience.",
    pickup: "Pickup from Nairobi hotel or airport",

    images: ["assets/images/mara2.jpg"],

    itinerary: [
      { day: "Day 1", text: "Nairobi → Masai Mara, lunch, afternoon game drive." },
      { day: "Day 2", text: "Morning game drive, breakfast, return to Nairobi." }
    ]
  },

  tsavo3: {
    title: "3 Days / 2 Nights – Tsavo East & West",
    description: "Red elephants, volcanic landscapes and classic safaris.",
    pickup: "Pickup from Mombasa / Diani / Watamu hotels",

    images: ["assets/images/tsavo.jpg"],

    itinerary: [
      { day: "Day 1", text: "Drive to Tsavo East, game drive, overnight." },
      { day: "Day 2", text: "Transfer to Tsavo West, Mzima Springs visit." },
      { day: "Day 3", text: "Morning game drive, return to coast." }
    ]
  },

  amboseli4: {
    title: "4 Days / 3 Nights – Ngutuni, Ziwani, Amboseli & Tsavo East",
    description: "Elephants, Kilimanjaro views and conservation experiences.",
    pickup: "Pickup from coastal hotels",

    images: ["assets/images/amboseli.jpg"],

    itinerary: [
      { day: "Day 1", text: "Ngutuni Sanctuary game drive." },
      { day: "Day 2", text: "Ziwani eco lodge & walking safari." },
      { day: "Day 3", text: "Amboseli National Park." },
      { day: "Day 4", text: "Tsavo East and return." }
    ]
  },

  classic5: {
    title: "5 Days / 4 Nights – Amboseli, Tsavo West, Taita Hills & Tsavo East",
    description: "Luxury lodges and diverse ecosystems.",
    pickup: "Pickup from coast or Nairobi",

    images: ["assets/images/taita.jpg"],

    itinerary: [
      { day: "Day 1", text: "Amboseli arrival and game drive." },
      { day: "Day 2", text: "Tsavo West exploration." },
      { day: "Day 3", text: "Taita Hills lodge experience." },
      { day: "Day 4", text: "Tsavo East safari." },
      { day: "Day 5", text: "Return to coast / airport." }
    ]
  },

  classic6: {
    title: "6 Days / 5 Nights – Aberdare, Nakuru, Naivasha & Masai Mara",
    description: "Highlands, lakes and Big Five safari.",
    pickup: "Pickup from Nairobi",

    images: ["assets/images/nakuru.jpg"],

    itinerary: [
      { day: "Day 1", text: "Aberdare National Park." },
      { day: "Day 2", text: "Lake Nakuru safari." },
      { day: "Day 3", text: "Lake Naivasha & boat ride." },
      { day: "Day 4–5", text: "Masai Mara full safari." },
      { day: "Day 6", text: "Return to Nairobi." }
    ]
  },

  highlights6: {
    title: "6 Days / 5 Nights – Mara, Nakuru, Tsavo East & Amboseli",
    description: "Kenya’s top parks in one journey.",
    pickup: "Pickup from Nairobi",

    images: ["assets/images/mara.jpg"],

    itinerary: [
      { day: "Day 1–2", text: "Masai Mara safari." },
      { day: "Day 3", text: "Lake Nakuru." },
      { day: "Day 4", text: "Tsavo East." },
      { day: "Day 5", text: "Amboseli." },
      { day: "Day 6", text: "Departure." }
    ]
  },

  grand8: {
    title: "8 Days / 7 Nights – Grand Kenya Safari",
    description: "The ultimate Kenyan safari circuit.",
    pickup: "Pickup from Nairobi",

    images: ["assets/images/grand.jpg"],

    itinerary: [
      { day: "Day 1–2", text: "Masai Mara." },
      { day: "Day 3", text: "Lake Nakuru." },
      { day: "Day 4", text: "Amboseli." },
      { day: "Day 5", text: "Taita Hills." },
      { day: "Day 6–7", text: "Tsavo East." },
      { day: "Day 8", text: "Return / departure." }
    ]
  }
};

// ===== LOAD PACKAGE =====
const params = new URLSearchParams(window.location.search);
const key = params.get("package");
const pkg = packagesData[key];

if (pkg) {
  document.getElementById("package-title").textContent = pkg.title;
  document.getElementById("package-description").textContent = pkg.description;
  document.getElementById("pickup-info").textContent = pkg.pickup;

  const itineraryDiv = document.querySelector(".itinerary");
  itineraryDiv.innerHTML = "";
  pkg.itinerary.forEach(i => {
    itineraryDiv.innerHTML += `<div class="day"><h3>${i.day}</h3><p>${i.text}</p></div>`;
  });

  const gallery = document.querySelector(".package-gallery");
  pkg.images.forEach(img => {
    gallery.innerHTML += `<img src="${img}" alt="">`;
  });
}
