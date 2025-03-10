import React from 'react';
import ButtonLink from '../components/ui/button/ButtonLink';
const Home = () => {
    return (React.createElement("main", { className: "flex flex-col items-center justify-center h-full text-center p-6" },
        React.createElement("section", { className: "max-w-3xl flex flex-col gap-10" },
            React.createElement("p", { className: "text-4xl lg:text-6xl" },
                "Bienvenido a ",
                React.createElement("strong", { "data-testid": "magic-deck-creator" }, "Magic Deck Creator"),
                ", tu herramienta definitiva para construir estrategias poderosas en el universo de Magic."),
            React.createElement("p", { className: "mt-2" }, "Explora una vasta colecci\u00F3n de cartas, selecciona tus favoritas y crea mazos \u00FAnicos adaptados a tu estilo de juego."),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Recuerda, la clave del \u00E9xito no es solo la suerte, sino una estrategia bien pensada. \u00A1Comienza a construir tu mazo y prep\u00E1rate para la batalla!")),
        React.createElement("nav", { className: "mt-6" },
            React.createElement(ButtonLink, { path: "/Decks", className: "bg-black text-xl text-white animate-pulse", content: "Comienza la Aventura" }))));
};
export default Home;
