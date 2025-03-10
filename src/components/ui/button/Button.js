import React from 'react';
const Button = ({ content, className = "", onClick, type }) => {
    return (React.createElement("button", { className: `hover:cursor-pointer px-4 py-2 rounded-lg transition-all ${className}`, onClick: onClick, type: type }, content));
};
export default Button;
