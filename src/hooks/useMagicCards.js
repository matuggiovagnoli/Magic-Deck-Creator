var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback, useState } from 'react';
import { fetchCards } from '../api/MagicApi';
const useMagicCards = () => {
    const [cardList, setCardList] = useState([]);
    const [pageSize, setPageSize] = useState(20);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getCards = useCallback((...args_1) => __awaiter(void 0, [...args_1], void 0, function* (limit = pageSize) {
        setLoading(true);
        setError(null);
        try {
            const data = yield fetchCards(limit);
            setCardList((prevCards) => [...prevCards, ...data.cards]);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }), [pageSize]);
    return {
        cardList,
        loading,
        error,
        pageSize,
        setPageSize,
        getCards
    };
};
export default useMagicCards;
