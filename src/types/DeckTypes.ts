import { Card } from "./CardTypes";

export interface Deck {
    id: string;
    name: string;
    cards: { id: string; imageUrl: string | undefined}[];
  }
  
  export interface DeckState {
    decks: Deck[];
    addDeck: (name: string) => void;
    removeDeck: (id: string) => void;
    addCardToDeck: (deckId: string, card: Card) => void;
    removeCardFromDeck: (deckId: string, cardId: string) => void;
    setDecks: (decks: Deck[]) => void;
    updateDeckName: (id:string, newName:string) => void;
  }
  
  export interface DeckSelectionProps {
      decks: Deck[];
      selectedDeck: string;
      setSelectedDeck: (id: string) => void;
  }
  
  export interface DeckCardListProps {
      deck: Deck;
      handleRemoveCard: (deckId: string, cardId: string) => void;
      handleRemoveDeck: (deckId: string) => void;
  }
  