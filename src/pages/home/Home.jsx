import React from 'react';
import '../home/Home.scss'

import icon from '../../assest/icon.png'
import Bookcard from '../../component/bookcard/Bookcard';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone'


function Home() {
  

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
                <div className='shoppingCart'>
                    <ShoppingCartOutlinedIcon />
                    Cart
                </div>
            </div>
            <div className='secondBar'>
                <p className="books">Books </p>
                <p className="item"> (128 items)</p>
                <select name="sort by relevance" className="priceValue">
                    <option value="priceValue">Sort by relevance</option>
                    <option value="lowPrice">Price:Low to high</option>
                    <option value="highPrice">Price:High to low</option>
                    <option value="newPrice">Newest arrivals</option>
                </select>
            </div>
            <div className='bookBundle'>


                <Bookcard />
            </div>
        </div>
    )
}

export default Home;