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

  return (
    <main className="w-full min-h-screen bg-transparent flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center my-4">Cartas Magic</h1>
      <p className="text-gray-700 text-center mb-4">Explora y elige cartas para tu mazo</p>

      {error && <p className="text-red-500 font-bold text-center">Hubo un error: {error}</p>}

      <div className="w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {uniqueCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
      {
        cardList.length !== 0 && 
        <div className="my-8">
          <button
          onClick={() => setPageSize((prevCount) => prevCount + 20)}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg"
          >
            {loading ? 'Cargando...' : 'Ver Más'}
          </button>
        </div>
      }
      
    </main>
  );
};

export default CardList;
