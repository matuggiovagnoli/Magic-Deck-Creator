import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { BrowserRouter  } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Magic-Deck-Creator">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
