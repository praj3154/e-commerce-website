import React, { useContext } from 'react'
import { ShopContex } from '../Contex/ShopContex'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../componentrs/productdisplay/ProductDisplay';
import Breadcrims from '../componentrs/breadcrims/Breadcrims';
import Hero from '../componentrs/hero/Hero';

export default function Product() {
  const {all_product} = useContext(ShopContex);
  const {productId} = useParams();
  const  product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>/
      
      <Breadcrims product={product}/>
     
      <ProductDisplay product = {product}/>
      
    </div>
  )
}
