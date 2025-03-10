import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Home from '../../pages/Home';

describe('Home Page', () => {
  
    test('renders correctly and contains the button', () => {
      render( 
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
      
        expect(screen.getByTestId('magic-deck-creator')).toBeInTheDocument();
        expect(screen.getByText(/Comienza la Aventura/i)).toBeInTheDocument();
    });

    test('button redirection to Decks page when is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Decks" element={<div>Decks Page</div>} />
                </Routes>
            </MemoryRouter>
        )

        const button = screen.getByText(/Comienza la Aventura/i);

        // Simula un clic en el botón
        fireEvent.click(button);

        // Verifica si la URL ha cambiado a "/Decks"
        expect(screen.getByText(/Decks Page/i)).toBeInTheDocument();
    })

  });