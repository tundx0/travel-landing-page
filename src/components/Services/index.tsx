"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/calculated-weather-icon.png",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "/best-flights-icon.png",
    featured: true,
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: "/local-events-icon.png",
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    icon: "/customization-icon.png",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="container mx-auto px-6 py-24 min-h-[525px]"
    >
      <div className="text-center mb-16">
        <p className="text-indigo-600 uppercase tracking-wide text-lg md:text-xl">
          Category
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-indigo-900">
          We Offer Best Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`p-10 rounded-lg shadow-lg text-center h-full ${
              service.featured ? "bg-white transform scale-105" : "bg-gray-50"
            }`}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-4">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-700">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
