"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Phone Bar */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-end px-4 md:px-6 py-1">
          <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
            {/* Dialer Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4 text-teal-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.093l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.392.33 12.035 12.035 0 01-5.437-5.437 1.125 1.125 0 01.33-1.392l1.293-.97a1.125 1.125 0 00.417-1.173L7.965 3.102A1.125 1.125 0 006.872 2.25H5.25A2.25 2.25 0 003 4.5v1.5z"
              />
            </svg>

            <a
              href="tel:+610240302314"
              className="hover:text-teal-800 transition"
            >
              +61 02 4030 2314
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Creatus Technologies Logo"
              width={250}
              height={140}
              priority
            />
          </div>

          {/* Desktop Navbar */}
          <nav className="flex items-center gap-6 text-slate-700 font-medium mx-auto">
            {/* Home */}
            <a
              href="#"
              className="relative group hover:text-teal-800 transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all group-hover:w-full"></span>
            </a>

            {/* Industries */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-800 transition">
                Industries
                <span className="text-xs group-hover:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {[
                  "Mining",
                  "Engineering",
                  "Manufacturing",
                  "Farming & Agriculture",
                  "Automotive",
                  "Food Processing",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 hover:bg-teal-700 hover:text-white transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-800 transition">
                Services
                <span className="text-xs group-hover:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </button>

              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {[
                  "Mechanical Design & Drafting",
                  "3D Scan to CAD",
                  "3D Scan Inspection",
                  "Digital Prototyping",
                  "Reverse Engineering",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 hover:bg-teal-700 hover:text-white transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* About */}
            <a
              href="#"
              className="relative group hover:text-teal-800 transition"
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all group-hover:w-full"></span>
            </a>

            {/* Gallery */}
            <a
              href="#"
              className="relative group hover:text-teal-800 transition"
            >
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Button */}
          <div>
            <button className="bg-teal-800 hover:bg-teal-900 text-white font-semibold py-2 px-5 rounded-sm transition-colors duration-200 shadow-sm">
              Request a Quote
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            {/* 3 Line Menu */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Logo */}
            <Image
              src="/images/logo.png"
              alt="Creatus Technologies Logo"
              width={180}
              height={100}
              priority
            />
          </div>

          {/* Mobile Menu Animation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen
                ? "max-h-[700px] opacity-100 mt-5"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white border rounded-md shadow-md p-4">
              <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
                <a href="#" className="hover:text-teal-800 transition">
                  Home
                </a>

                {/* Industries */}
                <details className="group">
                  <summary className="flex items-center gap-2 cursor-pointer list-none hover:text-teal-800 transition">
                    Industries

                    <span className="text-xs transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="ml-4 mt-3 flex flex-col gap-2 text-slate-600">
                    <a href="#">Mining</a>
                    <a href="#">Engineering</a>
                    <a href="#">Manufacturing</a>
                    <a href="#">Farming & Agriculture</a>
                    <a href="#">Automotive</a>
                    <a href="#">Food Processing</a>
                  </div>
                </details>

                {/* Services */}
                <details className="group">
                  <summary className="flex items-center gap-2 cursor-pointer list-none hover:text-teal-800 transition">
                    Services

                    <span className="text-xs transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="ml-4 mt-3 flex flex-col gap-2 text-slate-600">
                    <a href="#">Mechanical Design & Drafting</a>
                    <a href="#">3D Scan to CAD</a>
                    <a href="#">3D Scan Inspection</a>
                    <a href="#">Digital Prototyping</a>
                    <a href="#">Reverse Engineering</a>
                  </div>
                </details>

                <a href="#" className="hover:text-teal-800 transition">
                  About Us
                </a>

                <a href="#" className="hover:text-teal-800 transition">
                  Gallery
                </a>

                {/* Mobile Button */}
                <button className="mt-3 bg-teal-800 hover:bg-teal-900 text-white font-semibold py-2 px-5 rounded-sm transition-colors duration-200 shadow-sm text-sm w-fit">
                  Request a Quote
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}