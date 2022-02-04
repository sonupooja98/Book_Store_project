import React from 'react';
import '../bookcard/Bookcard.scss'
import book1 from '../../assest/book1.png'
import { getBooks } from '../../services/userSevice';
import SingleBook from '../singlebookdetails/SingleBook';

function Bookcard() {
    const [bookArray, setBookArray] = React.useState([])

    const[select,setSelect] =React.useState(false);
    const [viewBook, setViewBook] = React.useState({});
    const getdisplayBoks = () => {
        getBooks().then((res) => {
            console.log(res)
            setBookArray(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }


    React.useEffect(() => {
        getdisplayBoks();

    }, [])

    const openImage = (item) => {
        setViewBook({...viewBook,item})
        setSelect(!select)
    }


    return (
        <div className='bookcont'>
            {select ? <SingleBook item={viewBook}/> :
            bookArray.map((item,index)=>(
                <div key={index}  value={select}>
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
            ))}
        </div>

    )
}

export default Bookcard;





