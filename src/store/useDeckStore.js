import { create } from 'zustand';
const loadDecks = () => {
    const savedDecks = localStorage.getItem('decks');
    return savedDecks ? JSON.parse(savedDecks) : [];
};
const saveDecks = (decks) => {
    localStorage.setItem('decks', JSON.stringify(decks));
};
export const useDeckStore = create((set) => ({
    decks: loadDecks(),
    addDeck: (name) => set((state) => {
        const newDecks = [
            ...state.decks,
            { id: `${Date.now()}`, name, cards: [] },
        ];
        saveDecks(newDecks);
        return { decks: newDecks };
    }),
    removeDeck: (id) => set((state) => {
        const newDecks = state.decks.filter((deck) => deck.id !== id);
        saveDecks(newDecks);
        return { decks: newDecks };
    }),
    addCardToDeck: (deckId, card) => set((state) => {
        const newDecks = state.decks.map((deck) => deck.id === deckId
            ? Object.assign(Object.assign({}, deck), { cards: [...deck.cards, { id: card.id, imageUrl: card.imageUrl }] }) : deck);
        saveDecks(newDecks);
        return { decks: newDecks };
    }),
    removeCardFromDeck: (deckId, cardId) => set((state) => {
        const newDecks = state.decks.map((deck) => {
            if (deck.id === deckId) {
                const cardIndex = deck.cards.findIndex((card) => card.id === cardId);
                if (cardIndex !== -1) {
                    const updatedCards = [
                        ...deck.cards.slice(0, cardIndex),
                        ...deck.cards.slice(cardIndex + 1),
                    ];
                    return Object.assign(Object.assign({}, deck), { cards: updatedCards });
                }
            }
            return deck;
        });
        saveDecks(newDecks);
        return { decks: newDecks };
    }),
    setDecks: (decks) => {
        saveDecks(decks);
        return { decks };
    },
    updateDeckName: (id, newName) => {
        set((state) => ({
            decks: state.decks.map((deck) => deck.id === id ? Object.assign(Object.assign({}, deck), { name: newName }) : deck)
        }));
    }
}));
