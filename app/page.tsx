import Image from "next/image"
import { Mail, Home } from "lucide-react"

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#362a25] text-white">
      <header className="container mx-auto px-4 pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=80&width=120"
              alt="Hacienda Coloma Logo"
              width={120}
              height={80}
              className="h-auto"
              priority
            />
            <div className="border-l border-white/40 h-12 mx-2"></div>
            <div className="text-xl font-light tracking-wide">
              FUSAGASUGÁ,
              <br />
              COLOMBIA
            </div>
          </div>
          <div className="text-center md:text-right max-w-xs">
            <p className="text-xl md:text-2xl font-serif italic">
              Vive la verdadera experiencia del café a solo 70 kms de Bogotá.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl mb-2">Nuestro sitio web se encuentra temporalmente en mantenimiento.</p>
          <p className="text-xl md:text-2xl">Our website is temporarily under maintenance.</p>
        </div>
      </main>

      <footer className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#362a25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-lg md:text-xl uppercase">RESERVA YA/RESERVATIONS</p>
              <p className="text-lg md:text-xl">+57 318 802 0841</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#362a25]" />
            </div>
            <p className="text-lg md:text-xl">info@haciendacoloma.com.co</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
              <Home className="w-6 h-6 text-[#362a25]" />
            </div>
            <p className="text-lg md:text-xl">Av. Las Palmas, Tibacuy, La Serena, Fusagasugá</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

