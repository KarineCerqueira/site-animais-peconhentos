// components/ui/dashboard-layout.tsx

"use client"

import { ReactNode, useState } from "react";
import { LayoutDashboard, ChevronLeft } from "lucide-react"; // Ícones
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeMenu = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 mt-20">
        {/* Botão de menu (somente visível em telas pequenas) */}
        <button
          className="sm:hidden text-white fixed top-21 right-4 z-50"
          onClick={toggleSidebar}
        >
          <LayoutDashboard size={24} />
        </button>

        {/* Sidebar para telas pequenas (à direita) */}
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } fixed w-64 bg-gray-800 text-white p-4 h-full top-30 right-0 transition-transform duration-300 z-40 sm:hidden`}
        >
          {/* Botão de voltar */}
          <button
            className="text-white mb-4 flex items-center space-x-2"
            onClick={closeMenu}
          >
            <ChevronLeft size={24} />
            <span>Voltar</span>
          </button>

          {/* Título e conteúdo da sidebar */}
          <h2 className="text-lg font-semibold flex items-center gap-2 mt-4">
            <LayoutDashboard size={24} /> Dashboard
          </h2>

          {/* Itens do menu */}
          <nav className="mt-12 space-y-3">
            <Button variant="ghost" className="w-full text-left">
              Home
            </Button>
            <Button variant="ghost" className="w-full text-left">
              Relatórios
            </Button>
            <Button variant="ghost" className="w-full text-left">
              Configurações
            </Button>
          </nav>
        </aside>

        {/* Sidebar para telas grandes (à esquerda, sempre visível) */}
        <aside className="hidden sm:block sm:w-64 sm:bg-gray-800 sm:text-white sm:p-4 sm:h-full sm:top-16 sm:left-0 sm:fixed z-40">
          <h2 className="text-lg font-semibold flex items-center gap-2 mt-4">
            <LayoutDashboard size={24} /> Dashboard
          </h2>

          {/* Itens do menu */}
          <nav className="mt-12 space-y-3">
            <Button variant="ghost" className="w-full text-left">
              Home
            </Button>
            <Button variant="ghost" className="w-full text-left">
              Relatórios
            </Button>
            <Button variant="ghost" className="w-full text-left">
              Configurações
            </Button>
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          } sm:ml-64 mt-16`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
