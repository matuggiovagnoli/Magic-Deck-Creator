import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import CardList from './pages/CardList';
import Home from './pages/Home';
import bgImage from './assets/background.jpg';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MyDecks from './pages/MyDecks';
function App() {
    return (React.createElement("div", { className: "w-screen h-screen flex flex-col bg-cover bg-center bg-fixed overflow-y-auto", style: {
            backgroundImage: `url(${bgImage})`,
        } },
        React.createElement(Header, null),
        React.createElement("main", { className: 'flex-grow mt-[60px] mb-[50px]' },
            React.createElement(Routes, null,
                React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
                React.createElement(Route, { path: '/MagicCards', element: React.createElement(CardList, null) }),
                React.createElement(Route, { path: '/Decks', element: React.createElement(MyDecks, null) }))),
        React.createElement(Footer, null)));
}
export default App;
