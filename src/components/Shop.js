import React from 'react'
import ChildrenShop from './ChildrenShop'
import MenShop from './MenShop'
import WomenShop from './WomenShop'

const Shop = () => {
  return (
    <div id='Shop'>
        <WomenShop/>
        <MenShop/>
        <ChildrenShop/>
    </div>
  )
}

export default Shop