import React from 'react'
import './Newcollection.css'
import new_collection from '../Assets/new_collections'
import new_collections from '../Assets/new_collections'
import Items from '../items/Items'
export default function Newcollection() {
  return (
    <div className='new-collections'> 
      <h1> NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {
            new_collections.map((item)=>{
                return (
                    <Items  id={item.id} name = { item.name} image={item.image} new_price ={ item.new_price} old_price= {item.old_price}/>
                )
         })

        }
      </div>
    </div>
  )
}
