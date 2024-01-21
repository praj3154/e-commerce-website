import React, { useContext } from 'react'
import './css/ShopC.css'
import { ShopContex } from '../Contex/ShopContex'
import Dropdwon_icon from '../componentrs/Assets/dropdown_icon.png'
import Items from '../componentrs/items/Items'
// import all_product from '../componentrs/Assets/all_product'

export default function ShopCatagory(props) {
  const {all_product} = useContext(ShopContex);
  return (
    <div className='shop-category'>
      <img  className = 'shop_banner'src={props.banner} alt="" />
      <div className='Shopcatagory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcatagory-sort">
          Sort by <img src={Dropdwon_icon} alt="" />
        </div>
      </div>
      <div className="Shop-catagory-products">

        {all_product.map((item)=>{
          if ( props.category=== item.category){
            return <Items  id={item.id} name = { item.name} image={item.image} new_price ={ item.new_price} old_price= {item.old_price}/>
          }
          else{
            return <></>
          }
        } 
       
       )}

     
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
    </div>
  )
}
