"use client";

import { useEffect, useState } from "react";

type WeatherType = {
  temperature: number;
  code: number;
};

type WeatherIconProps = {
  code: number;
};

export default function Footer() {
  const [weather, setWeather] = useState<WeatherType | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-33.8688&longitude=151.2093&current=temperature_2m,weather_code&timezone=Australia%2FSydney",
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        setWeather({
          temperature: data.current.temperature_2m,
          code: data.current.weather_code,
        });
      } catch (err) {
        console.log("Weather error:", err);
      }
    }

    fetchWeather();

    // Refresh every 10 minutes
    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  // Weather Icon Component
  const WeatherIcon = ({ code }: WeatherIconProps) => {
    if (code === 0) {
      return (
        <svg
          className="w-8 h-8 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    }

    if (code <= 3) {
      return (
        <svg
          className="w-8 h-8 text-slate-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 18h12a4 4 0 000-8 5 5 0 00-9.9 1A3.5 3.5 0 006 18z" />
        </svg>
      );
    }

    if (code <= 67) {
      return (
        <svg
          className="w-8 h-8 text-blue-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 16a4 4 0 010-8 5 5 0 019.5-1A4.5 4.5 0 1118 16H7z" />
        </svg>
      );
    }

    return (
      <svg
        className="w-8 h-8 text-purple-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 16a4 4 0 010-8 5 5 0 019.5-1A4.5 4.5 0 1118 16H7z" />
      </svg>
    );
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold">Services</h3>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>Mechanical Design & Drafting</li>
            <li>3D Scan to CAD</li>
            <li>3D Scan Inspection</li>
            <li>Digital Prototyping</li>
            <li>Reverse Engineering</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3 className="text-xl font-semibold">Industries</h3>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>Mining</li>
            <li>Engineering</li>
            <li>Manufacturing</li>
            <li>Farming & Agriculture</li>
            <li>Automotive</li>
            <li>Food Processing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>NSW, Australia</li>
            <li>+61 02 4030 2314</li>
            <li>info@creatustech.com.au</li>
          </ul>
        </div>

        {/* BRAND + SOCIAL + WEATHER */}
        <div className="flex flex-col items-center">

          <h1 className="text-3xl font-bold text-center">
            CREATUS TECHNOLOGIES
          </h1>

          <div className="mt-3 text-slate-400">
            ___________
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 pt-5">
            <img
              src="/logos/linkedin.svg"
              alt="LinkedIn"
              className="h-7 opacity-70 hover:opacity-100 transition"
            />

            <img
              src="/logos/facebook.svg"
              alt="Facebook"
              className="h-8 opacity-70 hover:opacity-100 transition"
            />
          </div>

          {/* WEATHER CARD */}
          <div className="mt-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl px-5 py-4 w-52 text-center">

              <div className="flex items-center justify-center gap-2">

                {weather && <WeatherIcon code={weather.code} />}

                <div className="text-white font-semibold text-lg">
                  {weather?.temperature != null
                    ? `${Math.round(weather.temperature)}°C`
                    : "Loading..."}
                </div>

              </div>

              <p className="text-xs text-slate-300 mt-1">
                Live Sydney Weather • Updated
              </p>

              <div className="mt-3 h-[2px] w-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 opacity-60 animate-pulse rounded-full"></div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 text-sm">
        © 2026 Creatus Technologies Designed by Alphy Bennychen. All rights reserved.
      </div>
    </footer>
  );
}