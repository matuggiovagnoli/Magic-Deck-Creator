import React, { useState } from 'react';
import Modal from '../../ui/modal/Modal';
const ModalAddDeck = ({ isOpen, closeModal, addDeck }) => {
    const [deckName, setDeckName] = useState('');
    const [error, setError] = useState(false);
    const handleAddDeck = () => {
        if (deckName.length > 3 && deckName.trim() !== "") {
            setError(false);
            if (deckName.trim()) {
                addDeck(deckName);
                setDeckName('');
                closeModal('addDeck');
            }
        }
        else {
            setError(true);
        }
    };
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement(Modal, { title: 'CREA UN MAZO', onClose: () => closeModal('addDeck') },
        React.createElement("div", { className: "flex flex-row justify-center gap-3 mb-6" },
            React.createElement("div", null,
                React.createElement("input", { type: "text", value: deckName, onChange: (e) => setDeckName(e.target.value), onKeyDown: (e) => {
                        if (e.key === 'Enter') {
                            handleAddDeck();
                        }
                    }, placeholder: "Nuevo nombre de deck", className: "px-4 py-2 border border-gray-300 rounded" }),
                error && React.createElement("p", { className: 'text-red-600' }, "Debe contener por los menos 4 caracteres.")),
            React.createElement("button", { onClick: handleAddDeck, className: "ml-2 px-4 py-2 bg-blue-600 text-white rounded" }, "Crear Deck"))))));
};
export default ModalAddDeck;
