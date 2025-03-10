import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MyDecks from '../../pages/MyDecks';

describe('My Desk page', () => {

  test('renders correctly with no Decks', () => {
    render(
      <MemoryRouter>
        <MyDecks />
      </MemoryRouter>
    );

    expect(screen.getByText('Mis Mazos'));
    expect(screen.getByText('No tienes Mazos creados.'));
    expect(screen.getByText('Crear Mazo'));
  });

});
