import React from 'react'
import { ModalPropsAddCard } from '../../../types/ModalTypes' 
import { Link } from 'react-router'
import Modal from '../../ui/modal/Modal'
import Button from '../../ui/button/Button'

const ModalAddCard: React.FC<ModalPropsAddCard> = ({isOpen, closeModal, decks, handleDeckSelection}) => {
  return (
    <>
        {isOpen && (
        <Modal title="Selecciona un mazo" onClose={() => closeModal('deckSelection')}>
          <div className="flex flex-col space-y-4">
            {decks?.length === 0 ? (
              <p className="text-center">
                No tienes mazos creados.{' '}
                <Link to="/decks" className="text-blue-600 hover:underline">
                  Crea uno aquí
                </Link>
              </p>
            ) : (
              decks?.map((deck) => (
                <Button 
                  content={deck.name}
                  onClick={() => handleDeckSelection(deck.id)}
                  className='text-center border hover:bg-black hover:text-white hover:font-bold'
                />
              ))
            )}
          </div>
        </Modal>
      )}
    </>
  )
}

export default ModalAddCard