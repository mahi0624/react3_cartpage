import React from 'react'
import Cartitems from './Cartitems'
import { useState } from 'react';

let cartItems = [
    { id: 1, label: "Noodles", price: 30, quantity: 1 },
    { id: 2, label: "Biryani", price: 90, quantity: 1 },
    { id: 3, label: "Chips", price: 10, quantity: 1 },
  ];

const Cartcontainer = () => {
    const[cart,setCart] =useState(cartItems);
  return (
     <>
     {cart.map((item)=>(
        <Cartitems key={item.id} {...item}/>
    ))}
     </>
  )
}

export default Cartcontainer
import React from 'react'
import Cartitem from './Cartitems'
import { useState } from 'react';

let cartItem = [
    { id: 1, label: "Noodles", price: 30, quantity: 1 },
    { id: 2, label: "Biryani", price: 90, quantity: 1 },
    { id: 3, label: "Chips", price: 10, quantity: 1 },
  ];

const Cartcoontainer = () => {
    const[cart,setCart] =useState(cartItem);
  return (
     <>
     {cart.map((item)=>(
        <Cartitem key={item.id} {...item}/>
    ))}
     </>
  )
}

export default Cartcoontainer
