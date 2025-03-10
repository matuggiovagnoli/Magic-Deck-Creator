import React from 'react'
import ButtonLink from '../components/ui/button/ButtonLink'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full text-center p-6">
      <section className="max-w-3xl flex flex-col gap-10">
        <p className="text-4xl lg:text-6xl">
          Bienvenido a <strong data-testid="magic-deck-creator">Magic Deck Creator</strong>, tu herramienta definitiva para construir estrategias poderosas en el universo de Magic.
        </p>
        <p className="mt-2">
          Explora una vasta colección de cartas, selecciona tus favoritas y crea mazos únicos adaptados a tu estilo de juego. 
        </p>
        <p className="mt-2 font-semibold">
          Recuerda, la clave del éxito no es solo la suerte, sino una estrategia bien pensada. ¡Comienza a construir tu mazo y prepárate para la batalla!
        </p>
      </section>

      <nav className="mt-6">
        <ButtonLink 
          path="Magic-Deck-Creator/Decks" 
          className="bg-black text-xl text-white animate-pulse"
          content="Comienza la Aventura"
        />
      </nav>
    </main>
  )
}

export default Home
