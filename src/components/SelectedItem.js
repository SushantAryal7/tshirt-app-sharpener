import React, { Fragment, useContext } from 'react'
import {CartContext} from './ContextAndProduct'
function SelectedItem() {
              // CartContext which are contain all selected item or cartitem
    const cart = useContext(CartContext)
    console.log(cart, 'selecteditem')
    const TotalPrice = cart.addITem.reduce((prev, curr)=>{
      return prev + curr.price
    }, 0)

    console.log(TotalPrice)
  return (
    <Fragment>
        <h1>SelectedItem</h1>
        <ul>
            {cart.addITem.map((item,index)=><div key={index}>
                <li><span>{item.name}------</span><span>{item.price}</span></li>
            </div>)}
        </ul>
        <h3>Total Price:{TotalPrice}</h3>
    </Fragment>
  )
}

export default SelectedItem