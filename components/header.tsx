"use client";

import React, { useState } from "react";
import { FaVimeoV, FaYoutube, FaTiktok } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Nombre del portafolio a la izquierda */}
        <div className="text-2xl font-bold">
          <a href="/">FABIAN GARZON</a>
        </div>

        {/* Menú en el centro, oculto en móviles */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <a href="/Prints" className="hover:underline">
              PRINTS FOR SALE
            </a>
          </li>
          <li>
            <a href="/About" className="hover:underline">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="/SMMA" className="hover:underline">
              SMMA
            </a>
          </li>
          <li>
            <a href="/Contact" className="hover:underline">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Íconos sociales a la derecha */}
        <div className="flex space-x-4 text-xl">
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

        {/* Menú hamburguesa para móviles */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none ml-4"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center shadow-lg">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl focus:outline-none"
          >
            <HiX />
          </button>
          <ul className="flex flex-col space-y-6 text-base font-medium text-black">
            <li>
              <a href="/Prints" className="hover:underline">
                PRINTS FOR SALE
              </a>
            </li>
            <li>
              <a href="/About" className="hover:underline">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="/SMMA" className="hover:underline">
                SMMA
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline">
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
