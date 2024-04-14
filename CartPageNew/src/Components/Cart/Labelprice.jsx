import React from 'react'

const Labelprice = ({label, price}) => {
  return (
    <div style={{display:"flex",gap:"5px"}}>
        <p>{label}</p>
        <p>INR: {price}</p>
    </div>
  )
}

export default Labelprice
// import React from 'react'

// const Labelprice = ({label,price}) => {
    
//   return (
//     <>
//     <p>{label}</p>
//     <p>INR:{price}</p>
//     </>
//   )
// }

// export default Labelprice