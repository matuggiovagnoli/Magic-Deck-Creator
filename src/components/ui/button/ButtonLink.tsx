import React from 'react'
import { Link } from 'react-router'
import { ButtonLinkProps } from '../../../types/ButtonTypes' 

const ButtonLink: React.FC<ButtonLinkProps> = ({ path, content, className = "" }) => {
  return (
    <Link
        to={path}
        className={`hover:cursor-pointer px-4 py-2 rounded-md transition-all ${className}`}
    >
        {content}
    </Link>
  )
}

export default ButtonLink