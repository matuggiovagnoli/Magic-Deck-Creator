import React from 'react'
import './App.css'
import { Router, Routes, Route } from 'react-router'
import CardList from './pages/CardList'
import Home from './pages/Home'
import bgImage from './assets/background.jpg'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MyDecks from './pages/MyDecks'


function App() {

  return (
      <div
        className="w-screen h-screen flex flex-col bg-cover bg-center bg-fixed overflow-y-auto"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Header />
        <main className='flex-grow mt-[60px] mb-[50px]'>
          <Routes>
            <Route path='Magic-Deck-Creator/' element={<Home />}/>
            <Route path='Magic-Deck-Creator/MagicCards' element={<CardList/>}/>
            <Route path='Magic-Deck-Creator/Decks' element={<MyDecks/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
