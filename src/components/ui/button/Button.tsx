import React from 'react'
import { ButtonProps } from '../../../types/ButtonTypes' 

const Button: React.FC<ButtonProps> = ({ content, className = "", onClick }) => {
  return (
    <button
        className={`hover:cursor-pointer px-4 py-2 rounded-lg transition-all ${className}`}
        onClick={onClick}
    >
        {content}
    </button>
  )
}

export default Button