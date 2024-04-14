import React from 'react'
import Labelprice from './Labelprice'
import Quantitycontainer from './Quantitycontainer'

const Cartitems = ({id,label, price, quantity, changeQuantity}) => {
  return (
    <>
    <Labelprice label={label} price={price}/>
    <Quantitycontainer quantity={quantity} id={id} changeQuantity={changeQuantity}/>
    </>
  )
}

export default Cartitems
// import React from 'react'
// import Labelprice from './Labelprice'
// import Quantitycontainer from './Quantitycontainer'

// const Cartitems = ({id,label, price, quantity}) => {
//   return (
//     <>
//     <Labelprice label={label} price={price}/>
//     <Quantitycontainer quantity={quantity} id={id} />
//     </>
//   )
// }

// export default Cartitems