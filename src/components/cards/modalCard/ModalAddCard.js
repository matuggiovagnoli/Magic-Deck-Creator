import React from 'react';
import { Link } from 'react-router';
import Modal from '../../ui/modal/Modal';
import Button from '../../ui/button/Button';
const ModalAddCard = ({ isOpen, closeModal, decks, handleDeckSelection }) => {
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement(Modal, { title: "Selecciona un mazo", onClose: () => closeModal('deckSelection') },
        React.createElement("div", { className: "flex flex-col space-y-4" }, (decks === null || decks === void 0 ? void 0 : decks.length) === 0 ? (React.createElement("p", { className: "text-center" },
            "No tienes mazos creados.",
            ' ',
            React.createElement(Link, { to: "/decks", className: "text-blue-600 hover:underline" }, "Crea uno aqu\u00ED"))) : (decks === null || decks === void 0 ? void 0 : decks.map((deck) => (React.createElement(Button, { content: deck.name, onClick: () => handleDeckSelection(deck.id), className: 'text-center border hover:bg-black hover:text-white hover:font-bold' })))))))));
};
export default ModalAddCard;
