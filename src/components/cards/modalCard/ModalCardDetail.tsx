import React from 'react'
import { ModalPropsCardDetail } from '../../../types/ModalTypes' 
import Modal from '../../ui/modal/Modal'

const ModalCardDetail: React.FC<ModalPropsCardDetail> = ({isOpen, closeModal, card}) => {
  return (
    <>
        {isOpen && (
            <Modal title={`${card?.name} - Detalles`} onClose={() => closeModal('cardDetail')}>
            {card?.imageUrl && (
                <div>
                <img
                    src={card?.imageUrl}
                    alt={card?.name}
                    className="w-80 max-w-3xl mx-auto object-cover rounded-lg"
                />
                <div>
                    <p><strong>Rarity: </strong> {card?.rarity}</p>
                    <p><strong>Type: </strong> {card?.type}</p>
                    {card?.flavor && <p className='italic'>"{card?.flavor}"</p>}
                </div>
                </div>
            )}
            </Modal>
        )}
    </>
  )
}

export default ModalCardDetail