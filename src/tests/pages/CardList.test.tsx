import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from '../../pages/CardList';
import useMagicCards from '../../hooks/useMagicCards';
import { vi } from 'vitest';

// Mockear el hook useMagicCards
vi.mock('../../hooks/useMagicCards', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe('CardList', () => {
  it('should render correctly with mock data', () => {
    // Mockeamos el valor de retorno de useMagicCards
    (useMagicCards as jest.Mock).mockReturnValue({
      cardList: [{ id: '1', name: 'Card 1' }, { id: '2', name: 'Card 2' }],
      getCards: vi.fn(),
      loading: false,
      setPageSize: vi.fn(),
      pageSize: 10,
      error: null,
    });

    render(<CardList />);

    // Verificamos que las cartas se rendericen
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
  });

  it('should show error message when error is present', () => {
    // Mock de useMagicCards cuando hay un error
    (useMagicCards as jest.Mock).mockReturnValue({
      cardList: [],
      getCards: vi.fn(),
      loading: false,
      setPageSize: vi.fn(),
      pageSize: 10,
      error: 'Error loading cards',
    });

    render(<CardList />);

    // Verificamos que el mensaje de error se muestra
    expect(screen.getByText('Hubo un error: Error loading cards')).toBeInTheDocument();
  });
});
