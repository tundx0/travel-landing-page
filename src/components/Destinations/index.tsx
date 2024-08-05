"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Rome, Italy",
    price: "$5,42k",
    duration: "10 Days Trip",
    image: "/rome.png",
  },
  {
    id: 2,
    name: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    image: "/london.png",
  },
  {
    id: 3,
    name: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
    image: "/europe.png",
  },
];

const Destinations = () => {
  return (
    <section
      id="destinations"
      className="flex flex-col gap-8 py-10 min-h-[525px] justify-center items-center"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Top Selling</h2>
      <p className="block text-5xl">Top Destinations</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center space-y-6 md:space-y-0 md:space-x-6">
        {destinations.map((destination) => (
          <motion.div
            key={destination.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-64 w-80">
              <Image
                src={destination.image}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{destination.name}</h3>
              <p className="text-gray-600">{destination.price}</p>
              <p className="text-gray-600">{destination.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
