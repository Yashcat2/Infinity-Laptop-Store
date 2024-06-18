import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  if (!product) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div>
      <Breadcrumbs product = {product}/> 
      <ProductDisplay product = {product}/> 
      <DescriptionBox/>
      <RelatedProduct/>  
      
    </div>
  )
}
