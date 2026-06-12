import bikeImage from '../assets/bike.jpg';
import extraImage from '../assets/extra.jpg';
import newImage from '../assets/new.jpg';
import peakImage from '../assets/peakpx.jpg';
import rrImage from '../assets/rr.jpeg';

export const vehicleCatalog = [
  {
    slug: 'rolls-royce-ghost',
    category: 'Car',
    badge: 'Luxury',
    homeTitle: 'Rolls Royce',
    homeSpec: 'V12 engine',
    name: 'Rolls-Royce Ghost',
    spec: 'V12 serenity',
    image: rrImage,
    description:
      'A flagship sedan with quiet power, handcrafted comfort, and a road presence that feels effortless.',
    detailLead:
      'The Ghost is built for calm, composed travel with a cabin that feels like its own private lounge.',
    note: 'Best for city arrivals and executive travel.',
    specs: [
      { label: 'Powertrain', value: 'Handcrafted V12 luxury' },
      { label: 'Ride feel', value: 'Silky and refined' },
      { label: 'Cabin', value: 'Quiet and premium' },
      { label: 'Ideal for', value: 'Executive travel' },
    ],
    highlights: [
      'Handcrafted interior materials with a serene driving experience',
      'Smooth power delivery for relaxed highway cruising',
      'A formal road presence that suits arrivals and special occasions',
    ],
  },
  {
    slug: 'audi-rs-etron-gt',
    category: 'Car',
    badge: 'Electric',
    homeTitle: 'Audi',
    homeSpec: 'V12 engine',
    name: 'Audi RS e-tron GT',
    spec: 'Dual-motor instant torque',
    image: newImage,
    description:
      'A sleek EV grand tourer tuned for quick launches, modern tech, and a composed long-distance ride.',
    detailLead:
      'This electric performance car blends sharp styling with an easy-to-live-with cabin and instant response.',
    note: 'Perfect for drivers who want speed and efficiency.',
    specs: [
      { label: 'Powertrain', value: 'Dual-motor electric performance' },
      { label: 'Character', value: 'Instant torque and smooth delivery' },
      { label: 'Cabin', value: 'Driver-focused and modern' },
      { label: 'Ideal for', value: 'Fast daily driving' },
    ],
    highlights: [
      'Modern EV feel with effortless acceleration',
      'Grand touring comfort for everyday and longer drives',
      'A clean, high-tech cabin with a premium atmosphere',
    ],
  },
  {
    slug: 'lamborghini-huracan',
    category: 'Car',
    badge: 'Supercar',
    homeTitle: 'Lamborgani',
    homeSpec: 'V12 engine',
    name: 'Lamborghini Huracán',
    spec: 'V10 excitement',
    image: peakImage,
    description:
      'Sharp styling, a loud personality, and track-ready response for people who want every drive to feel like an event.',
    detailLead:
      'The Huracán is all about drama, urgency, and a cockpit that turns the driver into the center of the story.',
    note: 'Built for weekend runs and special occasions.',
    specs: [
      { label: 'Powertrain', value: 'High-revving V10 character' },
      { label: 'Handling', value: 'Track-inspired and sharp' },
      { label: 'Cabin', value: 'Focused and dramatic' },
      { label: 'Ideal for', value: 'Performance-minded drivers' },
    ],
    highlights: [
      'Explosive throttle response with a motorsport feel',
      'Striking design that looks fast even at a standstill',
      'A driver-first layout built for engaging road and track use',
    ],
  },
  {
    slug: 'ford-mustang-dark-horse',
    category: 'Car',
    badge: 'Muscle',
    homeTitle: 'Mustang',
    homeSpec: 'V8 engine',
    name: 'Ford Mustang Dark Horse',
    spec: 'V8 performance coupe',
    image: extraImage,
    description:
      'Classic American muscle with modern control, strong acceleration, and a bold stance on the road.',
    detailLead:
      'The Dark Horse keeps the Mustang attitude while adding a more focused, performance-heavy personality.',
    note: 'For drivers who want attitude and sound.',
    specs: [
      { label: 'Powertrain', value: 'Naturally aspirated V8 muscle' },
      { label: 'Character', value: 'Bold and energetic' },
      { label: 'Cabin', value: 'Driver-oriented cockpit' },
      { label: 'Ideal for', value: 'Open-road fun' },
    ],
    highlights: [
      'A strong V8 soundtrack with classic muscle-car appeal',
      'Modern chassis tuning for more control and confidence',
      'A confident stance that feels equally sporty and expressive',
    ],
  },
  {
    slug: 'bmw-s1000-rr',
    category: 'Bike',
    badge: 'Superbike',
    homeTitle: 'BMW S 1000 RR',
    homeSpec: '999cc precision',
    name: 'BMW S 1000 RR',
    spec: '999cc precision',
    image: bikeImage,
    description:
      'A sharp superbike built for riders who want fast response, advanced electronics, and a track-inspired feel.',
    detailLead:
      'The S 1000 RR brings a focused riding position and a fast, confident character to every stretch of road.',
    note: 'Ideal for sport riders and open-road runs.',
    specs: [
      { label: 'Powertrain', value: 'High-revving 999cc superbike engine' },
      { label: 'Character', value: 'Race-inspired and precise' },
      { label: 'Riding feel', value: 'Agile and planted' },
      { label: 'Ideal for', value: 'Track-day speed' },
    ],
    highlights: [
      'Fast steering and strong performance for spirited riders',
      'Advanced electronics for confidence at higher speeds',
      'A compact, race-style cockpit that feels focused',
    ],
  },
  {
    slug: 'ducati-panigale-v4',
    category: 'Bike',
    badge: 'Track',
    homeTitle: 'Ducati Panigale V4',
    homeSpec: 'Race-derived speed',
    name: 'Ducati Panigale V4',
    spec: 'Race-derived speed',
    image: bikeImage,
    description:
      'Italian design and serious performance with a stance that makes the whole bike feel alive from the first twist.',
    detailLead:
      'The Panigale V4 feels razor sharp, with a dramatic style and a riding position that turns every ride into an event.',
    note: 'A premium choice for track-day energy.',
    specs: [
      { label: 'Powertrain', value: 'V4 performance character' },
      { label: 'Handling', value: 'Tight and track-focused' },
      { label: 'Riding feel', value: 'Aggressive and engaging' },
      { label: 'Ideal for', value: 'Premium sport riding' },
    ],
    highlights: [
      'Italian styling that looks as exciting as it rides',
      'A serious performance feel with precise handling',
      'Built for riders who want a premium sportbike experience',
    ],
  },
  {
    slug: 'royal-enfield-himalayan-450',
    category: 'Bike',
    badge: 'Adventure',
    homeTitle: 'Royal Enfield Himalayan 450',
    homeSpec: 'Long-distance comfort',
    name: 'Royal Enfield Himalayan 450',
    spec: 'Long-distance comfort',
    image: bikeImage,
    description:
      'Comfortable, durable, and ready for long routes, mixed roads, and weekend exploration beyond the city.',
    detailLead:
      'The Himalayan 450 is designed to stay calm on rough roads and comfortable on longer rides.',
    note: 'Best for touring and daily utility.',
    specs: [
      { label: 'Powertrain', value: 'Adventure-ready single-cylinder feel' },
      { label: 'Handling', value: 'Stable and predictable' },
      { label: 'Riding position', value: 'Upright and comfortable' },
      { label: 'Ideal for', value: 'Touring and mixed roads' },
    ],
    highlights: [
      'Comfortable stance for long days in the saddle',
      'Built to handle city streets and rougher roads alike',
      'Easygoing adventure character for weekend exploration',
    ],
  },
  {
    slug: 'kawasaki-ninja-zx-6r',
    category: 'Bike',
    badge: 'Sport',
    homeTitle: 'Kawasaki Ninja ZX-6R',
    homeSpec: 'Middleweight performance',
    name: 'Kawasaki Ninja ZX-6R',
    spec: 'Middleweight performance',
    image: bikeImage,
    description:
      'A balanced sport bike with quick handling and a playful personality for riders who want all-round excitement.',
    detailLead:
      'The ZX-6R offers an approachable middleweight feel with enough edge to keep rides lively.',
    note: 'Great for riders stepping into performance.',
    specs: [
      { label: 'Powertrain', value: 'Middleweight inline-four character' },
      { label: 'Handling', value: 'Quick and playful' },
      { label: 'Riding feel', value: 'Balanced sport posture' },
      { label: 'Ideal for', value: 'Everyday thrills' },
    ],
    highlights: [
      'A lively sport-bike feel without going too extreme',
      'Balanced handling that suits confident road riding',
      'A strong option for riders moving into performance bikes',
    ],
  },
];

export const bodyVehicles = vehicleCatalog.slice(0, 4);
export const carVehicles = vehicleCatalog.slice(0, 4);
export const bikeVehicles = vehicleCatalog.slice(4);

export function getVehicleBySlug(slug) {
  return vehicleCatalog.find((vehicle) => vehicle.slug === slug);
}
