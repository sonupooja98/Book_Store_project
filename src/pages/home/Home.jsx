import React from 'react';
import '../home/Home.scss'

import icon from '../../assest/icon.png'
import Bookcard from '../../component/bookcard/Bookcard';
import Header from '../../component/header/Header'


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone'


function Home() {

    const [dataSearch,setDataSearch] = React.useState(' ');

    const listenToHeader = (data) =>{
        setDataSearch(data)
    }
  

    return (
        <div className='homecontant'>
           <Header listenToHeader={listenToHeader} />
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


                <Bookcard searchData={dataSearch}
/>
            </div>
        </div>
    )
}

export default Home;