import React from 'react';
import { Button } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import '../singlebookdetails/SingleBook.scss'
import book1 from '../../assest/book1.png'
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';


import { addToCart, getTheCard, cartItemQuantity,addwishlist,getwishlist} from '../../services/userSevice'

function SingleBook(props) {


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
        <div className="hower-container">
            <div className='left-container'>

                <div className="image-container">
                    <img id="hower-img" src={book1}></img>
                </div>
                <div className='btn-container'>
                    {
                        getfilterArry.length === 0 ? (
                            <Button className='bag-btn' style={{ backgroundColor: '#A03037', color: 'white' }}
                                variant="contained" onClick={() => bookId(props.item.item._id)}>ADD TO BAG</Button>)
                            :
                            (<div className='buttonUse'>

                                <Button className='qun' onClick={bookDecrement} id={props.item.item._id}
                                ><RemoveCircleOutlineTwoToneIcon /></Button>
                                <p className='qu'> {quantity} </p>
                                <Button className='qun' onClick={bookIncrement} id={props.item.item._id}
                                ><AddCircleOutlineTwoToneIcon /></Button>

                            </div>)
                    }
                    
                            <Button className='wish-btn' style={{ backgroundColor: '#333333', color: 'white' }} variant="contained"
                                onClick={() => wishbutton(props.item.item._id)}>

                                <FavoriteBorderOutlinedIcon /> WISHLIST</Button>
                        
                     
                        
                    

                </div>

            </div>
            <div className='right-container'>
                <div className="text-containt">
                    <div className="title">
                        <span id='title1'>{props.item.item.bookName}</span>
                        <span id='title2'>{props.item.item.author}</span>
                        <div className="rating">
                            <span id='number1'>4.5*</span>
                            <span id='number2'>(20)</span>
                        </div>
                        <div className="price-container">
                            <span id='rs'>Rs.</span>
                            <span id='new-price'>{props.item.item.price}</span>
                            <span id='old-price'> (2000) </span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='second-div'>
                    <span id="book-detial">Book Detail</span>
                    <p id="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quia architecto deserunt aliquid a quo non veniam,
                        repellendus numquam debitis commodi nulla.
                        Laborum iusto fugiat consectetur voluptatum magni quos recusandae amet fugit, ad obcaecati!</p>
                    <hr id="line" />
                    <div className="third-div">
                        <span id="feedback"> Customer Feedback</span>
                    </div>

                    <div className="rating-div">
                        <span id='rating'>overall rating</span>
                        <div className='star'>
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                        </div>
                        <input id='review-message' type="text" placeholder='write your review'></input>
                        <button className='sub'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleBook;
