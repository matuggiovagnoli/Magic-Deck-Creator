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
        if (newTitle.trim() === "" || newTitle.length <= 3){
            setErrors(true)
            setNewTitle("")
        }else {
            setErrors(false)
            updateDeckName(deck.id, newTitle);
           closeModal("EditDeck");
        }
    }

  return (
    <>
        {
            isOpen && (
                <Modal title="Editar Mazo" onClose={() => closeModal('EditDeck')}>
                    <form className='flex flex-col justify-center items-center gap-4 ' onSubmit={handleSubmit}>
                        <div>
                            <label>Nuevo Titulo: </label>
                            <input 
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className='focus:outline-none border-b'
                            />
                        </div>
                        {error && <p  className='text-red-600'>El nuevo titulo no puedo estar vacio y debe contener al menos 3 caracteres</p>}
                        <Button 
                            content="Confirmar"
                            type="Submit"
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