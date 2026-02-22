export interface Idea {
  slug: string;
  destination: string;
  title: string;
  region: string;
  pitch: string;
  submitter: string;
  location: string;
  tags: string[];
  status: "New" | "Under Review" | "In Development" | "Now a Keel Ridge Destination";
}

export const ideas: Idea[] = [
  {
    slug: "faroe-islands-sea-kayak",
    destination: "Faroe Islands",
    title: "Faroe Islands by Sea Kayak",
    region: "North Atlantic",
    pitch:
      "Paddling between 18 volcanic islands through sea caves, past puffin colonies, beneath 2,000-foot sea cliffs. No roads where the best coastline is. The only way to see it is from the water.",
    submitter: "Lars K.",
    location: "Copenhagen",
    tags: ["Kayak", "Sailing"],
    status: "Under Review",
  },
  {
    slug: "oman-wadi-canyoneering",
    destination: "Oman",
    title: "Wadi Canyoneering & Dhow Sailing",
    region: "Arabian Peninsula",
    pitch:
      "The Hajar Mountains are full of deep wadis that nobody\u2019s exploring \u2014 technical canyoneering through turquoise pools, then sail a traditional dhow down the Musandam coast.",
    submitter: "Priya S.",
    location: "Dubai",
    tags: ["Trek", "Sailing"],
    status: "New",
  },
  {
    slug: "svalbard-ski-sail",
    destination: "Svalbard",
    title: "Spring Ski & Sail",
    region: "Arctic Norway",
    pitch:
      "April in Svalbard: 24-hour light, stable snowpack, and a sailboat as base camp. Ski couloirs that drop straight into Arctic fjords, then sail to the next one. Polar bears on the beach. The midnight sun on the summit.",
    submitter: "Erik M.",
    location: "Troms\u00f8",
    tags: ["Ski", "Sailing"],
    status: "In Development",
  },
  {
    slug: "madagascar-mtb-tsingy",
    destination: "Madagascar",
    title: "MTB the Tsingy",
    region: "Indian Ocean",
    pitch:
      "Bikepacking through Madagascar\u2019s western dry forests to reach the Tsingy de Bemaraha \u2014 a razor-sharp limestone labyrinth. Combine with pirogue canoe down the Tsiribihina River and coastal sailing in traditional outrigger boats.",
    submitter: "Ana R.",
    location: "Lisbon",
    tags: ["MTB", "Kayak"],
    status: "New",
  },
  {
    slug: "wakhan-corridor",
    destination: "Wakhan Corridor",
    title: "Afghanistan\u2019s Forgotten Edge",
    region: "Central Asia",
    pitch:
      "The narrow strip of Afghanistan that reaches toward China \u2014 Kyrgyz nomads, Marco Polo sheep, and peaks that have never been climbed. Access from the Tajikistan side, trek through with local Wakhi guides.",
    submitter: "James T.",
    location: "London",
    tags: ["Trek", "Mountaineering"],
    status: "Under Review",
  },
  {
    slug: "east-greenland-scoresby-sound",
    destination: "East Greenland",
    title: "Kayak the Scoresby Sound",
    region: "Arctic",
    pitch:
      "The world\u2019s largest fjord system. Paddle between cathedral icebergs, camp on shores where Inuit hunters still travel by dogsled. No roads, no towns, no other tourists. Just ice, rock, and silence.",
    submitter: "Katrin H.",
    location: "Reykjav\u00edk",
    tags: ["Kayak", "Trek"],
    status: "New",
  },
];
