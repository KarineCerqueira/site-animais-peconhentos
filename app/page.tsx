// app/page.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar"; // Componente Navbar

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <Navbar />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Painel Sobre Animais Peçonhentos</h1>
      <Link href="/dashboard">
        <Button variant="default">Ir para o Dashboard</Button> {/* Alterado para 'default' */}
      </Link>
    </div>
  );
}

