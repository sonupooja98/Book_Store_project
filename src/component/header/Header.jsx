import React from 'react'

import '../header/Header.scss'
import icon from '../../assest/icon.png'
import { useHistory } from "react-router-dom";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone'


function Header() {

    let history = useHistory();
    const openCart =()=>{
        history.push('/cart');
    }

    const clickCart =() =>{
        history.push('/cart')
    }
  return (
    <div className='homecontant'>
    <div className='homeheadpart'>
        <img className='bookLogo' src={icon} alt='this is book logo' />
        <p className='bookStore' >Bookstore</p>
        <div className='searchpart'>
            {/* <SearchOutlinedIcon /> */}
            <input type='search' className='search' placeholder='Search...'></input>
        </div>
        <div className='profilebox'>
            <div className='profile'>
                <PermIdentityTwoToneIcon />
                Pooja
            </div>
        </div>
        <div className='shoppingCart' onClick={openCart}>
            <ShoppingCartOutlinedIcon />
            Cart
        </div>
    </div>
    </div>
  )
}

export default Header