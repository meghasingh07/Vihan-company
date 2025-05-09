import React from "react";
import { motion } from "framer-motion";

export default function InvestmentHeroSection() {
  return (
    <section className="min-h-screen bg-white font-sans pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-36 lg:pr-10 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative flex justify-center items-center">
          <motion.img
            src="/what-we-do-1.webp"
            alt="Man on laptop"
            className="w-64 rounded-xl shadow-lg absolute top-0 left-0 z-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="/what-we-do-2.webp"
            alt="Dubai skyline"
            className="w-72 rounded-xl shadow-2xl ml-24 mt-20 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 font-medium uppercase mb-2">
            Company's Vision
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Investing in the
            <br /> digital future.
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Our vision is to tackle pipe problems in smart ways. We want to
            revolutionize modern plastic pipe needs, innovating seamless flow
            through us.
          </p>
          <ul className="mb-6 space-y-3">
            <li className="text-lg font-semibold text-gray-800 flex items-center">
              <span className="mr-2">↗</span> Business-Plan Consulting
            </li>
            <li className="text-lg font-semibold text-gray-800 flex items-center">
              <span className="mr-2">↗</span> First-Class Investments
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#004b93] hover:bg-[#0F3E3D] text-black hover:text-amber-50 font-semibold px-6 py-3 w-fit rounded shadow hover:shadow-lg transition-all duration-300 text-sm md:text-base mx-auto md:mx-0"
          >
            Get a quote
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 bg-white border cursor-pointer border-gray-200 rounded-xl shadow-sm p-6 flex flex-col sm:flex-row sm:justify-around sm:items-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          "Register your email",
          "Accept Invitations",
          "Start using your email",
        ].map((step, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-center space-x-4 group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-white border border-gray-300 text-gray-900 font-bold rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300"
              whileHover={{
                backgroundColor: "#FACC15",
                color: "#1F2937",
              }}
            >
              {idx + 1}
            </motion.div>
            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
              {step}
            </p>
            {idx < 2 && <span className="text-gray-400 text-xl">›</span>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
