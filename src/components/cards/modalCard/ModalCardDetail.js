import React from 'react';
import Modal from '../../ui/modal/Modal';
const ModalCardDetail = ({ isOpen, closeModal, card }) => {
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement(Modal, { title: `${card === null || card === void 0 ? void 0 : card.name} - Detalles`, onClose: () => closeModal('cardDetail') }, (card === null || card === void 0 ? void 0 : card.imageUrl) && (React.createElement("div", null,
        React.createElement("img", { src: card === null || card === void 0 ? void 0 : card.imageUrl, alt: card === null || card === void 0 ? void 0 : card.name, className: "w-80 max-w-3xl mx-auto object-cover rounded-lg" }),
        React.createElement("div", null,
            React.createElement("p", null,
                React.createElement("strong", null, "Rarity: "),
                " ", card === null || card === void 0 ? void 0 :
                card.rarity),
            React.createElement("p", null,
                React.createElement("strong", null, "Type: "),
                " ", card === null || card === void 0 ? void 0 :
                card.type),
            (card === null || card === void 0 ? void 0 : card.flavor) && React.createElement("p", { className: 'italic' },
                "\"", card === null || card === void 0 ? void 0 :
                card.flavor,
                "\""))))))));
};
export default ModalCardDetail;
