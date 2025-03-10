import React, {useState} from 'react'
import Modal from '../../ui/modal/Modal';
import { ModalPropsAddDeck } from '../../../types/ModalTypes'; 

const ModalAddDeck: React.FC<ModalPropsAddDeck> = ({ isOpen, closeModal, addDeck }) => {
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
        } else {
          setError(true);
        }
      };

  return (
    <>
        {
        isOpen && (
          <Modal title='CREA UN MAZO' onClose={() => closeModal('addDeck')}>
            <div className="flex flex-row justify-center gap-3 mb-6">
              <div>
                <input
                  type="text"
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddDeck();
                    }
                  }}
                  placeholder="Nuevo nombre de deck"
                  className="px-4 py-2 border border-gray-300 rounded"
                />
              {error && <p className='text-red-600'>Debe contener por los menos 4 caracteres.</p>}
              </div>
              <button
                onClick={handleAddDeck}
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Crear Deck
              </button>
            </div>
          </Modal>
        )
      }
    </>
  )
}

export default ModalAddDeck