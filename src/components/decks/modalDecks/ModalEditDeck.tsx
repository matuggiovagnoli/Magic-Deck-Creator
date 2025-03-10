import React, { useState } from 'react'
import { ModalPropsEditDeck } from '../../../types/ModalTypes'
import { useDeckStore } from '../../../store/useDeckStore' 
import Modal from '../../ui/modal/Modal'
import Button from '../../ui/button/Button'

const ModalEditDeck: React.FC<ModalPropsEditDeck> = ({ isOpen, closeModal, deck }) => {
    const [newTitle , setNewTitle] = useState("");
    const { updateDeckName } = useDeckStore();
    const [error, setErrors] = useState(false)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTitle.trim().length <= 3 || newTitle.trim().length >= 15){
            setErrors(true)
            setNewTitle("")
        }else {
            const title = newTitle.trim()
            setErrors(false)
            updateDeckName(deck.id, title);
           closeModal("EditDeck");
        }
    }

  return (
    <>
        {
            isOpen && (
                <Modal title="Editar Mazo" onClose={() => closeModal('EditDeck')}>
                    <form className='flex flex-col justify-center items-center gap-4 ' onSubmit={handleSubmit} data-testid="edit-deck-form">
                        <div>
                            <label>Nuevo Titulo: </label>
                            <input 
                                data-testid="new-title-input"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className='focus:outline-none border-b'
                            />
                        </div>
                        {error && <p  className='text-red-600'>El nuevo titulo no puedo estar vacio y debe contener al menos 4 caracteres y menos de 15</p>}
                        <Button 
                            content="Confirmar"
                            type="submit"
                            className="border border-green-500 bg-green-500 font-semibold"
                        />
                    </form>
                </Modal>
            )
        }
    </>
  )
}

export default ModalEditDeck