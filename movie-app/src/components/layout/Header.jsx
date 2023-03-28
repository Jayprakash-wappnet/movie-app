import React from 'react'
import { Link } from 'react-router-dom'
import logo_1 from '../../assets/logo_1.png'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
            <div className='logo'>
                <img className='h-40 w-auto' src={ logo_1 } alt='logo'/>

            </div>
        </Link>

     
    </div>
  )
}

export default Header
