import React from 'react'
import Header from '../header/Header'
import book1 from '../../assest/book1.png'
import { Button } from '@material-ui/core'
import {
    cartItemQuantity, getTheCard,deletcart,orderDetails
} from '../../services/userSevice';
import CustomerDetails from '../customerDetails/CustomerDetails';

import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import { useHistory } from "react-router-dom";

import '../cart/Cart.scss'
import Footer from '../footer/Footer';
import Home from '../../pages/home/Home';

function Cart() {

        


    const [filterArray, setFilterArray] = React.useState([]);
    const [cardIdDetails, setCartIdDetails] = React.useState([]);
    const [openAddress, setOpenAddress] = React.useState(false);
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);
    const [quantity, setQuantity] = React.useState([filterArray.quantityToBuy]);
    const [showButton, setShowButton] = React.useState(true);


    let history = useHistory();
    const openHome =()=>{
        history.push('/home');
    }
    const goOderplace =()=>{
        history.push('/orderplaced');
    }
   

    
    const bookDecrementItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("decre")
        let data = {
            "quantityToBuy": quantity - 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                // console.log(res)
                console.log(data)
                showCartItem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookIncrementItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("incre")
        let data = {
            "quantityToBuy": quantity + 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                // console.log(res)
                console.log(data)
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
             
                setFilterArray(res.data.result);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteCartItem = (id) => {
        console.log("remove")
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        
        let data = {
            "quantityToBuy": quantity * 0,
        };

        deletcart(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                // console.log(res)
                console.log(data)
                showCartItem();
                
            }).catch((err) => {
                console.log(err)
            })
    }

    const orderPlaced = () => {
        
        setOpenAddress(!openAddress)
        setShowButton(false);
    }

    const continueOrder = () => {
        setOpenOrderSummery(!openOrderSummery)
    }

    const checkoutOrder = () => {


        let array_ordered_books = [];

        filterArray.map((element) => {
            let ordered_book = {
                product_id: element._id,
                product_name: element.bookName,
                product_quantity: element.quantityToBuy,
                product_price: element.price,
            };
            console.log(element._id)
            return array_ordered_books.push(ordered_book);
        });

        let orderObj = {
            orders: array_ordered_books,
        };
        orderDetails(orderObj)
            .then((response) => {
                console.log(response.data.message, "order items", response.data.result);
                console.log("orderdetialcalled")
                history.push('/orderDone')
            })
            .catch((err) => {
                console.warn(err);
            });
    };


    React.useEffect(() => {
        showCartItem();
    }, []);
    return (
        <div className='cart-mainContainer'>
            <Header />
            <div className='homeLine'>
                <span className='c-home' onClick={openHome}>Home/</span>
                <span className='c-list'>My cart</span>
            </div>
            <div className='cart-container'>

                <div className='bookDetailsBox'>
                    <div className='firstLine'>
                        <span className='cart'>My cart ({filterArray.length}) </span>
                        <location className='location'>
                            <div className='bridgeLabz'>
                                <LocationOnTwoToneIcon /> BridgeLabz Solutions LLP, No...
                            </div>
                        </location>
                    </div>
                    {
                        filterArray.filter(item => item.product_id !== null).map((item, index) => (
                            <div className='bookdetial-div'>

                                <div className='bookdetial-container'>
                                    <div className='cart-imageContainer'>
                                        <img className='cart-img' src={book1}></img>
                                    </div>

                                    <div>

                                        <div className='cartBookDetails'>
                                            <span className='cartTitle'>
                                                {item.product_id.bookName}
                                            </span> <br></br>
                                            <span className='cartAuthor'>by
                                                {item.product_id.author}
                                            </span> <br></br>
                                            <div className='cart-price'>
                                                <span className='cartNewPrice'>
                                                    {item.product_id.price}
                                                </span><br></br>
                                                <span className='cartOldPrice'>rs2000</span> <br></br>
                                            </div>
                                            <div className='buttonFour'>

                                                <Button className='minus' onClick={() => bookDecrementItem(item)}
                                                > <RemoveCircleOutlineTwoToneIcon /> </Button>
                                                <Button className='cartcount'> {item.quantityToBuy} </Button>
                                                <Button className='plus' onClick={() => bookIncrementItem(item)}
                                                > <AddCircleOutlineTwoToneIcon /> </Button>
                                                <Button className='remove' onClick={() => deleteCartItem(item)}
                                                > Remove </Button>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}
                    {filterArray.length !== 0  && showButton ? (
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


             
     
            <div className="Ordersummarycontainer">
                
                    {!openOrderSummery ? (
                         <p className="txt"></p>
                       
                    ) : (
                        <div className="order-smr-Container">
                             {/* <div className='order'> */}
                             <div className='summary-t'>
                                    Order summary
                                {/* </div> */}
                                </div>
                            {/* <p className="txt">Order Summary </p> */}
                            {filterArray.filter(item => item.product_id !== null).map((product, index) => (
                                <div className="summery-innr-contain" key={index}>
                                    <div className="imgDiv">
                                        <img className='summeryimage' src={book1}></img>
                                    </div>
                                    <div className="order-dtl-container">
                                        <b className='bookName'>{product.product_id.bookName} </b>
                                        <p className='author'>by-{product.product_id.author}</p>
                                        <div className='cart-price'>
                                                <span className='cartNewPrice'>
                                                RS {product.product_id.discountPrice}
                                                </span>
                                                <span className='cartOldPrice'>Rs{product.product_id.price}</span> 
                                            </div>
                                        {/* <span >
                                            <b className='newPrice'>Rs. {product.product_id.discountPrice} </b>
                                        </span>
                                        <del style={{ color: "gray" }} className='price'>Rs {product.product_id.price} </del> */}
                                    </div>
                                </div>
                            ))}
                            <div className="checkout-btn">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    
                                    onClick={checkoutOrder}
                                    onClick={goOderplace}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
                </div>
                </div>
                <div className='foot'>
                    <Footer />
                </div>
        </div>


    )
}

export default Cart