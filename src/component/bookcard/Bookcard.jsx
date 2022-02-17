import React from 'react';
import '../bookcard/Bookcard.scss'
import book1 from '../../assest/book1.png'
import { getBooks } from '../../services/userSevice';
import SingleBook from '../singlebookdetails/SingleBook';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Bookcard() {
    const [bookArray, setBookArray] = React.useState([])

    const[select,setSelect] =React.useState(false);
    const [viewBook, setViewBook] = React.useState({});
    const [bookNumber, setBookNumber] = React.useState(1);

    const getdisplayBoks = () => {
        getBooks().then((res) => {
            console.log(res)
            setBookArray(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }
    const nextPage = (e, value) => {
        setBookNumber(value)
    }


    React.useEffect(() => {
        getdisplayBoks();

    }, [])

    const openImage = (item) => {
        setViewBook({...viewBook,item})
        setSelect(!select)
    }


    return (
        <div>
        <div className='bookcont'>
            {select ? <SingleBook item={viewBook}/> :
            bookNumber==1 ?
            bookArray.slice(0,8).map((item,index)=>(
                <div className="sha" key={index}  value={select}>
                    <div className="book-container-part" onClick={()=>openImage(item)}>
                        <img className="image" src={book1}></img>

                    </div>
                    <div className="text-cont">
                        <div className="section">
                            <span id='sec1'>Book:{item.bookName}</span>
                            <span id='sec2'>Author:{item.author}</span>
                            <div className="rating">
                                <span id='numone'>4.5*</span>
                                <span id='numtwo'>(20)</span>
                            </div>
                            <div className="price-container-part">
                                <span id='rs'></span>
                                <span id='new-price'>Rs:-{item.price}</span>
                                <span id='old-price'>2000</span>
                            </div>
                        </div>
                    </div>
                </div>
            )):
            bookNumber==2 ?
            bookArray.slice(8,16).map((item,index)=>(
                <div className="sha" key={index}  value={select}>
                    <div className="book-container-part" onClick={()=>openImage(item)}>
                        <img className="image" src={book1}></img>

                    </div>
                    <div className="text-cont">
                        <div className="section">
                            <span id='sec1'>Book:{item.bookName}</span>
                            <span id='sec2'>Author:{item.author}</span>
                            <div className="rating">
                                <span id='numone'>4.5*</span>
                                <span id='numtwo'>(20)</span>
                            </div>
                            <div className="price-container-part">
                                <span id='rs'></span>
                                <span id='new-price'>Rs:-{item.price}</span>
                                <span id='old-price'>2000</span>
                            </div>
                        </div>
                    </div>
                </div>
            )):null
        }
        </div>
        <div className='pageing'>
        <Stack spacing={2}>
                            <Pagination bookNumber={bookNumber} onChange={nextPage} count={5} />
                        </Stack>
        </div>
        </div>

    )
}

export default Bookcard;





