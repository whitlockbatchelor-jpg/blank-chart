export interface GalleryImage {
  src: string;
  alt: string;
}

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
  image?: string;
  imageAlt?: string;
  gallery?: GalleryImage[];
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
    image: "/images/destinations/faroe-islands/dramatic-sea-cliffs.jpeg",
    imageAlt: "Dramatic sea cliffs rising from the ocean with crashing waves",
    gallery: [
      { src: "/images/destinations/faroe-islands/rocky-coastline-turquoise-water.jpeg", alt: "Rocky coastline with turquoise water along volcanic shores" },
      { src: "/images/destinations/faroe-islands/ocean-waves-volcanic-coast.jpeg", alt: "Ocean waves breaking against a volcanic coastline" },
      { src: "/images/destinations/faroe-islands/rugged-island-coastline.jpeg", alt: "Rugged island coastline viewed from the water" },
      { src: "/images/destinations/faroe-islands/sea-cave-coastal-cliffs.jpeg", alt: "Sea cave and coastal cliffs carved by Atlantic waves" },
      { src: "/images/destinations/faroe-islands/sunset-over-north-atlantic.jpeg", alt: "Golden sunset over the North Atlantic from a remote beach" },
    ],
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
    image: "/images/destinations/oman/desert-mountain-landscape.jpeg",
    imageAlt: "Desert mountain landscape with layered ridges stretching to the horizon",
    gallery: [
      { src: "/images/destinations/oman/hajar-mountains-wadi.jpeg", alt: "Hajar Mountains wadi with deep canyon walls and dry riverbed" },
      { src: "/images/destinations/oman/canyon-desert-terrain.jpeg", alt: "Canyon cutting through arid desert terrain" },
      { src: "/images/destinations/oman/sandstone-formations.jpeg", alt: "Sandstone formations sculpted by wind and time" },
      { src: "/images/destinations/oman/coastal-desert-cliffs.jpeg", alt: "Coastal desert cliffs meeting the Arabian Sea" },
    ],
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
    image: "/images/destinations/svalbard/glacier-ice-formations.jpeg",
    imageAlt: "Glacier ice formations in an Arctic fjord landscape",
    gallery: [
      { src: "/images/destinations/svalbard/ski-touring-snow-ridge.jpeg", alt: "Ski touring along a snow ridge with mountain panorama" },
      { src: "/images/destinations/svalbard/powder-descent-mountain.jpeg", alt: "Powder descent through deep mountain snow" },
      { src: "/images/destinations/svalbard/arctic-glacier-landscape.jpeg", alt: "Arctic glacier landscape stretching to the horizon" },
      { src: "/images/destinations/svalbard/fjord-glacier-panorama.jpeg", alt: "Panoramic view of a glacier meeting a fjord" },
      { src: "/images/destinations/svalbard/midnight-sun-snowfield.jpeg", alt: "Snowfield bathed in midnight sun light" },
    ],
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
    image: "/images/destinations/madagascar/forest-trail-expedition.jpeg",
    imageAlt: "Forest trail winding through lush wilderness on an expedition",
    gallery: [
      { src: "/images/destinations/madagascar/lush-valley-overlook.jpeg", alt: "Overlook of a lush green valley from the trail" },
      { src: "/images/destinations/madagascar/trekking-through-wilderness.jpeg", alt: "Trekking through remote wilderness terrain" },
      { src: "/images/destinations/madagascar/ridgeline-trail-views.jpeg", alt: "Ridgeline trail with sweeping views of the landscape below" },
      { src: "/images/destinations/madagascar/coastal-outrigger-waters.jpeg", alt: "Coastal waters where traditional outrigger boats sail" },
    ],
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
    image: "/images/destinations/wakhan/high-altitude-trek-approach.jpeg",
    imageAlt: "High altitude trek approach through remote mountain terrain",
    gallery: [
      { src: "/images/destinations/wakhan/mountain-pass-trekking.jpeg", alt: "Trekking through a high mountain pass with peaks on both sides" },
      { src: "/images/destinations/wakhan/remote-valley-expedition.jpeg", alt: "Remote valley expedition deep in the mountain wilderness" },
      { src: "/images/destinations/wakhan/glacier-moraine-crossing.jpeg", alt: "Crossing a glacier moraine with crevassed ice" },
      { src: "/images/destinations/wakhan/snowfield-peak-panorama.jpeg", alt: "Snowfield panorama with unclimbed peaks in the distance" },
    ],
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
    image: "/images/destinations/east-greenland/iceberg-fjord-calm-water.jpeg",
    imageAlt: "Iceberg floating in a calm fjord with still water reflections",
    gallery: [
      { src: "/images/destinations/east-greenland/glacier-calving-face.jpeg", alt: "Glacier calving face with deep blue ice" },
      { src: "/images/destinations/east-greenland/fjord-mountain-reflection.jpeg", alt: "Mountain reflection in a glassy fjord" },
      { src: "/images/destinations/east-greenland/rugged-peaks-wilderness.jpeg", alt: "Rugged peaks rising from the wilderness" },
      { src: "/images/destinations/east-greenland/alpine-lake-solitude.jpeg", alt: "Alpine lake in perfect solitude surrounded by peaks" },
      { src: "/images/destinations/east-greenland/kayak-coastal-waters.jpeg", alt: "Kayaking through coastal waters along a rocky shore" },
    ],
  },
  {
    slug: "ortler-ski-tour",
    destination: "Ortler Range",
    title: "Ortler Haute Route by Ski",
    region: "South Tyrol",
    pitch:
      "A hut-to-hut ski touring traverse through the Ortler Alps \u2014 Italy\u2019s highest range outside Mont Blanc. Skin up glaciers at dawn, ski 2,000m descents, sleep in rifugios built into the rock. Rifugio Pizzini to Rifugio Branca, guided by International Alpine Guides who know every crevasse and couloir.",
    submitter: "Whit B.",
    location: "Charleston",
    tags: ["Ski", "Mountaineering"],
    status: "In Development",
    image: "/images/destinations/ortler/skier-glacier-valley-overlook.jpg",
    imageAlt: "Skier with red pack overlooking a vast glacier valley in the Ortler Alps, bluebird sky",
    gallery: [
      { src: "/images/destinations/ortler/switchback-skin-track-glacier.jpg", alt: "Switchback skin track carved up a steep glacier face in the Ortler Range" },
      { src: "/images/destinations/ortler/two-skiers-glacier-shadow.jpg", alt: "Two skiers crossing a glacier beneath dramatic mountain shadows" },
      { src: "/images/destinations/ortler/rifugio-branca-skis.jpg", alt: "Rifugio Cesare Branca at 2493m with skis lined up outside" },
      { src: "/images/destinations/ortler/rifugio-pizzini-frattola.jpg", alt: "Rifugio Pizzini-Frattola at 2706m with red shutters and ski rack" },
      { src: "/images/destinations/ortler/tea-mountain-panorama.jpg", alt: "Glass of tea on a wooden table with Ortler mountain panorama behind" },
      { src: "/images/destinations/ortler/alpenglow-peak-dawn.jpg", alt: "Alpenglow on an Ortler peak at dawn with Austrian flag" },
      { src: "/images/destinations/ortler/skinning-toward-mountains.jpg", alt: "Skier skinning toward snow-covered peaks under dramatic clouds" },
      { src: "/images/destinations/ortler/approach-mountain-hut.jpg", alt: "Approaching a mountain hut on a skinning track, overcast skies" },
      { src: "/images/destinations/ortler/sunset-valley-hut-terrace.jpg", alt: "Sunset over the valley from a mountain hut terrace" },
    ],
  },
];
