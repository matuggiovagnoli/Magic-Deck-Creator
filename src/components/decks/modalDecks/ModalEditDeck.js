import React, { useState } from 'react';
import { useDeckStore } from '../../../store/useDeckStore';
import Modal from '../../ui/modal/Modal';
import Button from '../../ui/button/Button';
const ModalEditDeck = ({ isOpen, closeModal, deck }) => {
    const [newTitle, setNewTitle] = useState("");
    const { updateDeckName } = useDeckStore();
    const [error, setErrors] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTitle.trim().length <= 3 || newTitle.trim().length >= 15) {
            setErrors(true);
            setNewTitle("");
        }
        else {
            const title = newTitle.trim();
            setErrors(false);
            updateDeckName(deck.id, title);
            closeModal("EditDeck");
        }
    };
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement(Modal, { title: "Editar Mazo", onClose: () => closeModal('EditDeck') },
        React.createElement("form", { className: 'flex flex-col justify-center items-center gap-4 ', onSubmit: handleSubmit },
            React.createElement("div", null,
                React.createElement("label", null, "Nuevo Titulo: "),
                React.createElement("input", { value: newTitle, onChange: (e) => setNewTitle(e.target.value), className: 'focus:outline-none border-b' })),
            error && React.createElement("p", { className: 'text-red-600' }, "El nuevo titulo no puedo estar vacio y debe contener al menos 4 caracteres y menos de 15"),
            React.createElement(Button, { content: "Confirmar", type: "Submit", className: "border border-green-500 bg-green-500 font-semibold" }))))));
};
export default ModalEditDeck;
