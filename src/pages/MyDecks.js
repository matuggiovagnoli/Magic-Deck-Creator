import React, { useState, useEffect } from 'react';
import { useDeckStore } from '../store/useDeckStore';
import useModal from '../hooks/useModal';
import DeckSelection from '../components/decks/DeckSelection';
import DeckCardList from '../components/decks/DeckCardList';
import Button from '../components/ui/button/Button';
import ModalAddDeck from '../components/decks/modalDecks/ModalAddDeck';
const MyDecks = () => {
    const { decks, addDeck, removeDeck, removeCardFromDeck } = useDeckStore();
    const [selectedDeck, setSelectedDeck] = useState(decks.length > 0 ? decks[0].id : '');
    const { isOpen, openModal, closeModal } = useModal();
    useEffect(() => {
        if (decks.length > 0 && !decks.find(deck => deck.id === selectedDeck)) {
            setSelectedDeck(decks[0].id); // Si el mazo seleccionado ya no está, seleccionamos el primero
        }
    }, [decks, selectedDeck]);
    const handleRemoveCard = (deckId, cardId) => {
        removeCardFromDeck(deckId, cardId);
    };
    const handleRemoveDeck = (deckId) => {
        removeDeck(deckId);
        if (deckId === selectedDeck) {
            const remainingDecks = decks.filter(deck => deck.id !== deckId);
            if (remainingDecks.length > 0) {
                setSelectedDeck(remainingDecks[0].id);
            }
            else {
                setSelectedDeck("");
            }
        }
    };
    return (React.createElement("div", { className: "w-full flex flex-col" },
        React.createElement("h2", { className: "text-center text-6xl font-bold mb-4" }, "Mis Mazos"),
        React.createElement("p", { className: 'px-10' }, "Bienvenido a tu espacio de mazos. Aqu\u00ED podr\u00E1s crear un mazo, agregar cartas de tu colecci\u00F3n y eliminarlas cuando lo desees. Si no tienes mazos, puedes crear uno f\u00E1cilmente y empezar a agregar cartas. Si ya tienes mazos, simplemente selecciona el mazo al que quieras agregar una carta o eliminarla. \u00A1Haz que tu colecci\u00F3n crezca y evolucione!"),
        React.createElement("div", null, decks.length === 0 ? (React.createElement("div", { className: 'flex flex-col justify-center items-center gap-5' },
            React.createElement("p", { className: 'text-3xl' }, "No tienes Mazos creados."),
            React.createElement(Button, { content: "Crear Mazo", onClick: () => openModal('addDeck'), className: 'w-fit self-center bg-green-400 mt-5' }))) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'flex flex-col' },
                React.createElement(DeckSelection, { decks: decks, selectedDeck: selectedDeck, setSelectedDeck: setSelectedDeck }),
                React.createElement(Button, { content: "Crear Mazo", onClick: () => openModal('addDeck'), className: 'w-fit self-center bg-green-400 mt-5' })),
            selectedDeck &&
                (decks.find(deck => selectedDeck === deck.id) ? (React.createElement(DeckCardList, { deck: decks.find(deck => selectedDeck === deck.id), handleRemoveCard: handleRemoveCard, handleRemoveDeck: handleRemoveDeck })) : null)))),
        React.createElement(ModalAddDeck, { isOpen: isOpen('addDeck'), closeModal: closeModal, addDeck: addDeck })));
};
export default MyDecks;
