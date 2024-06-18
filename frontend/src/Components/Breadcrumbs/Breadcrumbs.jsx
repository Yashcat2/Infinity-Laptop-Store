import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className=' breadcrum'> 
        HOME <img src={arrow_icon} alt = ''/>
        SHOP <img src={arrow_icon} alt = ''/>
        {product.catagory} 
        <img src={arrow_icon} alt = ''/>
        {product.name} 
    </div>
  )
}

export default Breadcrumbs