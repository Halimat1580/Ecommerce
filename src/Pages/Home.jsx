
import React, { useEffect } from 'react'
import Electronics from '../Component/Electronics'
import Hero from '../Component/Hero'
import Women from '../Component/Women'

const Home = ({cart,handleAddToCart, setCart}) => {
    useEffect(()=>{
        document.title = 'Home | Page'

    })
        
    
  return (
    <div className='container'>

      <Hero/>
      <Electronics/>
      <Women/>
        {/* <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
        <Electronics cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
        <Women handleAddToCart={handleAddToCart}/> */}
    </div>

  )
}

export default Home