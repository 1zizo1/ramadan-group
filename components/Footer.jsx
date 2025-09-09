"use client";
import React from "react";
import Wave from "@/components/ui/wave";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

const Footer = () => {
  return (
    <footer className="relative  text-gray-700">
      {/* Background wave */}
      <div className="absolute bottom-0 w-full -z-50">
        <Wave />
      </div>

      {/* CTA Banner */}
      <motion.div
        className="bg-yellow-500 flex flex-col md:flex-row items-center justify-between mx-auto rounded-lg shadow-md hover:shadow-lg transition p-4 md:p-6 max-w-5xl -mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full md:w-3/4 text-center md:text-left">
          <h3 className="font-bold text-base md:text-lg text-black">
            Your Success Starts Here!
          </h3>
          <p className="mt-1 text-xs md:text-sm text-black/80">
            Contact us for the right solutions and efficient business support.
          </p>
        </div>

        <motion.div
          className="w-full md:w-auto mt-3 md:mt-0 flex justify-center md:justify-end"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <a
            href="/contact"
            className="px-5 py-2 bg-white text-black text-sm font-medium rounded-md shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-24 gap-10 py-12 border-b border-gray-300/40">
        {/* Logo + Description */}
        <div className="w-full md:w-2/5">
          <CldImage
            className="w-32 md:w-40"
            src="logo_klv1mn"
            width="200"
            height="80"
            alt="Company Logo"
          />
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            We don’t just provide a service — we support your journey to success
            with passion and dedication. Your success reflects your trust in us,
            and we are here to stand by you every step of the way.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-gray-900 mb-4">Company</h2>
          <ul className="text-sm space-y-2">
            {["Home", "About Us", "Contact Us", "Privacy Policy"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    className="hover:text-yellow-600 hover:underline transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <div className="text-sm space-y-2 text-gray-600">
            <p>📞 +1-234-567-890</p>
            <p>✉️ contact@ramadangroup.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="py-5 text-center text-xs md:text-sm text-gray-500">
        © 2025 Ramadan Group. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
