"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div
      id="#"
      className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-8 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start md:w-1/2"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-900">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-md">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-orange-400 text-white font-bold text-lg rounded-full shadow-lg"
          >
            Find out more
          </a>
          <button className="px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-full shadow-lg flex items-center">
            Play Demo
            <svg
              className="w-8 h-8 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative md:w-1/2"
      >
        <Image
          src="/hero-image.png"
          alt="Traveler"
          className="w-full max-w-2xl rounded-lg shadow-lg"
          width={300}
          height={300}
        />
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          src="/airplane-icon.png"
          alt="Airplane"
          className="absolute top-0 left-0 w-64 h-64"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
