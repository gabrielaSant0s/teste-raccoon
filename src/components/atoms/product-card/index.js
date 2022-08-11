import React from 'react';
import './style.css';
import target from '../../images/fluent_target-arrow-20-filled.svg'


const ProductCard = ({
    title='lorem Ipsum', 
    description=`Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.`,
    color='#0073c6'})=> {

        

    return (
        <div className='containerCard' style={{backgroundColor: `${color}`}}>
            <span className='icon'>
                <img src={target}/>
            </span>
            <div>
                <p className='titleProduct'>{title}</p>
                <p className='description'>{description}</p>
            </div>  
        </div>
    )
}

export default ProductCard