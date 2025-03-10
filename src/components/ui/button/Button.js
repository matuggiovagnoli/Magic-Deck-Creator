import React from 'react';
const Button = ({ content, className = "", onClick }) => {
    return (React.createElement("button", { className: `hover:cursor-pointer px-4 py-2 rounded-lg transition-all ${className}`, onClick: onClick }, content));
};
export default Button;
