import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalAddDeck from '../../components/decks/modalDecks/ModalAddDeck';
import { vi } from 'vitest';
describe('ModalAddDeck', () => {
    let mockCloseModal;
    let mockAddDeck;
    beforeEach(() => {
        mockCloseModal = vi.fn();
        mockAddDeck = vi.fn();
    });
    it('should render correctly when open', () => {
        render(React.createElement(ModalAddDeck, { isOpen: true, closeModal: mockCloseModal, addDeck: mockAddDeck }));
        expect(screen.getByText('CREA UN MAZO')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Nuevo nombre de deck')).toBeInTheDocument();
        expect(screen.getByText('Crear Deck')).toBeInTheDocument();
    });
    it('should allow typing in the input field', () => {
        render(React.createElement(ModalAddDeck, { isOpen: true, closeModal: mockCloseModal, addDeck: mockAddDeck }));
        const input = screen.getByPlaceholderText('Nuevo nombre de deck');
        fireEvent.change(input, { target: { value: 'My Deck' } });
        expect(input.value).toBe('My Deck');
    });
    it('should show an error message for invalid input too short', () => {
        render(React.createElement(ModalAddDeck, { isOpen: true, closeModal: mockCloseModal, addDeck: mockAddDeck }));
        const input = screen.getByPlaceholderText('Nuevo nombre de deck');
        const button = screen.getByText('Crear Deck');
        fireEvent.change(input, { target: { value: 'A' } }); // Nombre muy corto
        fireEvent.click(button);
        expect(screen.getByText('Debe contener por los menos 4 caracteres y menos de 15.')).toBeInTheDocument();
        expect(mockAddDeck).not.toHaveBeenCalled(); // No se debe llamar a addDeck
    });
    it('should show an error message for invalid input too long', () => {
        render(React.createElement(ModalAddDeck, { isOpen: true, closeModal: mockCloseModal, addDeck: mockAddDeck }));
        const input = screen.getByPlaceholderText('Nuevo nombre de deck');
        const button = screen.getByText('Crear Deck');
        fireEvent.change(input, { target: { value: 'Nombre muy largo para un mazo' } }); // Nombre muy corto
        fireEvent.click(button);
        expect(screen.getByText('Debe contener por los menos 4 caracteres y menos de 15.')).toBeInTheDocument();
        expect(mockAddDeck).not.toHaveBeenCalled(); // No se debe llamar a addDeck
    });
    it('should call addDeck and closeModal with valid input', () => {
        render(React.createElement(ModalAddDeck, { isOpen: true, closeModal: mockCloseModal, addDeck: mockAddDeck }));
        const input = screen.getByPlaceholderText('Nuevo nombre de deck');
        const button = screen.getByText('Crear Deck');
        fireEvent.change(input, { target: { value: 'Valid Deck' } });
        fireEvent.click(button);
        expect(mockAddDeck).toHaveBeenCalledWith('Valid Deck'); // Se llama con el nombre correcto
        expect(mockCloseModal).toHaveBeenCalledWith('addDeck'); // Se cierra el modal
    });
    it('should call addDeck when pressing Enter', () => {
        render(React.createElement(ModalAddDeck, { isOpen: true, closeModal: mockCloseModal, addDeck: mockAddDeck }));
        const input = screen.getByPlaceholderText('Nuevo nombre de deck');
        fireEvent.change(input, { target: { value: 'Enter Deck' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        expect(mockAddDeck).toHaveBeenCalledWith('Enter Deck');
        expect(mockCloseModal).toHaveBeenCalledWith('addDeck');
    });
});
