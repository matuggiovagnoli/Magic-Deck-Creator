import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MyDecks from '../../pages/MyDecks';
import { useDeckStore } from '../../store/useDeckStore';
vi.mock('../../store/useDeckStore', () => ({
    useDeckStore: vi.fn(),
}));
describe('My Desk page', () => {
    test('renders correctly with no decks', () => {
        // Mock del store sin decks
        vi.mocked(useDeckStore).mockReturnValue({
            decks: [],
            addDeck: vi.fn(),
            removeDeck: vi.fn(),
            removeCardFromDeck: vi.fn(),
        });
        render(React.createElement(MemoryRouter, null,
            React.createElement(MyDecks, null)));
        expect(screen.getByText('Mis Mazos')).toBeInTheDocument();
        expect(screen.getByText('No tienes Mazos creados.')).toBeInTheDocument();
        expect(screen.getByText('Crear Mazo')).toBeInTheDocument();
    });
    test('renders correctly with decks', () => {
        const mockDecks = [
            { id: '1', name: 'Deck 1', cards: [] },
        ];
        vi.mocked(useDeckStore).mockReturnValue({
            decks: mockDecks,
            addDeck: vi.fn(),
            removeDeck: vi.fn(),
            removeCardFromDeck: vi.fn(),
        });
        render(React.createElement(MemoryRouter, null,
            React.createElement(MyDecks, null)));
        expect(screen.getByText('Mis Mazos')).toBeInTheDocument();
        const deckTitle = screen.getByText('Deck 1', { selector: 'h3' });
        expect(deckTitle).toBeInTheDocument();
        expect(screen.getByText('Crear Mazo')).toBeInTheDocument();
    });
});
