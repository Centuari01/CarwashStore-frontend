import React from 'react'
import './Header.css'
import Link from 'next/link'
import Popup from '@/components/Popup'
const Header = () => {
  return (
    <div className='Header--Parent'>
      <div className='Header--Container'>
        <div className='Logo--Container'>OnelineCar</div>
        <div className='Header--Links--Container'>
          <Link href='/about' className='Link'>About</Link>
          <Link href='/contact'  className='Link'>Contact</Link>
          <Link href='/profile'  className='Link'>Profile</Link>
        </div>
        <div className='Popup--Container'>
        <Popup/></div>
      </div>
    </div>
  )
}

export default Header