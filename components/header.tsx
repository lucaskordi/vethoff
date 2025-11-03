'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useRef } from 'react'

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const previousScrollY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > previousScrollY.current && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    previousScrollY.current = latest
  })

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
          <Link href="/" className="flex items-center">
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

          <button className="bg-secondary text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-primary group flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl">
            <span className="flex items-center leading-none translate-y-[2px] hidden sm:inline">Acesse seu Exame</span>
            <span className="flex items-center leading-none translate-y-[2px] sm:hidden">Exame</span>
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
        </div>
      </div>
    </motion.header>
  )
}

