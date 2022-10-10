import React from 'react'
import './searchbar.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'

const Searchbar = () => {
  return (
    <div>
    <img  src={logo} className='logo'/>
    <div className='searchbar'>
    <img  src={search} className='search-icon'/>



    <input className='search-input' type="text" placeholder='search artist' />

    </div>

    
    </div>
  )
}

export default Searchbar