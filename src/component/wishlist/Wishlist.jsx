import React from 'react'
import book3 from '../../assest/book3.png'
// import {getwishlist} from '../../services/userService';
import { getwishlist } from '../../services/userSevice';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../wishlist/Wishlist.scss'
import Header from '../header/Header';
import {deleteBookss} from '../../services/userSevice';

function Wishlist() {

	const [wishList, setWishList] = React.useState([]);
    const [quantity, setQuantity]= React.useState(false);
	const [deleteBooks, setDeleteBooks] = React.useState(false);

    const getWishlistItems =()=>{
        getwishlist()
        .then((res)=>{
            console.log(res)
            setWishList(res.data.result);
        })
        .catch((err) => {
            console.log(err)
        })

    }

	const deleteBook = (id) => {
		deleteBookss(id)
			.then((res) => {
				console.log(res)
				setDeleteBooks(!deleteBooks)
				console.log("Delete Api working")
			})
			.catch((err) => {
				console.log(err)
			})
	}

    React.useEffect(() => {
        getWishlistItems();

    }, [deleteBooks]);

 
    return (
        <div className='wishlist-container'>
            <Header />
            <div className='wishlist-inner-container'>

                <div className='wishlist-header'>
                    <span className='w-home'>Home/</span>
                    <span className='w-list'>My WishList</span>
                </div>
                <div className='wishlist-headig'>
                    My WishList ({wishList.length})
                </div>
                {wishList.map((item) => (
                <div className='wishlist-bkdetial-container'>
              
                    
                    <div className='wl-image-container'>
                        <img className='wishlist-img' src={book3}></img>
                    </div>
                    <div className='wishlistBookInfoContainer'>
                        <div className='wishlistBookName'>
                            {item.product_id.bookName}
                        </div>
                        <div className='wishlistBookAuthor'>
                            by {item.product_id.author}
                        </div>
                        <div className='wishlistBookPriceContainer'>
                            <div className='wishlistBookNewPrice'>
                                Rs. {item.product_id.discountPrice}
                            </div>
                            <div className='wishlistBookOldPrice'>
                                Rs. {item.product_id.price}
                            </div>
                        </div>
                    </div>
					<div className='wl-delete-btn' onClick={() => deleteBook(item.product_id._id)}>
                <DeleteOutlineOutlinedIcon/>
                </div>
                
                </div>
                ))}
            </div>


        </div>
	)
				}

export default Wishlist