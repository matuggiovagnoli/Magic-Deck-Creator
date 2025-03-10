import React, { useState, useEffect } from 'react';
import { useDeckStore } from '../store/useDeckStore';
import useModal from '../hooks/useModal';
import DeckSelection from '../components/decks/DeckSelection';
import DeckCardList from '../components/decks/DeckCardList';
import Button from '../components/ui/button/Button';
import ModalAddDeck from '../components/decks/modalDecks/ModalAddDeck';

const MyDecks = () => {
  const { decks, addDeck, removeDeck, removeCardFromDeck } = useDeckStore();
  const [selectedDeck, setSelectedDeck] = useState<string>(decks.length > 0 ? decks[0].id : '')
  const { isOpen, openModal, closeModal } = useModal();
  
  useEffect(() => {
    if (decks.length > 0 && !decks.find(deck => deck.id === selectedDeck)) {
      setSelectedDeck(decks[0].id);  // Si el mazo seleccionado ya no está, seleccionamos el primero
    }
  }, [decks, selectedDeck]);
  
  const handleRemoveCard = (deckId: string, cardId: string) => {
    removeCardFromDeck(deckId, cardId);
  };

  const handleRemoveDeck = (deckId: string) => {
    removeDeck(deckId);
    
    // Si el mazo eliminado es el que está seleccionado, seleccionamos el siguiente mazo disponible
    if (deckId === selectedDeck) {
      const remainingDecks = decks.filter(deck => deck.id !== deckId);
      if (remainingDecks.length > 0) {
        setSelectedDeck(remainingDecks[0].id);  // Seleccionar el primer mazo disponible
      } else {
        setSelectedDeck("");  // Si no quedan mazos, dejamos seleccionado un valor vacío
      }
    }
  };

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-center text-6xl font-bold mb-4">Mis Mazos</h2>
      <p className='px-10'>Bienvenido a tu espacio de mazos. Aquí podrás crear un mazo, agregar cartas de tu colección y eliminarlas cuando lo desees. Si no tienes mazos, puedes crear uno fácilmente y empezar a agregar cartas. Si ya tienes mazos, simplemente selecciona el mazo al que quieras agregar una carta o eliminarla. ¡Haz que tu colección crezca y evolucione!</p>
      <div>
        {decks.length === 0 ? (
          <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-3xl'>No tienes Mazos creados.</p>
            <Button 
            content="Crear Mazo"
            onClick={() => openModal('addDeck')}
            className='w-fit self-center bg-green-400 mt-5'
          />
          </div>
        ) : (
          <>
          <div className='flex flex-col'>
            <DeckSelection 
              decks={decks}
              selectedDeck={selectedDeck}
              setSelectedDeck={setSelectedDeck}
            />
            <Button 
            content="Crear Mazo"
            onClick={() => openModal('addDeck')}
            className='w-fit self-center bg-green-400 mt-5'
          />
          </div>
          
          {selectedDeck && 
            (decks.find(deck => selectedDeck === deck.id) ? (
              <DeckCardList 
                deck={decks.find(deck => selectedDeck === deck.id)!}  // Usamos el operador de afirmación no nula (!)
                handleRemoveCard={handleRemoveCard}
                handleRemoveDeck={handleRemoveDeck}
              />
            ) : null)
          }
          </>
        )}
      </div>
      <ModalAddDeck 
        isOpen={isOpen('addDeck')}
        closeModal={closeModal}
        addDeck={addDeck}
      />
    </div>
  );
};

export default MyDecks;
