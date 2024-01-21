import React, { createContext } from "react";
import all_product from '../componentrs/Assets/all_product'
export const  ShopContex = createContext(0);

 const ShopContexProvider = (props)=> {
    const contexvalue ={all_product }
    return (
<ShopContex.Provider value={contexvalue}>
{props.children}
</ShopContex.Provider>
    )
 }
 export default ShopContexProvider;