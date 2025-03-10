import React from 'react'
import { DeckCardListProps } from '../../types/DeckTypes'; 
import useModal from '../../hooks/useModal';
import Button from '../ui/button/Button';
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import ButtonLink from '../ui/button/ButtonLink';
import ModalEditDeck from './modalDecks/ModalEditDeck';
import ModalDeleteDeck from './modalDecks/ModalDeleteDeck';

const DeckCardList: React.FC<DeckCardListProps> = ({ deck, handleRemoveCard, handleRemoveDeck }) => {
  const { isOpen, openModal, closeModal } = useModal()
  
  return (
    <div key={deck.id} className="flex flex-col w-full p-4 mb-4 rounded">
    <div className="flex items-center w-full border-8 border-amber-800 border-double bg-black/50 p-2 gap-3 mb-5">
        <h3 className="text-3xl text-white font-bold">{deck.name}</h3>
        <Button 
          className='text-white border rounded-full hover:bg-white hover:text-black'
          content={<MdEdit />}
          onClick={() => openModal('EditDeck')}
        />
          
        <Button
            onClick={() => openModal('DeleteDeck')}
            className="text-white border rounded-full hover:bg-white hover:text-black"
            content={<IoMdTrash />}
        />
    </div>
    <div className="flex flex-wrap justify-start gap-4">
      {deck.cards.length === 0 ? (
        <div className='flex flex-col w-full justify-center items-center gap-5'>
          <p className='text-xl font-semibold'>No hay cartas en este deck.</p>
        </div>
      ) : (
          <div className="flex flex-wrap gap-8 justify-start">
          {deck.cards.map((card) => (
            <div key={card.id} className="flex flex-col hover:outline-2 hover:outline-offset-4 outline-blue-400 rounded-lg items-center w-56">
              <img
                src={card.imageUrl}
                alt={`Carta con id: ${card.id}`}
                className="w-56 object-contain mb-2"
              />
              <Button
                onClick={() => handleRemoveCard(deck.id, card.id)}
                className="w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white mt-2"
                content="Eliminar carta"
              />
            </div>
          ))}
        </div>
      )}
    </div>
    <ButtonLink 
            path='/MagicCards'
            content="Cartas Disponibles"
            className="w-fit self-center bg-black text-xl text-white animate-pulse mt-10"
    />
    <ModalEditDeck 
      isOpen={isOpen('EditDeck')}
      closeModal={closeModal}
      deck={deck}
    />
    <ModalDeleteDeck 
      isOpen={isOpen('DeleteDeck')}
      closeModal={closeModal}
      handleRemoveDeck={handleRemoveDeck}
      id={deck.id}
    />
  </div>
  )
}

export default DeckCardList