import { Card } from "./CardTypes";
import { Deck } from "./DeckTypes";

export type ModalState = {
	[key: string]: boolean;
}

export interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export interface ModalBasicProps {
	isOpen: boolean;
	closeModal: (id:string) => void;
}

export interface ModalPropsCardDetail extends ModalBasicProps {
	card: Card;
}

export interface ModalPropsAddCard extends ModalBasicProps {
	decks: Deck[];
	handleDeckSelection: (id:string) => void;
}

export interface ModalPropsEditDeck extends ModalBasicProps {
	deck: Deck;
}

export interface ModalPropsAddDeck extends ModalBasicProps {
	addDeck: (name:string) => void;
}

export interface ModalPropsDeleteDeck extends ModalBasicProps {
	handleRemoveDeck: (id:string) => void;
	id: string
}