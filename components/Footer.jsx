"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const Footer = () => {
  return (
    <footer className="text-gray-700">
      {/* Background wave */}
     
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-24 gap-10 py-12 border-b border-gray-300/40">
        {/* Logo + Description */}
        <div className="w-full md:w-2/5">
          <CldImage
            className="w-32 md:w-40"
            src="logo_1_-0001_2_wztort"
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
                    className="hover:text-blue-700 hover:underline transition"
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
            <p>📞 +20-101-0080-832</p>
            <p>✉️ contact@ramadan-group.com</p>
            <p>✉️ info@ramadan-group.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="py-5 text-center text-xs md:text-sm text-white bg-[#BA3030]">
        © 2025 Ramadan Group. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
