"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Home, Info, Users, UserPlus, Database, BookOpen, LogIn, Search, LayoutDashboard, Menu, ChevronLeft } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Seção superior com logo e imagens */}
      <div className="w-full bg-gray-200 py-1 px-4 sm:px-8 flex justify-between items-center">
        <Link href="/" passHref>
          <h1 className="text-xl font-semibold cursor-pointer text-gray-800">
            Onde Tem
          </h1>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="https://www.usp.br/" passHref>
            <Image
              src="/images/usp-logo.png"
              alt="Logo USP"
              width={80}
              height={80}
              className="cursor-pointer object-contain self-center"
            />
          </Link>
          <Link href="https://www.icmc.usp.br/" passHref>
            <Image
              src="/images/icmc-logo.png"
              alt="Logo ICMC"
              width={80}
              height={80}
              className="cursor-pointer object-contain self-center translate-y-2"
            />
          </Link>
        </div>
      </div>
      
      {/* Navbar abaixo */}
      <div className="w-full bg-gray-800 text-white py-4 px-4 sm:px-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Menu hamburguer */}
          <button 
            className="sm:hidden text-white" 
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>

          {/* Menu de navegação visível em telas grandes */}
          <div className={`sm:flex flex-grow justify-center gap-4 ${isMenuOpen ? 'block sm:block' : 'hidden sm:block'}`}>
            <Link href="/" passHref>
              <button className="flex items-center space-x-2 hover:text-gray-400" onClick={closeMenu}>
                <Home size={18} /> <span className="text-sm">Home</span>
              </button>
            </Link>
            <Link href="/search" passHref>
              <button className="flex items-center space-x-2 hover:text-gray-400" onClick={closeMenu}>
                <Search size={18} /> <span className="text-sm">Busca</span>
              </button>
            </Link>
            <Link href="/dashboard" passHref>
              <button className="flex items-center space-x-2 hover:text-gray-400" onClick={closeMenu}>
                <LayoutDashboard size={18} /> <span className="text-sm">Dashboard</span>
              </button>
            </Link>
            <Link href="/data" passHref>
              <button className="flex items-center space-x-2 hover:text-gray-400" onClick={closeMenu}>
                <Database size={18} /> <span className="text-sm">Data</span>
              </button>
            </Link>
            <Link href="/about" passHref>
              <button className="flex items-center space-x-2 hover:text-gray-400" onClick={closeMenu}>
                <Info size={18} /> <span className="text-sm">About Us</span>
              </button>
            </Link>
            <Link href="/login" passHref>
              <button className="flex items-center space-x-2 hover:text-gray-400" onClick={closeMenu}>
                <LogIn size={18} /> <span className="text-sm">Login</span>
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Sidebar para telas pequenas (à esquerda) */}
      <aside
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed w-64 bg-gray-800 text-white p-4 h-full top-20 left-0 transition-transform duration-300 z-40 sm:hidden`}
      >
        {/* Botão de voltar */}
        <button
          className="text-white mb-4 flex items-center space-x-2"
          onClick={closeMenu}
        >
          <ChevronLeft size={24} />
          <span>Voltar</span>
        </button>

        {/* Itens do menu lateral */}
        <Link href="/" passHref>
          <button className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 w-full justify-start" onClick={closeMenu}>
            <Home size={18} /> <span className="text-sm">Home</span>
          </button>
        </Link>
        <Link href="/search" passHref>
          <button className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 w-full justify-start" onClick={closeMenu}>
            <Search size={18} /> <span className="text-sm">Busca</span>
          </button>
        </Link>
        <Link href="/dashboard" passHref>
          <button className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 w-full justify-start" onClick={closeMenu}>
            <LayoutDashboard size={18} /> <span className="text-sm">Dashboard</span>
          </button>
        </Link>
        <Link href="/data" passHref>
          <button className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 w-full justify-start" onClick={closeMenu}>
            <Database size={18} /> <span className="text-sm">Data</span>
          </button>
        </Link>
        <Link href="/about" passHref>
          <button className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 w-full justify-start" onClick={closeMenu}>
            <Info size={18} /> <span className="text-sm">About Us</span>
          </button>
        </Link>
        <Link href="/login" passHref>
          <button className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 w-full justify-start" onClick={closeMenu}>
            <LogIn size={18} /> <span className="text-sm">Login</span>
          </button>
        </Link>
      </aside>
    </header>
  );
}
