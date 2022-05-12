import React from 'react'
import Menu from './Menu'
import Slide from './Slide'
import TabletMenu from './TabletMenu'

const MenuSlide = () => {
  return (
    <div id='MenuSlide'>
        <Menu/>
        <TabletMenu/>
        <Slide/>
    </div>
  )
}

export default MenuSlide