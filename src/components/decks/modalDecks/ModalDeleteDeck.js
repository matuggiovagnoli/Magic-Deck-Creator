import React from 'react';
import Modal from '../../ui/modal/Modal';
import Button from '../../ui/button/Button';
const ModalDeleteDeck = ({ isOpen, closeModal, handleRemoveDeck, id }) => {
    const handleDelete = (id) => {
        handleRemoveDeck(id);
        closeModal('DeleteDeck');
    };
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement(Modal, { title: 'Eliminar Mazo', onClose: () => closeModal('DeleteDeck') },
        React.createElement("div", { className: 'flex flex-col gap-5' },
            React.createElement("div", { className: 'flex flex-col justify-center items-center' },
                React.createElement("p", null, "Eliminar un mazo tambien borra toda su colecci\u00F3n de cartas"),
                React.createElement("p", { className: 'font-medium' }, "\u00BF Estas seguro de eliminar el mazo ?")),
            React.createElement("div", { className: 'flex flex-row justify-evenly items-center gap-4' },
                React.createElement(Button, { content: "Cancelar", onClick: () => closeModal('DeleteDeck'), className: 'border hover:bg-black hover:text-white' }),
                React.createElement(Button, { content: "Eliminar", onClick: () => handleDelete(id), className: 'border hover:bg-black hover:text-white' })))))));
};
export default ModalDeleteDeck;
