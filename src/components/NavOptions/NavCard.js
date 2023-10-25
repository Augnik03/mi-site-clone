import React from 'react'
import './NavCard.css'


const NavCard = ({name, price, image, index}) => {
  return (
    <div className='NavCard'>
        <img src={image} alt={`phone ${index}`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard