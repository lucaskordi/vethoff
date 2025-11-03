import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contato', href: '/contato' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6 hover:opacity-80 transition-opacity duration-300">
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
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Botões */}
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
            <a href="https://wa.me/5541996852421" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-full">
                Agende Agora
              </Button>
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white w-full">
              Acesse seu Exame
            </Button>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lab_nest/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163C8.484 2.163 8.163 2.175 6.808 2.238C5.45 2.3 4.538 2.538 3.763 2.888C2.95 3.263 2.263 3.95 1.888 4.763C1.538 5.538 1.3 6.45 1.238 7.808C1.175 9.163 1.163 9.484 1.163 13C1.163 16.516 1.175 16.838 1.238 18.192C1.3 19.55 1.538 20.463 1.888 21.238C2.263 22.05 2.95 22.738 3.763 23.113C4.538 23.463 5.45 23.7 6.808 23.763C8.163 23.825 8.484 23.838 12 23.838C15.516 23.838 15.838 23.825 17.192 23.763C18.55 23.7 19.463 23.463 20.238 23.113C21.05 22.738 21.738 22.05 22.113 21.238C22.463 20.463 22.7 19.55 22.763 18.192C22.825 16.838 22.838 16.516 22.838 13C22.838 9.484 22.825 9.163 22.763 7.808C22.7 6.45 22.463 5.538 22.113 4.763C21.738 3.95 21.05 3.263 20.238 2.888C19.463 2.538 18.55 2.3 17.192 2.238C15.838 2.175 15.516 2.163 12 2.163ZM12 4.838C15.375 4.838 15.675 4.85 17.025 4.913C18.288 4.975 19.013 5.2 19.388 5.338C19.888 5.525 20.288 5.863 20.663 6.238C21.038 6.613 21.375 7.013 21.563 7.513C21.7 7.888 21.925 8.613 21.988 9.875C22.05 11.225 22.063 11.525 22.063 15C22.063 18.375 22.05 18.675 21.988 20.025C21.925 21.288 21.7 22.013 21.563 22.388C21.375 22.888 21.038 23.288 20.663 23.663C20.288 24.038 19.888 24.375 19.388 24.563C19.013 24.7 18.288 24.925 17.025 24.988C15.675 25.05 15.375 25.063 12 25.063C8.625 25.063 8.325 25.05 6.975 24.988C5.713 24.925 4.988 24.7 4.613 24.563C4.113 24.375 3.713 24.038 3.338 23.663C2.963 23.288 2.625 22.888 2.438 22.388C2.3 22.013 2.075 21.288 2.013 20.025C1.95 18.675 1.938 18.375 1.938 15C1.938 11.625 1.95 11.325 2.013 9.975C2.075 8.713 2.3 7.988 2.438 7.613C2.625 7.113 2.963 6.713 3.338 6.338C3.713 5.963 4.113 5.625 4.613 5.438C4.988 5.3 5.713 5.075 6.975 5.013C8.325 4.95 8.625 4.938 12 4.938V4.838Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 6.375C8.775 6.375 6.375 8.775 6.375 12C6.375 15.225 8.775 17.625 12 17.625C15.225 17.625 17.625 15.225 17.625 12C17.625 8.775 15.225 6.375 12 6.375ZM12 16.125C9.65 16.125 7.875 14.35 7.875 12C7.875 9.65 9.65 7.875 12 7.875C14.35 7.875 16.125 9.65 16.125 12C16.125 14.35 14.35 16.125 12 16.125Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.838 7.588C18.663 7.588 19.338 6.913 19.338 6.088C19.338 5.263 18.663 4.588 17.838 4.588C17.013 4.588 16.338 5.263 16.338 6.088C16.338 6.913 17.013 7.588 17.838 7.588Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/5541996852421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382C17.292 14.206 15.896 13.469 15.62 13.388C15.344 13.307 15.142 13.267 14.94 13.447C14.738 13.627 14.136 14.206 13.915 14.382C13.694 14.558 13.473 14.598 13.193 14.478C12.913 14.358 11.897 14.02 10.68 12.962C9.72 12.123 9.12 11.164 8.9 10.924C8.68 10.684 8.52 10.804 8.38 10.924C8.24 11.044 7.798 11.364 7.578 11.54C7.358 11.716 7.138 11.756 6.858 11.636C6.578 11.516 5.722 11.238 4.866 10.52C4.13 9.921 3.614 9.202 3.394 8.882C3.174 8.562 3.314 8.382 3.454 8.262C3.574 8.162 3.734 7.962 3.914 7.802C4.094 7.642 4.174 7.522 4.334 7.322C4.494 7.122 4.554 6.962 4.674 6.762C4.794 6.562 4.714 6.382 4.614 6.222C4.514 6.062 3.534 3.962 3.214 3.362C2.894 2.762 2.574 2.842 2.414 2.822C2.254 2.802 2.054 2.802 1.854 2.802C1.654 2.802 1.394 2.862 1.174 3.082C0.954 3.302 0.514 3.742 0.514 4.642C0.514 5.542 1.174 7.402 1.314 7.762C1.454 8.122 2.614 10.642 4.874 12.002C5.274 12.242 5.594 12.442 5.934 12.622C6.554 12.962 7.11 13.242 7.77 13.482C8.55 13.762 9.27 13.922 9.91 14.022C10.59 14.122 11.59 14.062 12.35 13.842C13.11 13.622 14.226 13.127 14.586 12.567C14.946 12.007 15.106 11.527 15.186 11.367C15.266 11.207 15.386 11.047 15.546 11.127C15.706 11.207 16.306 11.647 16.506 11.847C16.706 12.047 16.906 12.247 17.046 12.367C17.186 12.487 17.326 12.567 17.466 12.727C17.606 12.887 17.686 13.007 17.566 13.207C17.446 13.407 17.326 13.527 17.472 14.382Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} VetHoff. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

