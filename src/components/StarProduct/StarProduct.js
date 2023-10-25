import React from 'react'
import './StarProduct.css'


const StarProduct = ({starProduct}) => {
    return (
        <div className='starProduct'>
            <div>
                <a href={starProduct[0].url}> <img src={starProduct[0].image} alt='product-1' /> </a>
            </div>
            <div>
                <a href={starProduct[1].url}> <img src={starProduct[1].image} alt='product-2' /> </a>
                <a href={starProduct[2].url}> <img src={starProduct[2].image} alt='product-3' /> </a>
                <a href={starProduct[3].url}> <img src={starProduct[3].image} alt='product-4' /> </a>
            </div>
        </div>
    )
}

export default StarProduct