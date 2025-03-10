import { useState } from 'react';
const useModal = () => {
    const [modals, setModals] = useState({});
    // Abre un modal específico según el tipo o identificador
    const openModal = (id) => {
        setModals((prevModals) => (Object.assign(Object.assign({}, prevModals), { [id]: true })));
    };
    // Cierra un modal específico
    const closeModal = (id) => {
        setModals((prevModals) => (Object.assign(Object.assign({}, prevModals), { [id]: false })));
    };
    // Cierra todos los modales
    const closeAllModals = () => setModals({});
    // Verificar si un modal específico está abierto
    const isOpen = (id) => !!modals[id];
    return {
        openModal,
        closeModal,
        closeAllModals,
        isOpen
    };
};
export default useModal;
