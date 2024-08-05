"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted email:", email);
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 rounded-3xl p-8 max-w-2xl mx-auto my-32"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-300"
          type="submit"
        >
          Subscribe
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SubscriptionForm;
