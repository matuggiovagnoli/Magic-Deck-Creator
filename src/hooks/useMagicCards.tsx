import {useCallback, useState} from 'react'
import { Card } from '../types/CardTypes';
import { fetchCards } from '../api/MagicApi';

const useMagicCards = () => {
  const [cardList, setCardList] = useState<Card[]>([]);
  const [pageSize, setPageSize] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
 

  const getCards = useCallback(async(limit = pageSize) =>{
    setLoading(true)
    setError(null); 
    try{
        const data = await fetchCards(limit);
        setCardList((prevCards) => [...prevCards ,...data.cards]);
    } catch (error: any){
        setError(error.message);
    } finally {
        setLoading(false)
    }
  }, [pageSize])
  
    return {
        cardList,
        loading,
        error,
        pageSize,
        setPageSize,
        getCards
  }
}

export default useMagicCards