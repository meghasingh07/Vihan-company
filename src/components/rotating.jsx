import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  "/client-dhl-2.svg",
  "/client-digitallogo-1.svg",
  "/client-dropcam-1.svg",
  "/client-entr-2.svg",
  "/client-logo-7-2.svg",
  "/client-yahoofinance-2.svg",
];

export default function Rotating() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-66.66%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handlePause = () => controls.stop();
  const handleResume = () =>
    controls.start({
      x: ["0%", "-66.66%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });

  return (
    <div className="w-full overflow-hidden">
     
      <div
        className="bg-fixed bg-center bg-cover h-[450px] flex items-center justify-center relative"
        style={{ backgroundImage: "url('/fixed-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-6 leading-snug">
        Specialized Machines for 
          <br />
          Pipe Fittings Manufacturers
        </h1>
      </div>

     
      <div className="bg-gradient-to-r from-white to-gray-100 py-12 px-4 text-center shadow-inner">
        <p className="text-gray-600 text-lg mb-8">
          Join our customers in trusting Vihan.
        </p>

        <div
          className="relative overflow-hidden w-full"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          <motion.div className="flex whitespace-nowrap" animate={controls}>
            {[...logos, ...logos, ...logos].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`logo-${idx}`}
                className="h-10 w-auto mx-10 min-w-[120px] grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
