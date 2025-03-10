import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalDeleteDeck from '../../components/decks/modalDecks/ModalDeleteDeck';
import { vi } from 'vitest';

describe('ModalDeleteDeck', () => {
  let mockCloseModal: ReturnType<typeof vi.fn>;
  let mockHandleRemoveDeck: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockCloseModal = vi.fn();
    mockHandleRemoveDeck = vi.fn();
  });

  it('should render correctly when open', () => {
    render(<ModalDeleteDeck isOpen={true} closeModal={mockCloseModal} handleRemoveDeck={mockHandleRemoveDeck} id="123" />);

    expect(screen.getByText('Eliminar Mazo')).toBeInTheDocument();
    expect(screen.getByText('Eliminar un mazo tambien borra toda su colección de cartas')).toBeInTheDocument();
    expect(screen.getByText('¿ Estas seguro de eliminar el mazo ?')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Eliminar')).toBeInTheDocument();
  });

  it('should call closeModal when clicking "Cancelar"', () => {
    render(<ModalDeleteDeck isOpen={true} closeModal={mockCloseModal} handleRemoveDeck={mockHandleRemoveDeck} id="123" />);
    
    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);

    expect(mockCloseModal).toHaveBeenCalledWith('DeleteDeck');
  });

  it('should call handleRemoveDeck and closeModal when clicking "Eliminar"', () => {
    render(<ModalDeleteDeck isOpen={true} closeModal={mockCloseModal} handleRemoveDeck={mockHandleRemoveDeck} id="123" />);
    
    const deleteButton = screen.getByText('Eliminar');
    fireEvent.click(deleteButton);

    expect(mockHandleRemoveDeck).toHaveBeenCalledWith('123');
    expect(mockCloseModal).toHaveBeenCalledWith('DeleteDeck');
  });

  it('should not render when isOpen is false', () => {
    render(<ModalDeleteDeck isOpen={false} closeModal={mockCloseModal} handleRemoveDeck={mockHandleRemoveDeck} id="123" />);

    expect(screen.queryByText('Eliminar Mazo')).not.toBeInTheDocument();
  });
});
