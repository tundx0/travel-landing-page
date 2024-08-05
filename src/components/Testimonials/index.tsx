"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike taylor",
    location: "Lahore, Pakistan",
    image: "/placeholder.png",
  },
  {
    id: 2,
    content:
      "Wonderfully impressed with the service and attention to detail. Highly recommended!",
    author: "Chris Thomas",
    location: "CEO of Red Button",
    image: "/placeholder.png",
  },
  {
    id: 3,
    content:
      "Exceptional experience from start to finish. Will definitely use again.",
    author: "Sarah Johnson",
    location: "New York, USA",
    image: "/placeholder.png",
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
        TESTIMONIALS
      </h2>
      <h3 className="text-5xl font-bold text-center mb-12 text-indigo-900">
        What People Say
        <br />
        About Us.
      </h3>

      <div className="flex items-center">
        <div className="w-1/2 pr-12">
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonials[currentTestimonial].id}
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].author}
              className="w-24 h-24 rounded-full object-cover"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        <div className="w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentTestimonial].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 mb-4">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>
              <h4 className="font-bold text-lg">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-gray-500">
                {testimonials[currentTestimonial].location}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center">
            <button
              onClick={prevTestimonial}
              className="mr-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
