import React from 'react'

const Quantitycontainer = ({id, quantity}) => {
  return (
    <div style={{display:"flex"}}>
    <button>-</button>
    <p>{quantity}</p>
    <button>+</button>
    </div>
  )
}

export default Quantitycontainer
// import React from 'react'

// const QuantityContainer = (id,quantity) => {
//   return (
//     <>
//     <button>-</button>
//     <p>{quantity}</p>
//     <button>+</button>
//     </>
//   )
// }

// export default QuantityContainer