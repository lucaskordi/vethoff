import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-primary group flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl ${className}`}
    >
      <span className="flex items-center leading-none translate-y-[2px]">{children}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-0"
      >
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

