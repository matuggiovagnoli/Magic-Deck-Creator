import React from 'react';
import { useDeckStore } from '../../store/useDeckStore';
import { Card } from '../../types/CardTypes'; 
import useModal from '../../hooks/useModal'; 
import ModalCardDetail from './modalCard/ModalCardDetail';
import ModalAddCard from './modalCard/ModalAddCard';

interface CardItemProps {
  card: Card;
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  const { decks, addCardToDeck } = useDeckStore();
  const { isOpen, openModal, closeModal } = useModal();

  const handleDeckSelection = (deckId: string) => {
    addCardToDeck(deckId, card);
    closeModal('deckSelection');
  };

  return (
    <div className="flex flex-col items-center w-60 h-96 bg-transparent p-3 shadow-xl shadow-black/20 rounded-xl">
      {card.imageUrl ? (
        <img
          src={card.imageUrl}
          alt={card.name}
          className="w-full h-72 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
          onClick={() => openModal('cardDetail')}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-72 text-gray-500">
          <p>Imagen no disponible</p>
        </div>
      )}

      <div className="w-full text-center mt-2">
        <h4 className="text-sm font-bold">{card.name}</h4>
        <p className="text-xs text-gray-600">{card.type}</p>
      </div>

      <button
        onClick={() => openModal('deckSelection')}
        className="mt-2 px-4 py-2 bg-black/70 border border-white text-white font-medium hover:bg-black hover:cursor-pointer rounded-lg w-full"
      >
        Agregar Carta
      </button>

      <ModalAddCard 
        isOpen={isOpen('deckSelection')}
        closeModal={closeModal}
        decks={decks}
        handleDeckSelection={handleDeckSelection}
      />
      
      <ModalCardDetail 
        isOpen={isOpen('cardDetail')}
        closeModal={closeModal}
        card={card}
      />
      
    </div>
  );
};

export default CardItem;
