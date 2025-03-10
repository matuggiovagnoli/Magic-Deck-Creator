import React from 'react'
import { ModalPropsDeleteDeck } from '../../../types/ModalTypes'
import Modal from '../../ui/modal/Modal'
import Button from '../../ui/button/Button';
const ModalDeleteDeck: React.FC<ModalPropsDeleteDeck> = ({ isOpen, closeModal, handleRemoveDeck, id }) => {

    const handleDelete = (id:string) => {
        handleRemoveDeck(id);
        closeModal('DeleteDeck');
    };
    
  return (
    <>
        {
            isOpen && (
                <Modal title='Eliminar Mazo' onClose={() => closeModal('DeleteDeck')}>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col justify-center items-center'>
                            <p>Eliminar un mazo tambien borra toda su colección de cartas</p>
                            <p className='font-medium'>¿ Estas seguro de eliminar el mazo ?</p>
                        </div>
                        <div className='flex flex-row justify-evenly items-center gap-4'>
                            <Button
                                content="Cancelar"
                                onClick={() => closeModal('DeleteDeck')}
                                className='border hover:bg-black hover:text-white'
                            />
                            <Button
                                 content="Eliminar"
                                 onClick={() => handleDelete(id)}
                                 className='border hover:bg-black hover:text-white'
                            />
                        </div>
                    </div>
                  
                </Modal>
            )
        }
    </>
  )
}

export default ModalDeleteDeck