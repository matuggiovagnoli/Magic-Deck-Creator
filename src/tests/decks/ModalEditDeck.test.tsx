import React from 'react';
import { describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalEditDeck from '../../components/decks/modalDecks/ModalEditDeck';

describe('Modal Edit Deck', () =>{
    let MockCloseModal = vi.fn();
    let MockHandleSubmit = vi.fn()

    beforeEach(() => {
        MockCloseModal = vi.fn();
        MockHandleSubmit = vi.fn();
    })

    it('should render the modal when isOpen is true', () => {
        render(
            <ModalEditDeck 
                isOpen={true} 
                closeModal={MockCloseModal} 
                deck={{ id: "1", name: 'Deck 1', cards:[] }} 
        />)

        expect(screen.getByText('Editar Mazo')).toBeInTheDocument
    });
    
    it('should show error message if the title is invalid', () => {
        render(
          <ModalEditDeck 
            isOpen={true} 
            closeModal={MockCloseModal} 
            deck={{ id: "1", name: 'Deck 1', cards:[] }} 
          />
        );
      
        const input = screen.getByTestId('new-title-input');
        const button = screen.getByText('Confirmar');
      
        fireEvent.change(input, { target: { value: 'De' } });
        fireEvent.click(button);
      
        expect(screen.getByText('El nuevo titulo no puedo estar vacio y debe contener al menos 4 caracteres y menos de 15')).toBeInTheDocument();
      });

      it('should call closeModal when close button is clicked', () => {
        render(
          <ModalEditDeck 
            isOpen={true} 
            closeModal={MockCloseModal} 
            deck={{ id: "1", name: 'Deck 1', cards:[] }} 
          />
        );
      
        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);
      
        expect(MockCloseModal).toHaveBeenCalled();
      });
})