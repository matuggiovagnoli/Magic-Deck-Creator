import React from 'react';
import { Link, useLocation } from 'react-router';
const Header = () => {
    const location = useLocation();
    const links = [
        { to: '/', label: 'Inicio' },
        { to: '/Decks', label: 'Mazos' },
        { to: '/MagicCards', label: 'Cartas' },
    ];
    const isActive = (path) => location.pathname === path;
    return (React.createElement("header", { className: "w-full p-4 bg-gradient-to-b from-black/60 to-transparent text-white z-50" },
        React.createElement("div", { className: "flex justify-between items-center max-w-7xl mx-auto" },
            React.createElement("h1", { className: "text-4xl font-bold" }, "Magic Deck Creator"),
            React.createElement("nav", null,
                React.createElement("ul", { className: "flex gap-6" }, links.map((link) => (React.createElement("li", { key: link.to },
                    React.createElement(Link, { to: link.to, className: `text-lg px-4 py-2 rounded-lg transition duration-300 ${isActive(link.to)
                            ? 'text-white font-bold underline'
                            : 'text-gray-300 hover:text-white hover:underline'}` }, link.label)))))))));
};
export default Header;
