import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Product } from '../../Pages/Product'
import star_icon from "../Assests/star_icon.png" ;
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />

            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" /> 
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" /> 
                <p>122</p>          
            </div>
            <div className="warn">
                <p>
                Product Code : NOTASU0188 <br />
                Availability : <span>In Of Stock </span> <br />
                Approximate Weight : 2.50 kg <br />
                Min Order Limit : 1 <br />
                </p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>    
                <div className="productdisplay-right-description">
                <p>AMD Ryzen™ 9 5900HX Processor <br />
                16GB DDR4-3200 SO-DIMM <br />
                512GB M.2 NVMe™ PCIe® 3.0 SSD <br />    
                NVIDIA® GeForce RTX™ 3050 Ti Laptop GPU <br />
                15.6 Inch FHD (1920 x 1080) <br />
                Genuine Windows 10 Home 64bit <br />    
                Free Carrying Case <br />
                Free USB Optical Mouse <br /></p>
                </div>
                
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                <div className="productdisplay-right-size">
                    <p>2 Year Warranty +2 Years Service Warranty <br />
                       1 Year Warranty for Battery and Charger</p>
                    {/* <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div> */}
                </div>
                <p className='productdisplay-right-category' ><span>Category:</span> {product.catagory}, Gaming, Laptop</p>
                <p className='productdisplay-right-category' ><span>Tags:</span> Popular ,Latest</p>

            
                
            
        </div>
    </div>
  )
}

export default ProductDisplay