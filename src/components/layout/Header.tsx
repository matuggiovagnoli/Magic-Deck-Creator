import React from 'react'
import { Link, useLocation } from 'react-router'

const Header = () => {
  const location = useLocation()

  const links = [
    { to: 'Magic-Deck-Creator/', label: 'Inicio' },
    { to: 'Magic-Deck-Creator/Decks', label: 'Mazos' },
    { to: 'Magic-Deck-Creator/MagicCards', label: 'Cartas' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="w-full p-4 bg-gradient-to-b from-black/60 to-transparent text-white z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Magic Deck Creator</h1>
        <nav>
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-lg px-4 py-2 rounded-lg transition duration-300 ${
                    isActive(link.to) 
                      ? 'text-white font-bold underline' 
                      : 'text-gray-300 hover:text-white hover:underline'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
