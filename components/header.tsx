import React from 'react';
import { FaVimeoV, FaYoutube, FaTiktok } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Nombre del portafolio */}
                <div className="text-2xl font-bold">
                    <a href="/">FABIAN GARZON</a>
                </div>

                {/* Menú de navegación */}
                <ul className="flex space-x-6 text-sm font-medium relative">
                    {/* PORTFOLIO */}
                    <li className="relative group">
                        <a href="#portfolio" className="hover:underline">
                            + PORTFOLIO
                        </a>
                        {/* Dropdown */}
                        <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-black text-white p-4 shadow-lg pointer-events-auto">
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#book1">BOOK I</a>
                            </li>
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#book2">BOOK II</a>
                            </li>
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#portrait">PORTRAIT</a>
                            </li>
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#advertising">ADVERTISING</a>
                            </li>
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#celebrity">CELEBRITY</a>
                            </li>
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#prints">PRINTS FOR SALE</a>
                            </li>
                        </ul>
                    </li>

                    {/* CREATIVE */}
                    <li className="relative group">
                        <a href="#creative" className="hover:underline">
                            + CREATIVE
                        </a>
                        {/* Dropdown */}
                        <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-black text-white p-4 shadow-lg pointer-events-auto">
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#design">DESIGN</a>
                            </li>
                            <li className="py-1 px-4 hover:bg-gray-700">
                                <a href="#photography">PHOTOGRAPHY</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#about" className="hover:underline">
                            ABOUT ME
                        </a>
                    </li>
                    <li>
                        <a href="#smma" className="hover:underline">
                            SMMA
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">
                            CONTACT
                        </a>
                    </li>
                </ul>

                {/* Íconos sociales */}
                <div className="flex space-x-4 text-xl">
                    <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <FaVimeoV />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <FaYoutube />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <FaTiktok />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
