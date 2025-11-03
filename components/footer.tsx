import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#inicio" className="mb-6 hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/logoprincipal.svg"
                alt="Vethoff Logo"
                width={200}
                height={50}
                className="h-auto w-32 md:w-40"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-bold mb-4">Navegação</h3>
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-secondary transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Botões */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
            <a href="https://wa.me/5541996852421" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-full px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm">
                Agende Agora
              </Button>
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white w-full px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm">
              Acesse seu Exame
            </Button>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lab_nest/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://wa.me/5541996852421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-xs">
          <p>© {new Date().getFullYear()} VetHoff. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

