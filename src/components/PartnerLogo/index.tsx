"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Axon Airlines", logo: "/axon.png" },
  { name: "Jetstar", logo: "/jetstar.png" },
  { name: "Expedia", logo: "/expedia.png" },
  { name: "Qantas", logo: "/qantas.png" },
  { name: "Alitalia", logo: "/alitalia.png" },
];

const PartnerLogos: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className=" w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
