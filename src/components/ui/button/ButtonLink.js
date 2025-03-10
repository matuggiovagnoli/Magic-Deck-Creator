import React from 'react';
import { Link } from 'react-router';
const ButtonLink = ({ path, content, className = "" }) => {
    return (React.createElement(Link, { to: path, className: `hover:cursor-pointer px-4 py-2 rounded-md transition-all ${className}` }, content));
};
export default ButtonLink;
