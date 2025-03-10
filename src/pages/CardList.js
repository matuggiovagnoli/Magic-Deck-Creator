import React, { useMemo, useEffect } from 'react';
import useMagicCards from '../hooks/useMagicCards';
import CardItem from '../components/cards/CardItem';
const CardList = () => {
    const { cardList, getCards, loading, setPageSize, pageSize, error } = useMagicCards();
    const uniqueCards = useMemo(() => {
        const seenNames = new Set();
        return cardList.filter((card) => {
            if (seenNames.has(card.name)) {
                return false;
            }
            seenNames.add(card.name);
            return true;
        });
    }, [cardList]);
    useEffect(() => {
        getCards(pageSize);
    }, [pageSize]);
    return (React.createElement("main", { className: "w-full min-h-screen bg-transparent flex flex-col items-center" },
        React.createElement("h1", { className: "text-3xl font-bold text-center my-4" }, "Cartas Magic"),
        React.createElement("p", { className: "text-gray-700 text-center mb-4" }, "Explora y elige cartas para tu mazo"),
        error && React.createElement("p", { className: "text-red-500 font-bold text-center" },
            "Hubo un error: ",
            error),
        React.createElement("div", { className: "w-full px-4" },
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6" }, uniqueCards.map((card) => (React.createElement(CardItem, { key: card.id, card: card }))))),
        cardList.length !== 0 &&
            React.createElement("div", { className: "my-8" },
                React.createElement("button", { onClick: () => setPageSize((prevCount) => prevCount + 20), disabled: loading, className: "px-6 py-3 bg-blue-600 text-white rounded-lg text-lg" }, loading ? 'Cargando...' : 'Ver Más'))));
};
export default CardList;
