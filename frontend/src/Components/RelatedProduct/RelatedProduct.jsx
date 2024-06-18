import React, { useEffect, useState } from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import data_product from "../Assests/data";

const RelatedProduct = () => {

  const [data_product,setDataProducts] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen').then((response)=>response.json()).then((data)=>setDataProducts(data))
  },[])

  return (
    <div className='relatedproduct'>
        <h1>Related Product</h1>
        <hr />
        <div className="relatedproduct-item">
            {data_product.map((item,i )=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
            })}
        </div>
    </div>
  )
}

export default RelatedProduct