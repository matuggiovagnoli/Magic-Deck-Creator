import React from 'react';
const DeckSelection = ({ decks, selectedDeck, setSelectedDeck }) => {
    return (React.createElement("div", { className: 'flex flex-col justify-center items-center gap-2' },
        React.createElement("h4", { className: 'text-lg font-bold' }, "Elige tu mazo"),
        React.createElement("div", { className: 'flex flex-row' },
            React.createElement("label", null, "Selecciona un Mazo: "),
            React.createElement("select", { value: selectedDeck, className: 'border-b focus:outline-none  w-40 truncate ml-2', onChange: (e) => setSelectedDeck(e.target.value) }, decks.map((deck) => React.createElement("option", { key: deck.id, value: deck.id, className: 'w-40 truncate' }, deck.name))))));
};
export default DeckSelection;
