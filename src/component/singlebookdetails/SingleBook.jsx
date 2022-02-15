import React from 'react';
import { Button } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import '../singlebookdetails/SingleBook.scss'
import book1 from '../../assest/book1.png'
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

import { useHistory } from "react-router-dom";


import { addToCart, getTheCard, cartItemQuantity,addwishlist,getwishlist} from '../../services/userSevice'

function SingleBook(props) {

    let history = useHistory();
    const openWishlist =()=>{
        history.push('/wishlist');
    }


    const [addBookcard, setAddBookcard] = React.useState([]);
    const [getfilterArry, setgetfilterArry] = React.useState([]);
    const [quantity, setQuantity] = React.useState(0);
    const [cardIdDetails, setCartIdDetails] = React.useState([]);

    const [wishListId, setWishListId] = React.useState([]);

    const bookId = (_id) => {
        console.log(_id)
        addToCart(props.item.item._id).then((res) => {
            console.log(res)

        }).catch((err) => {
            console.log(err)
        })
    }

    const wishbutton = (_id) =>{
        console.log(_id)
        addwishlist(props.item.item._id).then((res)=>{
            console.log(res)
            
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    console.log(props.item.item._id)


    const getWishlistItems =()=>{
        getwishlist()
        .then((res)=>{
            console.log(res)
            let filterWishListData=res.data.result.filter((wishCart)=>{
                if(props.item.item._id === wishCart.product_id._id){
                    console.log(wishCart.product_id._id)
                    return wishCart;
                }
            })
            setWishListId(filterWishListData);
        })
        .catch((err) => {
            console.log(err)
        })

    }



    const bookDecrement = () => {
        let data = {
            "quantityToBuy": quantity - 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                cartitem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }


    const bookIncrement = () => {
        let data = {
            "quantityToBuy": quantity + 1,

        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                cartitem();
                console.log("Show Cart + Item")
            }).catch((err) => {
                console.log(err)
            })
    }





    const cartitem = () => {
        getTheCard().then((res) => {
            console.log(res)
            let filterArry = res.data.result.filter((cart) => {

                if (props.item.item._id === cart.product_id._id) {
                    setQuantity(cart.quantityToBuy)
                    setCartIdDetails(cart._id)
                    return cart
                }
            })
            setgetfilterArry(filterArry)
        }).catch((err) => {
            console.log(err)
        })
    }
     
    


    React.useEffect(() => {
        cartitem();
        getWishlistItems();
    }, [quantity]);
    console.log(getfilterArry)




    return (
        <div className="Book-container">
            <div className='Left-cont'>

                <div className="Image-cont">
                    <img id="Hower" src={book1}></img>
                </div>
                <div className='Button-contant'>
                    {
                        getfilterArry.length === 0 ? (
                            <Button className='Bag-button' style={{ backgroundColor: '#A03037', color: 'white' }}
                                variant="contained" onClick={() => bookId(props.item.item._id)}>ADD TO BAG</Button>)
                            :
                            (<div className='ButtonUse'>

                                <Button className='Book-Dec' onClick={bookDecrement} id={props.item.item._id}
                                ><RemoveCircleOutlineTwoToneIcon /></Button>
                                <p className='Book-qul'> {quantity} </p>
                                <Button className='Book-Inc' onClick={bookIncrement} id={props.item.item._id}
                                ><AddCircleOutlineTwoToneIcon /></Button>

                            </div>)
                    }
                    
                            <Button className='wish-button' style={{ backgroundColor: '#333333', color: 'white' }} variant="contained"
                                onClick={() => wishbutton(props.item.item._id)} onClick={openWishlist}>

                                <FavoriteBorderOutlinedIcon /> WISHLIST</Button>
                        
                     
                        
                    

                </div>

            </div>
            <div className='Hower-Book'>
                <div className="Details">
                    <div className="Title-part">
                        <span id='Title-one'>{props.item.item.bookName}</span>
                        <span id='Title-second'>{props.item.item.author}</span>
                        <div className="Rating">
                            <span id='Num-one'>4.5*</span>
                            <span id='Num-two'>(20)</span>
                        </div>
                        <div className="Price-details">
                            <span id='rs'>Rs.</span>
                            <span id='new-price'>{props.item.item.price}</span>
                            <span id='old-price'> (2000) </span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Last-infrom'>
                    <span id="Book-infromation">Book Detail</span>
                    <p id="pargrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quia architecto deserunt aliquid a quo non veniam,
                        repellendus numquam debitis commodi nulla.
                        Laborum iusto fugiat consectetur voluptatum magni quos recusandae amet fugit, ad obcaecati!</p>
                    <hr id="Line" />
                    <div className="final-cont">
                        <span id="customr-infromation"> Customer Feedback</span>
                    </div>

                    <div className="Rating-part">
                        <span id='Rating'>overall rating</span>
                        <div className='Icons-list'>
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                        </div>
                        <input id='Review-message' type="text" placeholder='write your review'></input>
                        <button className='sub'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleBook;