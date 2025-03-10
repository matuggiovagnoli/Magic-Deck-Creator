import React from 'react'
import { DeckSelectionProps } from '../../types/DeckTypes' 

const DeckSelection: React.FC<DeckSelectionProps> = ({decks, selectedDeck, setSelectedDeck}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='text-lg font-bold'>Elige tu mazo</h4>
        <div className='flex flex-row'>
            <label>Selecciona un Mazo: </label>
            <select
                value={selectedDeck}
                className='border-b focus:outline-none  w-40 truncate ml-2'
                onChange={(e) => setSelectedDeck(e.target.value)}
            >
                {
                    decks.map((deck) => 
                    <option
                        key={deck.id}
                        value={deck.id}
                        className='w-40 truncate'
                    >
                        {deck.name}
                    </option>)
                }            
            </select>
        </div>
    </div>
  )
}

export default DeckSelection