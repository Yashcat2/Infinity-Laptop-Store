import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const Listproduct = () => {


  const [allproduct,setAllProduct] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproduct')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
  await fetch('http://localhost:4000/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify({id:id})  
  })
  await fetchInfo();

}

  return (
    <div className='list-product'>
        <h1>All Product List</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Categorry</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproduct">
          <hr />
          {allproduct.map((product,index)=>{
            return <> 
            <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} className="listproduct-product-icon" alt="" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p >{product.catagory}</p>
              <img onClick={()=>{remove_product(product.id)}} src={cross_icon} className='listproduct-remove-icon' alt="" />
              
                

            </div>
            <hr />
            </>
          })}
        </div> 
    </div>
  )
}

export default Listproduct