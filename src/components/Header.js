import {Fragment, React, useContext, useState} from 'react'
import {CartContext} from './ContextAndProduct'
import classes from './Header.module.css'

function Header() {
            // Use context
  const cart = useContext(CartContext)

                // useState to get the input value
  const [word, setWord] = useState()

                      // product list which are contain word which are type in input 
  const ShowingProduct = cart.ProductList.filter(item=>item.name.includes(word))

                  // function to addItem in list
  const OnClickHandler = (event, item) =>{
    event.preventDefault()
    cart.setAddItem([...cart.addITem, item] )
    console.log(cart.addITem , 'cart item')
  }

  return (
    <Fragment>
    <div className={classes.box}>
      <div >
        <label>Product</label>
        <input onChange={(event)=>setWord(event.target.value)}></input>
      </div>

      <div>
        <label>price</label>
        <input></input>
      </div>
      <div>
        <label>descreption</label>
        <input></input>
      </div>
      </div>
        <div className={classes.h2}><h2 >Product List</h2></div>   
          
    <ul>
      {ShowingProduct.map((item,index)=><div key={index}>
        <span>{item.name}---------</span>
        <span>{item.price}</span>
        <button onClick={(event)=>OnClickHandler(event,item)}>Add</button>
      </div>)}
    </ul>

    </Fragment>
  )
}

export default Header