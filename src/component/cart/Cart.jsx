import React from 'react'
import Header from '../header/Header'
import book1 from '../../assest/book1.png'
import { Button } from '@material-ui/core'
import {
    cartItemQuantity, getTheCard
} from '../../services/userSevice';
import CustomerDetails from '../customerDetails/CustomerDetails';

import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

import '../cart/Cart.scss'

function Cart(props) {
    const [quantity, setQuantity] = React.useState(1);
    const [filterArray, setFilterArray] = React.useState([]);
    const [cardIdDetails, setCartIdDetails] = React.useState([]);
    const [openAddress, setOpenAddress] = React.useState(false);
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);


    const bookDecrementItem = (_id) => {
        console.log("decrement")
        let data = {
            "quantityToBuy": quantity - 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                showCartItem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookIncrementItem = (_id) => {
        console.log("incre")
        let data = {
            "quantityToBuy": quantity + 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                showCartItem();
                console.log("Show Cart + Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const showCartItem = () => {
        getTheCard()
            .then((res) => {
                console.log(res)
                let filterData = res.data.result.filter((cart) => {
                    if (props.item._id === cart.product_id._id) {
                        setQuantity(cart.quantityToBuy)
                        setCartIdDetails(cart._id)
                        return cart;
                    }
                })
                setFilterArray(filterData);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteCartItem = () => {
        console.log("remove")

    }

    const orderPlaced = () => {
        setOpenAddress(!openAddress)
    }

    const continueOrder = () => {
        setOpenOrderSummery(openOrderSummery)
    }


    React.useEffect(() => {
        showCartItem();
    }, [quantity]);
    return (
        <div>
            <Header />
            <div className='wholeCart'>
                <div className='homeLine'>
                    <p>Home / </p>
                    <p>My cart</p>
                </div>
                <div className='bookDetailsBox'>
                    <div className='firstLine'>
                        <p className='cart'>My cart (1) </p>
                        <location className='location'>
                            <div className='bridgeLabz'>
                                <LocationOnTwoToneIcon /> BridgeLabz Solutions LLP, No...
                            </div>
                        </location>
                    </div>
                    <div>
                        <div className='imageAndDetails'>
                            <div>
                                <img className='book5' src={book1}></img>
                            </div>
                            <div>
                                <div className='cartBookDetails'>
                                    <span className='cartTitle'>Dont make me think
                                        {/* {props.item.item.bookName} */}
                                    </span> <br></br>
                                    <span className='cartAuthor'>by Steve king
                                        {/* {props.item.item.author} */}
                                    </span> <br></br>
                                    <span className='cartNewPrice'>  RS 1500
                                        {/* {props.item.item.price} */}
                                    </span><br></br>
                                    <span className='cartOldPrice'>rs2000</span> <br></br>
                                </div>
                                <div className='buttonFour'>

                                    <Button className='minus' onClick={() => bookDecrementItem()} id={props}
                                    > <RemoveCircleOutlineTwoToneIcon /> </Button>
                                    <Button> {quantity} </Button>
                                    <Button className='plus' onClick={() => bookIncrementItem()}
                                    > <AddCircleOutlineTwoToneIcon /> </Button>
                                    <Button className='remove' onClick={() => deleteCartItem()}
                                    > Remove </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {filterArray.length === 0 ? (
                        <Button className='submit' variant="contained" onClick={orderPlaced} >Place Order</Button>
                    ) : null
                    }
                </div>

                <div className='address'>
                    {!openAddress ? (
                        <div>
                            <div className='details'>
                                Address Details
                            </div>
                            <div className='order'>
                                <div className='summary'>
                                    Order summary
                                </div>
                            </div>
                        </div>

                    ) : (
                        <CustomerDetails continueOrder={continueOrder} />
                    )}


                </div>


            </div>
        </div>
    )
}

export default Cart