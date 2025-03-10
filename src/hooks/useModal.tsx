import { useState } from 'react';
import { ModalState } from '../types/ModalTypes';


const useModal = () => {
  const [modals, setModals] = useState<ModalState>({});

  // Abre un modal específico según el tipo o identificador
  const openModal = (id: string) => {
    setModals((prevModals) => ({ ...prevModals, [id]: true }));
  };

  // Cierra un modal específico
  const closeModal = (id: string) => {
    setModals((prevModals) => ({ ...prevModals, [id]: false }));
  };

  // Cierra todos los modales
  const closeAllModals = () => setModals({});

  // Verificar si un modal específico está abierto
  const isOpen = (id: string) => !!modals[id];

  return {
    openModal,
    closeModal,
    closeAllModals,
    isOpen
  };
};

export default useModal;
