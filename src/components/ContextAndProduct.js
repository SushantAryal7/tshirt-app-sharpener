import {React, createContext, useState} from 'react'

                    // Create context

export const CartContext = createContext()

function ContextAndProduct(props) {

                  // useState to add selected item
  const [addITem, setAddItem] = useState([])

  const ProductList = [{name:'Full Tshirt',price:100},
    {name:'half Tshirt',price:150},
    {name:'neckround Tshirt',price:180},
    {name:'coller Tshirt',price:200},
    {name:'kid Tshirt',price:220} ]
 
console.log(addITem,'addITem')
  return (
   <CartContext.Provider value={{ProductList, addITem, setAddItem}}>
      {props.children}
   </CartContext.Provider>
  )
}

export default ContextAndProduct