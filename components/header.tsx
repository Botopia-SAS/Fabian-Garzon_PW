"use client";

import React, { useState } from "react";
import { FaVimeoV, FaYoutube, FaTiktok } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black dark:bg-white dark:text-black backdrop-blur-md z-50 shadow">
      <nav className="container mx-auto flex justify-between items-center py-2 bg-white">
        {/* Nombre del portafolio */}
        <Link
          href="/"
          className="mt-2 text-4xl sm:text-base md:text-6xl lg:text-6xl xl:text-6xl tracking-wide"
        >
          <div
            style={{ fontFamily: "var(--font-inconsolata)", fontWeight: 200 }}
          >
            FABIÁN GARZÓN
          </div>
        </Link>

        {/* Menú en el centro (visible solo en desktop) */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <a
              href="/Prints"
              style={{ fontFamily: "var(--font-inconsolata)", fontWeight: 200 }}
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide"
            >
              PRINTS FOR SALE
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-inconsolata)", fontWeight: 200 }}
              href="/About"
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide"
            >
              ABOUT ME
            </a>
          </li>
          {/* <li>
            <a
              href="/SMMA"
              style={{ fontFamily: "var(--font-inconsolata)", fontWeight: 200 }}
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide"
            >
              SMMA
            </a>
          </li> */}
          <li>
            <a
              href="/Contact"
              style={{ fontFamily: "var(--font-inconsolata)", fontWeight: 200 }}
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Íconos sociales a la derecha */}
        <div className="flex space-x-4 text-xl ml-2 ">
          <a
            href="https://vimeo.com/fabiangarzon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaVimeoV />
          </a>
          <a
            href="https://www.youtube.com/watch?v=kq2gnwQ-Zxc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@fabiangarzonart?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Menú hamburguesa en móviles */}
        <div
          style={{ fontFamily: "var(--font-inconsolata)", fontWeight: 200 }}
          className="md:hidden flex items-center ml-6"
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full z-50">
          <ul className="flex flex-col space-y-2 p-4 text-sm font-medium">
            <li>
              <a
                href="/Prints"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  fontWeight: 200,
                }}
                className="hover:underline text-xl"
              >
                PRINTS FOR SALE
              </a>
            </li>
            <li>
              <a
                href="/About"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  fontWeight: 200,
                }}
                className="hover:underline text-xl"
              >
                ABOUT ME
              </a>
            </li>
            {/*<li>
              <a
                href="/SMMA"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  fontWeight: 200,
                }}
                className="hover:underline text-xl"
              >
                SMMA
              </a>
            </li>*/}
            <li>
              <a
                href="/Contact"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  fontWeight: 200,
                }}
                className="hover:underline text-xl"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
