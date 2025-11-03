'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const previousScrollY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > previousScrollY.current && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    previousScrollY.current = latest
  })

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="#inicio" className="flex items-center">
            <Image
              src="/logoalt.svg"
              alt="Vethoff Logo"
              width={200}
              height={50}
              className="h-auto w-32 md:w-48"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-secondary text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-primary group hidden sm:flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl">
              <span className="flex items-center leading-none translate-y-[2px] hidden sm:inline">Acesse seu Exame</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-0"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-60 relative"
              aria-label="Menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-primary block"
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-primary block"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-primary block"
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full bg-white z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="#inicio" onClick={closeMenu} className="flex items-center">
                    <Image
                      src="/logoalt.svg"
                      alt="Vethoff Logo"
                      width={200}
                      height={50}
                      className="h-auto w-32"
                    />
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="w-10 h-10 flex items-center justify-center"
                    aria-label="Fechar menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                
                <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-4 py-12">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: menuItems.length * 0.1, duration: 0.3 }}
                    className="mt-8"
                  >
                    <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-primary shadow-lg hover:shadow-xl text-base">
                      Acesse seu Exame
                    </button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

